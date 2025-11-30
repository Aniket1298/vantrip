import { NextResponse } from 'next/server';
import { sendContactNotification } from '@/lib/notifications';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const result = await sendContactNotification({ name, email, phone, message });
    if (!result.success) {
      console.error('Contact notification failed:', result.error);
      return NextResponse.json({ error: 'Failed to send contact message' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Contact message sent' });
  } catch (error) {
    console.error('Unhandled error in contact route:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
