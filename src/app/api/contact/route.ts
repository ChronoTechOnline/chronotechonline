import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Instantiate Resend with the API key from your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

// This function handles POST requests to /api/contact
export async function POST(request: Request) {
    try {
        // Parse the request body to get the form data
        const { name, email, topic, message } = await request.json();

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Use Resend to send the email
        const { data, error } = await resend.emails.send({
            // IMPORTANT: The 'from' address must be from a domain you've verified with Resend.
            // For getting started, Resend's default 'onboarding@resend.dev' works for testing.
            from: 'ChronoTech Contact Form <contact@chronotech.online>',

            // IMPORTANT: This is the email address where you will RECEIVE the contact form submissions.
            // Replace this with your actual email address.
            to: ['chronotechonline@gmail.com'],

            subject: `New Message from ${name} via ChronoTech Website`,

            // You can use simple text, or build a nice React component for your email body
            html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
    
    <div style="background-color: #112240; color: #ffffff; padding: 25px; text-align: center;">
      <img src="https://chronotech.online/images/ChronoTechLogo.png" alt="ChronoTech Logo" style="width: 150px; height: auto; border-radius: 4px; margin-bottom: 10px;">
      <h1 style="margin: 0; font-size: 24px; font-weight: bold;">New Contact Form Submission</h1>
    </div>

    <div style="padding: 25px;">
      <p style="font-size: 16px; color: #555555; line-height: 1.6;">Hello,</p>
      <p style="font-size: 16px; color: #555555; line-height: 1.6;">You have received a new message from your website's contact form. Here are the details:</p>
      
      <hr style="border: 0; height: 1px; background: #dddddd; margin: 20px 0;">
      
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
        <tr>
          <td style="padding-bottom: 10px; vertical-align: top; width: 30%;">
            <p style="margin: 0; font-weight: bold; color: #333333;">Name:</p>
          </td>
          <td style="padding-bottom: 10px; vertical-align: top;">
            <p style="margin: 0; color: #555555;">${name}</p>
          </td>
        </tr>
        <tr>
          <td style="padding-bottom: 10px; vertical-align: top;">
            <p style="margin: 0; font-weight: bold; color: #333333;">Email:</p>
          </td>
          <td style="padding-bottom: 10px; vertical-align: top;">
            <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding-bottom: 10px; vertical-align: top;">
            <p style="margin: 0; font-weight: bold; color: #333333;">Service:</p>
          </td>
          <td style="padding-bottom: 10px; vertical-align: top;">
            <p style="margin: 0; color: #555555;">${topic ? topic : '—'}</p>
          </td>
        </tr>
      </table>
      
      <hr style="border: 0; height: 1px; background: #dddddd; margin: 20px 0;">
      
      <p style="font-weight: bold; color: #333333; margin: 0 0 10px 0;">Message:</p>
      <p style="white-space: pre-wrap; margin: 0; font-size: 16px; color: #555555; line-height: 1.6;">${message}</p>
    </div>
    
    <div style="background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #aaaaaa;">
      <p style="margin: 0;">This email was sent from your contact form on your website.</p>
    </div>

  </div>
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