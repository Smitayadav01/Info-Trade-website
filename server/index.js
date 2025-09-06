const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create transporter for sending emails
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, subject, message, inquiryType } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill in all required fields' 
      });
    }

    const transporter = createTransporter();

    // Email to website owner
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL || process.env.EMAIL_USER,
      subject: `New AlgoTrade Pro Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #2563EB, #4F46E5); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h2 style="margin: 0;">New Trading Inquiry</h2>
          </div>
          <div style="padding: 20px; background: #f9f9f9;">
            <h3 style="color: #2563EB; margin-bottom: 20px;">Contact Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 10px; font-weight: bold; color: #555;">Name:</td>
                <td style="padding: 10px; color: #333;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 10px; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 10px; color: #333;">${email}</td>
              </tr>
              ${company ? `
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 10px; font-weight: bold; color: #555;">Company:</td>
                <td style="padding: 10px; color: #333;">${company}</td>
              </tr>
              ` : ''}
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 10px; font-weight: bold; color: #555;">Inquiry Type:</td>
                <td style="padding: 10px; color: #333;">${inquiryType}</td>
              </tr>
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 10px; font-weight: bold; color: #555;">Subject:</td>
                <td style="padding: 10px; color: #333;">${subject}</td>
              </tr>
            </table>
            <div style="margin-top: 20px;">
              <h4 style="color: #2563EB; margin-bottom: 10px;">Message:</h4>
              <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #2563EB;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          <div style="background: #f1f5f9; padding: 15px; border-radius: 0 0 10px 10px; text-align: center; color: #666;">
            <p style="margin: 0; font-size: 14px;">This email was sent from the AlgoTrade Pro contact form</p>
            <p style="margin: 5px 0 0 0; font-size: 12px;">Received on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    };

    // Confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting AlgoTrade Pro - We\'ve received your message',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #2563EB, #4F46E5); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h2 style="margin: 0;">Thank You for Contacting Us!</h2>
          </div>
          <div style="padding: 20px;">
            <p style="color: #333; font-size: 16px; line-height: 1.6;">Dear ${name},</p>
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Thank you for reaching out to AlgoTrade Pro. We have successfully received your trading inquiry and our team will review it shortly.
            </p>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563EB;">
              <h3 style="color: #2563EB; margin: 0 0 15px 0;">Your Message Summary:</h3>
              <p style="margin: 5px 0; color: #555;"><strong>Subject:</strong> ${subject}</p>
              <p style="margin: 5px 0; color: #555;"><strong>Inquiry Type:</strong> ${inquiryType}</p>
              ${company ? `<p style="margin: 5px 0; color: #555;"><strong>Company:</strong> ${company}</p>` : ''}
            </div>
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              <strong>What happens next?</strong>
            </p>
            <ul style="color: #555; line-height: 1.8;">
              <li>Our trading experts will review your inquiry within 24 hours</li>
              <li>You'll receive a personalized response about our trading solutions</li>
              <li>For urgent trading matters, call our trading desk at +91 98765 43210</li>
            </ul>
            <div style="background: linear-gradient(135deg, #10B981, #059669); color: white; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
              <p style="margin: 0; font-weight: bold;">Ready to start trading?</p>
              <p style="margin: 5px 0 0 0;">Trading Desk: +91 98765 43210 | Email: hello@algotradepro.in</p>
            </div>
          </div>
          <div style="background: #f1f5f9; padding: 15px; border-radius: 0 0 10px 10px; text-align: center; color: #666;">
            <p style="margin: 0; font-size: 14px;">Best regards,<br>The AlgoTrade Pro Team</p>
            <p style="margin: 10px 0 0 0; font-size: 12px;">Mumbai, Maharashtra, India</p>
          </div>
        </div>
      `
    };

    // Send emails
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(userMailOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully! Check your email for confirmation.' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    });
  }
});

