import { Resend } from 'resend';
import { createAdminEmailHtml, createCustomerEmailHtml } from './emailTemplates';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendBookingNotification(booking: any) {
  try {
    console.log('Starting email notifications with Resend API Key:', process.env.RESEND_API_KEY?.substring(0, 8) + '...');
    console.log('Admin email:', process.env.ADMIN_EMAIL);
    
    // Send email to admin
    const adminResult = await resend.emails.send({
      from: 'Banaras Bound <onboarding@resend.dev>',
      to: process.env.ADMIN_EMAIL!,
      subject: `New Booking Request - ${booking.name}`,
      html: createAdminEmailHtml(booking),
    });

    // Send confirmation to customer
    const customerResult = await resend.emails.send({
      from: 'Banaras Bound <onboarding@resend.dev>',
      to: booking.email,
      subject: 'Your BanarasBound Booking Request Confirmation',
      html: createCustomerEmailHtml(booking),
    });

    console.log('Email sending results:', {
      adminEmail: process.env.ADMIN_EMAIL,
      customerEmail: booking.email,
      adminResult,
      customerResult
    });

    return { success: true };
  } catch (error) {
    console.error('Failed to send notification:', error);
    return { success: false, error };
  }
}