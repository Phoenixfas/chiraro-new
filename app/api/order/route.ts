import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const body = await request.json();
  const {
    name,
    email,
    phone,
    company,
    website,
    package: pkg,
    description,
  } = body;
  const credentials = {
    email: "ermiyas.dagnachew@gmail.com",
    password: "kflnbsyqmdijfinj",
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
    subject: `New Order from ${name}`,
    text: ` Name: ${name} \n Email: ${email}\n Phone: ${phone} \n Company Name: ${company} \n Company Website: ${website}\n Selected Package: ${pkg}\n\n Description: ${description} `,
  };
  try {
    console.log("Sending email...");
    await transporter.sendMail(mailOptions, function (error: any, info: any) {
      if (error) {
        console.log(error);
        return NextResponse.json(
          {
            message: "Something went wrong. Please try again later.",
          },
          {
            status: 400,
          }
        );
      } else {
        console.log("Email sent: " + info.response);
      }
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
