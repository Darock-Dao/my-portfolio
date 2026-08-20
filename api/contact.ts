import { Resend } from 'resend';

// Initialize Resend with your API key from the .env file
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // 1. Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // 2. Extract the data sent from your frontend React form
    const { name, email, subject, message } = req.body;

    // 3. (Your Task) Validate the data (ensure fields aren't empty, valid email, etc.)

    // 4. (Your Task) Use the Resend SDK to send the email
    // Example: resend.emails.send({ ... })

    // 5. Send a success response back to the frontend
    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
    
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