// Newsletter subscription endpoint
app.post('/api/subscribe', async (req, res) => {
  try {
    const { email } = req.body;

    // Validate email
    if (!email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email is required' 
      });
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please enter a valid email address' 
      });
    }

    const transporter = createTransporter();

    // Email to website owner
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL || process.env.EMAIL_USER,
      subject: 'New Newsletter Subscription - AlgoTrade Pro',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #10B981, #059669); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h2 style="margin: 0;">📧 New Newsletter Subscription</h2>
          </div>
          <div style="padding: 20px; background: #f9f9f9;">
            <h3 style="color: #10B981; margin-bottom: 20px;">Subscription Details</h3>
            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #10B981;">
              <p style="margin: 0; color: #333; font-size: 16px;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 10px 0 0 0; color: #666; font-size: 14px;">Subscribed on: ${new Date().toLocaleString()}</p>
            </div>
            <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px solid #d1fae5;">
              <p style="margin: 0; color: #065f46; font-size: 14px;">
                <strong>Action Required:</strong> Add this subscriber to your newsletter list and send them trading updates and market insights.
              </p>
            </div>
          </div>
          <div style="background: #f1f5f9; padding: 15px; border-radius: 0 0 10px 10px; text-align: center; color: #666;">
            <p style="margin: 0; font-size: 14px;">AlgoTrade Pro Newsletter System</p>
          </div>
        </div>
      `
    };

    // Confirmation email to subscriber
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to AlgoTrade Pro Newsletter! 🚀',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #2563EB, #4F46E5); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h2 style="margin: 0;">🎉 Welcome to AlgoTrade Pro!</h2>
          </div>
          <div style="padding: 20px;">
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Thank you for subscribing to our newsletter! You're now part of an exclusive community of algorithmic traders.
            </p>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563EB;">
              <h3 style="color: #2563EB; margin: 0 0 15px 0;">What you'll receive:</h3>
              <ul style="color: #555; line-height: 1.8; margin: 0; padding-left: 20px;">
                <li>Weekly market analysis and trading insights</li>
                <li>New algorithm updates and performance reports</li>
                <li>Exclusive trading strategies and tips</li>
                <li>Early access to new features and tools</li>
                <li>Market volatility alerts and opportunities</li>
              </ul>
            </div>
            <div style="background: linear-gradient(135deg, #10B981, #059669); color: white; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
              <p style="margin: 0; font-weight: bold;">Ready to start trading?</p>
              <p style="margin: 5px 0 0 0;">Get started with our AI-powered algorithms today!</p>
            </div>
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Have questions? Reply to this email or contact our trading desk at +91 98765 43210.
            </p>
          </div>
          <div style="background: #f1f5f9; padding: 15px; border-radius: 0 0 10px 10px; text-align: center; color: #666;">
            <p style="margin: 0; font-size: 14px;">Best regards,<br>The AlgoTrade Pro Team</p>
            <p style="margin: 10px 0 0 0; font-size: 12px;">Mumbai, Maharashtra, India</p>
          </div>
        </div>
      `
    };

    // Send emails
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(userMailOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed! Check your email for confirmation.' 
    });

  } catch (error) {
    console.error('Error sending subscription email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to subscribe. Please try again later.' 
    });
  }
});

