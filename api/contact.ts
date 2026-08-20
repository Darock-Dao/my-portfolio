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

    // 4. (Your Task) Use the Resend SDK to send the email
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // Must be a verified domain or Resend's testing email
      replyTo: email, // Set the reply-to to the sender's email
      to: "derekdao01@gmail.com",
      subject: subject,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
    
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
