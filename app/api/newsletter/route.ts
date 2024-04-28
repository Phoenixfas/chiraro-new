import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, message } = body;
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
    subject: `Newsletter Subscription from ${email}`,
    text: ` Email: ${email} \n\n Message: ${message} `,
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
