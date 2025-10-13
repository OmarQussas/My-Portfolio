import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

console.log("📩 Contact API route loaded");

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // 🔹 Temporary static credentials for local testing
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "omarqussas@gmail.com", // replace with your Gmail
        pass: "lgze dswy itsp ddcs",
      },
    });

    const mailOptions = {
      from: email,
      to: "omarqussas@gmail.com", // where you’ll receive messages
      subject: `New Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent:", info.messageId);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
