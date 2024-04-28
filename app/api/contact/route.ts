import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, subject, category, phone, message } = body;
  const credentials = {
    email: "info.chiraro@gmail.com",
    password: "tuownogdwkoqqecx",
  };
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: credentials.email,
      pass: credentials.password,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  const mailOptions = {
    from: credentials.email,
    name: "Chiraro Digital",
    to: credentials.email,
    subject: `Contact form from ${name}`,
    text: ` Name: ${name} \n Email: ${email}\n Subject: ${subject} \n Phone: ${phone} \n Category: ${category}\n\n Message: ${message} `,
  };

  try {
    console.log("Sending email...");
    const res = await transporter
      .sendMail(mailOptions)
      .then((info) => {
        console.log("Email sent: " + info.response);
      })
      .catch((error) => {
        console.log(error);
        return NextResponse.json(
          {
            message: "Something went wrong. Please try again later.",
          },
          {
            status: 400,
          }
        );
      });
    return NextResponse.json(
      {
        message: "Email sent successfully!",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Something went wrong. Please try again later.",
      },
      {
        status: 400,
      }
    );
  }
}

export async function GET(request: Request) {
  return NextResponse.json(
    {
      message: "Method not allowed",
    },
    {
      status: 405,
    }
  );
}
