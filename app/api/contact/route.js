import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ message: "All fields are required" }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "zh7774440@gmail.com",
      subject: "New Contact Form Message Form Portfolio",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });

  } catch (error) {
    console.error("Email Send Error:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 });
  }
}
