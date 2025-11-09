import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { sendBookingNotification } from '@/lib/notifications';

// In a real app, use a database. For now, we'll save to a JSON file
const BOOKINGS_FILE = path.join(process.cwd(), 'data', 'bookings.json');

export async function POST(request: Request) {
  try {
    const body = await request.json();
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
    } catch (_error) {
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
    await fs.writeFile(BOOKINGS_FILE, JSON.stringify(bookings, null, 2));

    // Verify API key is set
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set in environment variables');
      return NextResponse.json(
        { error: 'Email service configuration missing' },
        { status: 500 }
      );
    }

    // Send notifications with detailed error handling
    try {
      const notificationResult = await sendBookingNotification(booking);
      if (!notificationResult.success) {
        console.error('Notification failed:', notificationResult.error);
        return NextResponse.json(
          { error: 'Failed to send notification' },
          { status: 500 }
        );
      }
    } catch (_error) {
      console.error('Notification error:', _error);
      return NextResponse.json(
        { error: 'Failed to send notification' },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      booking,
      message: 'Booking saved and notifications sent'
    });
  } catch (_error) {
    console.error('Error saving booking:', _error);
    return NextResponse.json(
      { error: 'Failed to save booking' },
      { status: 500 }
    );
  }
}