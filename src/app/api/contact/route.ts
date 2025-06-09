import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Instantiate Resend with the API key from your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

// This function handles POST requests to /api/contact
export async function POST(request: Request) {
    try {
        // Parse the request body to get the form data
        const { name, email, message } = await request.json();

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Use Resend to send the email
        const { data, error } = await resend.emails.send({
            // IMPORTANT: The 'from' address must be from a domain you've verified with Resend.
            // For getting started, Resend's default 'onboarding@resend.dev' works for testing.
            from: 'Contact Form <onboarding@resend.dev>',

            // IMPORTANT: This is the email address where you will RECEIVE the contact form submissions.
            // Replace this with your actual email address.
            to: ['chronotechonline@gmail.com'],

            subject: `New Message from ${name} via Your Website`,

            // You can use simple text, or build a nice React component for your email body
            html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
        });

        if (error) {
            console.error("Error sending email:", error);
            return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
        }

        console.log("Email sent successfully:", data);
        return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });

    } catch (error) {
        console.error("Error in POST /api/contact:", error);
        return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
    }
}