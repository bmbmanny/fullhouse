import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { SITE_CONFIG } from '@/lib/constants';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Create email HTML
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #dc2626;">New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service:</strong> ${service || 'Not specified'}</p>
        <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">
        <h3>Message:</h3>
        <p style="white-space: pre-wrap;">${message}</p>
        <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">
        <p style="color: #6b7280; font-size: 12px;">Sent from Full House Contact Form</p>
      </div>
    `;

    // Plain text version
    const textContent = `
New Contact Form Submission from Full House Website

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Service: ${service || 'Not specified'}

Message:
${message}

---
Sent from Full House Contact Form
    `.trim();

    // Send email
    await transporter.sendMail({
      from: `"Full House Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || SITE_CONFIG.email,
      subject: `New Contact Form: ${name} - ${service || 'General Inquiry'}`,
      text: textContent,
      html: htmlContent,
      replyTo: email,
    });

    console.log('Contact form email sent successfully');

    // Return success response
    return NextResponse.json(
      {
        message: 'Form submitted successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again or call us directly.' },
      { status: 500 }
    );
  }
}
