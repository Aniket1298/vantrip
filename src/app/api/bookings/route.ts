import { NextResponse } from 'next/server';
import { sendBookingNotification } from '@/lib/notifications';

export async function POST(request: Request) {
  console.log('📝 [POST /api/bookings] Received booking request');
  try {
    const body = await request.json();
    console.log('📬 Request body:', { ...body, email: '****' }); // Log body but mask email
    const { name, email, phone, travellers, pickupDetails, pricePerPerson, timestamp = new Date().toISOString() } = body;

    // Basic validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create booking object
    const booking = {
      id: `booking_${Date.now()}`,
      name,
      email,
      phone,
      travellers,
      pickupDetails,
      pricePerPerson,
      total: pricePerPerson * travellers,
      timestamp,
      status: 'pending'
    };

    // Verify API key is set
    console.log('API KEYYYYYYYYYYYYYY',process.env.RESEND_API_KEY)
    if (!process.env.RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY is not set in environment variables');
      console.log('Environment check:', {
        hasResendKey: !!process.env.RESEND_API_KEY,
        hasAdminEmail: !!process.env.ADMIN_EMAIL,
        NODE_ENV: process.env.NODE_ENV
      });
      return NextResponse.json(
        { error: 'Email service configuration missing' },
        { status: 500 }
      );
    }

    // Send notifications with detailed error handling
    try {
      console.log('📧 Attempting to send notification emails');
      const notificationResult = await sendBookingNotification(booking);
      if (!notificationResult.success) {
        console.error('❌ Notification failed:', notificationResult.error);
        return NextResponse.json(
          { error: 'Failed to send notification' },
          { status: 500 }
        );
      }
      console.log('✅ Notifications sent successfully');
    } catch (error) {
      console.error('❌ Exception while sending notification:', error);
      console.error('Stack trace:', error instanceof Error ? error.stack : 'No stack trace');
      return NextResponse.json(
        { error: 'Failed to send notification' },
        { status: 500 }
      );
    }

    console.log('✅ Booking process completed successfully');
    return NextResponse.json({ 
      success: true, 
      booking,
      message: 'Booking saved and notifications sent'
    });
  } catch (error) {
    console.error('❌ Unhandled exception in booking handler:', error);
    console.error('Stack trace:', error instanceof Error ? error.stack : 'No stack trace');
    return NextResponse.json(
      { error: 'Failed to save booking' },
      { status: 500 }
    );
  }
}