// User signup notification endpoint
app.post('/api/signup-notification', async (req, res) => {
  try {
    const { name, email, company } = req.body;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name and email are required' 
      });
    }

    const transporter = createTransporter();

    // Email to website owner
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL || process.env.EMAIL_USER,
      subject: 'New User Registration - AlgoTrade Pro',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #8B5CF6, #7C3AED); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h2 style="margin: 0;">🎉 New User Registration</h2>
          </div>
          <div style="padding: 20px; background: #f9f9f9;">
            <h3 style="color: #8B5CF6; margin-bottom: 20px;">User Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 10px; font-weight: bold; color: #555;">Name:</td>
                <td style="padding: 10px; color: #333;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 10px; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 10px; color: #333;">${email}</td>
              </tr>
              ${company ? `
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 10px; font-weight: bold; color: #555;">Company:</td>
                <td style="padding: 10px; color: #333;">${company}</td>
              </tr>
              ` : ''}
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 10px; font-weight: bold; color: #555;">Registration Date:</td>
                <td style="padding: 10px; color: #333;">${new Date().toLocaleString()}</td>
              </tr>
            </table>
            <div style="background: #faf5ff; padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px solid #e9d5ff;">
              <p style="margin: 0; color: #6b21a8; font-size: 14px;">
                <strong>Action Required:</strong> Follow up with this new user to help them get started with algorithmic trading.
              </p>
            </div>
          </div>
          <div style="background: #f1f5f9; padding: 15px; border-radius: 0 0 10px 10px; text-align: center; color: #666;">
            <p style="margin: 0; font-size: 14px;">AlgoTrade Pro User Management System</p>
          </div>
        </div>
      `
    };

    // Welcome email to new user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to AlgoTrade Pro - Your Trading Journey Begins! 🚀',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #2563EB, #4F46E5); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h2 style="margin: 0;">🎉 Welcome to AlgoTrade Pro!</h2>
          </div>
          <div style="padding: 20px;">
            <p style="color: #333; font-size: 16px; line-height: 1.6;">Dear ${name},</p>
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Congratulations! You've successfully joined AlgoTrade Pro, India's leading algorithmic trading platform. 
              Your journey to profitable trading starts now.
            </p>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563EB;">
              <h3 style="color: #2563EB; margin: 0 0 15px 0;">What's Next?</h3>
              <ul style="color: #555; line-height: 1.8; margin: 0; padding-left: 20px;">
                <li>Explore our AI-powered trading algorithms</li>
                <li>Access real-time market analytics and insights</li>
                <li>Start with our risk-managed trading strategies</li>
                <li>Join our community of successful traders</li>
                <li>Get 24/7 support from our trading experts</li>
              </ul>
            </div>
            <div style="background: linear-gradient(135deg, #10B981, #059669); color: white; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
              <p style="margin: 0; font-weight: bold;">Ready to start trading?</p>
              <p style="margin: 5px 0 0 0;">Login to your account and explore our trading services!</p>
            </div>
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Need help getting started? Our trading desk is available at +91 98765 43210 or email us at hello@algotradepro.in
            </p>
          </div>
          <div style="background: #f1f5f9; padding: 15px; border-radius: 0 0 10px 10px; text-align: center; color: #666;">
            <p style="margin: 0; font-size: 14px;">Best regards,<br>The AlgoTrade Pro Team</p>
            <p style="margin: 10px 0 0 0; font-size: 12px;">Mumbai, Maharashtra, India</p>
          </div>
        </div>
      `
    };

    // Send emails
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(userMailOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Registration notification sent successfully!' 
    });

  } catch (error) {
    console.error('Error sending signup notification:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send notification. Please try again later.' 
    });
  }
});

// User login notification endpoint
app.post('/api/login-notification', async (req, res) => {
  try {
    const { name, email } = req.body;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name and email are required' 
      });
    }

    const transporter = createTransporter();

    // Email to website owner
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL || process.env.EMAIL_USER,
      subject: 'User Login Activity - AlgoTrade Pro',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #059669, #047857); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h2 style="margin: 0;">🔐 User Login Activity</h2>
          </div>
          <div style="padding: 20px; background: #f9f9f9;">
            <h3 style="color: #059669; margin-bottom: 20px;">Login Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 10px; font-weight: bold; color: #555;">User:</td>
                <td style="padding: 10px; color: #333;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 10px; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 10px; color: #333;">${email}</td>
              </tr>
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 10px; font-weight: bold; color: #555;">Login Time:</td>
                <td style="padding: 10px; color: #333;">${new Date().toLocaleString()}</td>
              </tr>
            </table>
            <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px solid #d1fae5;">
              <p style="margin: 0; color: #065f46; font-size: 14px;">
                <strong>User Activity:</strong> This user has successfully logged into their AlgoTrade Pro account.
              </p>
            </div>
          </div>
          <div style="background: #f1f5f9; padding: 15px; border-radius: 0 0 10px 10px; text-align: center; color: #666;">
            <p style="margin: 0; font-size: 14px;">AlgoTrade Pro Activity Monitor</p>
          </div>
        </div>
      `
    };

    // Send email to owner
    await transporter.sendMail(ownerMailOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Login notification sent successfully!' 
    });

  } catch (error) {
    console.error('Error sending login notification:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send notification. Please try again later.' 
    });
  }
});
// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'Server is running!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});