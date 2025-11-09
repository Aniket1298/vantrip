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

export function createAdminEmailHtml(booking: BookingData) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>New Booking Request - BanarasBound</title>
      </head>
      <body style="font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; line-height: 1.5; color: #1f2937; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #ffffff; border-radius: 8px; border: 1px solid #e5e7eb; padding: 24px; margin-bottom: 24px;">
          <h1 style="color: #1f2937; font-size: 24px; margin: 0 0 24px 0;">New Booking Request</h1>
          
          <div style="margin-bottom: 24px;">
            <h2 style="font-size: 18px; color: #4b5563; margin: 0 0 16px 0;">Customer Details</h2>
            <p style="margin: 8px 0;"><strong>Name:</strong> ${booking.name}</p>
            <p style="margin: 8px 0;"><strong>Phone:</strong> ${booking.phone}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> ${booking.email}</p>
          </div>

          <div style="margin-bottom: 24px;">
            <h2 style="font-size: 18px; color: #4b5563; margin: 0 0 16px 0;">Booking Details</h2>
            <p style="margin: 8px 0;"><strong>Booking ID:</strong> ${booking.id}</p>
            <p style="margin: 8px 0;"><strong>Number of Travelers:</strong> ${booking.travellers}</p>
            <p style="margin: 8px 0;"><strong>Price Per Person:</strong> ₹${booking.pricePerPerson.toLocaleString()}</p>
            <p style="margin: 8px 0;"><strong>Total Amount:</strong> ₹${booking.total.toLocaleString()}</p>
            ${booking.pickupDetails ? `<p style="margin: 8px 0;"><strong>Pickup Details:</strong> ${booking.pickupDetails}</p>` : ''}
            <p style="margin: 8px 0;"><strong>Requested on:</strong> ${new Date(booking.timestamp).toLocaleString('en-IN', { dateStyle: 'full', timeStyle: 'short' })}</p>
          </div>

          <div style="background-color: #fff7ed; border-radius: 6px; padding: 16px; margin-top: 24px;">
            <p style="margin: 0; color: #9a3412; font-weight: 500;">Please contact the customer within 24 hours to confirm their booking.</p>
          </div>
        </div>
        
        <div style="text-align: center; color: #6b7280; font-size: 14px;">
          <p>This is an automated message from BanarasBound booking system</p>
        </div>
      </body>
    </html>
  `;
}

export function createCustomerEmailHtml(booking: BookingData) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Your Booking Request - BanarasBound</title>
      </head>
      <body style="font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; line-height: 1.5; color: #1f2937; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #ffffff; border-radius: 8px; border: 1px solid #e5e7eb; padding: 24px; margin-bottom: 24px;">
          <h1 style="color: #1f2937; font-size: 24px; margin: 0 0 24px 0;">Thank You for Choosing BanarasBound!</h1>
          
          <div style="margin-bottom: 24px;">
            <p style="margin: 0 0 16px 0; font-size: 16px;">Dear ${booking.name},</p>
            <p style="margin: 0 0 16px 0;">We've received your booking request and our team will contact you shortly on ${booking.phone} to confirm your booking and discuss the details.</p>
          </div>

          <div style="margin-bottom: 24px; background-color: #f8fafc; border-radius: 6px; padding: 16px;">
            <h2 style="font-size: 18px; color: #4b5563; margin: 0 0 16px 0;">Your Booking Summary</h2>
            <p style="margin: 8px 0;"><strong>Booking Reference:</strong> ${booking.id}</p>
            <p style="margin: 8px 0;"><strong>Number of Travelers:</strong> ${booking.travellers}</p>
            <p style="margin: 8px 0;"><strong>Total Amount:</strong> ₹${booking.total.toLocaleString()}</p>
            ${booking.pickupDetails ? `<p style="margin: 8px 0;"><strong>Pickup Details:</strong> ${booking.pickupDetails}</p>` : ''}
          </div>

          <div style="background-color: #f0fdf4; border-radius: 6px; padding: 16px; margin-top: 24px;">
            <p style="margin: 0; color: #166534;">Our team will reach out to you within 24 hours. If you have any immediate questions, feel free to reply to this email.</p>
          </div>
        </div>
        
        <div style="text-align: center; color: #6b7280; font-size: 14px;">
          <p>BanarasBound - Your Gateway to Sacred Experiences</p>
          <p style="margin-top: 8px;">This is an automated confirmation of your booking request</p>
        </div>
      </body>
    </html>
  `;
}