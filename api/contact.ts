import { Resend } from 'resend';

// Initialize Resend with your API key from the .env file
const resend = new Resend(process.env.RESEND_API_KEY);

import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 1. Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // 2. Extract the data sent from your frontend React form
    const { name, email, subject, message } = req.body;

    // 3. (Your Task) Validate the data (ensure fields aren't empty, valid email, etc.)
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    // regex for email validation 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    // 4. Send the email to yourself (the portfolio owner)
    const { error: ownerError } = await resend.emails.send({
      from: "onboarding@resend.dev", // Must be a verified domain or Resend's testing email
      replyTo: email, // Set the reply-to to the sender's email
      to: "derekdao01@gmail.com",
      subject: `New Portfolio Message: ${subject}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    if (ownerError) {
      console.error('Resend API Error (Owner):', ownerError);
      return res.status(400).json({ error: ownerError.message });
    }

    // 5. Send an auto-reply confirmation back to the user
    // Format the current date nicely
    const dateStr = new Date().toLocaleString('en-US', { 
        dateStyle: 'full', 
        timeStyle: 'short',
        timeZone: 'America/Los_Angeles' 
    });

    const { error: userError } = await resend.emails.send({
      from: "onboarding@resend.dev", // In production, change this to your custom domain
      to: email, 
      subject: `Confirmation: I received your message!`,
      html: `<p>Hi ${name},</p>
             <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible.</p>
             <hr />
             <p><strong>For your records, here is what you sent on ${dateStr}:</strong></p>
             <p><strong>Subject:</strong> ${subject}</p>
             <p><strong>Message:</strong></p>
             <blockquote style="border-left: 4px solid #ccc; margin-left: 0; padding-left: 16px; color: #555;">
               ${message}
             </blockquote>
             <p>Best regards,<br/>Derek Dao</p>`,
    });

    if (userError) {
      // If the auto-reply fails (like due to Resend's free tier sandbox limit), we just log it
      // but still tell the user it was successful, because you (the owner) still got the first email!
      console.error('Resend API Error (Auto-reply):', userError);
    }

    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
    
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
