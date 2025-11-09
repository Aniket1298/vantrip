import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { sendBookingNotification } from '@/lib/notifications';

// In a real app, use a database. For now, we'll save to a JSON file
const BOOKINGS_FILE = path.join(process.cwd(), 'data', 'bookings.json');

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

    // Create data directory if it doesn't exist
    await fs.mkdir(path.dirname(BOOKINGS_FILE), { recursive: true });

    // Read existing bookings
    let bookings = [];
    try {
      const data = await fs.readFile(BOOKINGS_FILE, 'utf8');
      bookings = JSON.parse(data);
      console.log(`📂 Read ${bookings.length} existing bookings`);
    } catch (err) {
      console.log('📂 No existing bookings file, starting fresh');
      // File doesn't exist yet, start with empty array
      bookings = [];
    }

    // Add new booking
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

    bookings.push(booking);

    // Save updated bookings
    console.log(`💾 Saving booking ${booking.id}`);
    await fs.writeFile(BOOKINGS_FILE, JSON.stringify(bookings, null, 2));

    // Verify API key is set
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