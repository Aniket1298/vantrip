import { NextResponse } from 'next/server';
import { sendBookingNotification } from '@/lib/notifications';

export async function GET() {
  try {
    // Create a test booking
    const testBooking = {
      id: `test_${Date.now()}`,
      name: "Test Customer",
  email: process.env.ADMIN_EMAIL ?? "", // Send test email to admin email
      phone: "+91 98765 43210",
      travellers: 2,
      pickupDetails: "Test Flight AI123",
      pricePerPerson: 15000,
      total: 30000,
      timestamp: new Date().toISOString()
    };

    // Send test notification
    const result = await sendBookingNotification(testBooking);

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: "Test email sent successfully!",
        details: {
          adminEmail: process.env.ADMIN_EMAIL,
          bookingId: testBooking.id
        }
      });
    } else {
      throw result.error;
    }
  } catch {
    return NextResponse.json({
      success: false,
      error: 'Test email failed.'
    }, { status: 500 });
  }
}