import { Resend } from 'resend';
import { createAdminEmailHtml, createCustomerEmailHtml } from './emailTemplates';

interface BookingData {
  id: string;
  name: string;
  email: string;
  phone: string;
  travellers: number;
  pickupDetails?: string;
  pricePerPerson: number;
  total: number;
  timestamp: string;
}

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendBookingNotification(booking: BookingData) {
  try {
    console.log('Starting email notifications with Resend API Key:', process.env.RESEND_API_KEY?.substring(0, 8) + '...');
    console.log('Admin email:', process.env.ADMIN_EMAIL);
    
    // During testing, we can only send to the verified email
    const isTestMode = !process.env.VERIFIED_DOMAIN;
    const fromEmail = isTestMode 
      ? 'onboarding@resend.dev'
      : `noreply@${process.env.VERIFIED_DOMAIN}`;
    
    console.log('Email mode:', isTestMode ? 'TESTING' : 'PRODUCTION');
    console.log('Using from address:', fromEmail);

    // In test mode, we can only send to the admin email
    const adminResult = await resend.emails.send({
      from: `TimelessKashi <${fromEmail}>`,
      to: process.env.ADMIN_EMAIL!,
      subject: `New Booking Request - ${booking.name}`,
      html: createAdminEmailHtml(booking),
    });

    // Only try sending to customer if we're not in test mode or if customer email matches admin
    const canSendToCustomer = !isTestMode || booking.email === process.env.ADMIN_EMAIL;
    let customerResult = null;
    
    if (canSendToCustomer) {
      customerResult = await resend.emails.send({
        from: `TimelessKashi <${fromEmail}>`,
        to: booking.email,
        subject: 'Your TimelessKashi Booking Request Confirmation',
        html: createCustomerEmailHtml(booking),
      });
    } else {
      console.log('Skipping customer email in test mode - domain not verified yet');
    }

    console.log('Email sending results:', {
      adminEmail: process.env.ADMIN_EMAIL,
      customerEmail: canSendToCustomer ? booking.email : 'SKIPPED (test mode)',
      adminResult,
      customerResult
    });

    return { 
      success: true,
      testMode: isTestMode,
      adminEmailSent: !!adminResult?.id,
      customerEmailSent: !!customerResult?.id
    };
  } catch (error: unknown) {
    console.error('Failed to send notification:', error);
    
    // Check for domain verification error
    const errorMsg = String(error);
    if (errorMsg.includes('verify a domain')) {
      return { 
        success: false, 
        error: 'Domain not verified. Please verify your domain at resend.com/domains',
        testMode: true
      };
    }
    
    return { 
      success: false, 
      error: errorMsg,
      testMode: isTestMode 
    };
  }
}