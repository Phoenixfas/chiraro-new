import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import Jobapp from "@/models/Jobapp";

export async function GET(request: Request) {
    // try {
    //     const jobapps = await Jobapp.find();
    //     jobapps.reverse();
    
    //     return NextResponse.json(jobapps, { status: 200 });
    // } catch (e: any) {
    //     return NextResponse.json(
    //     { message: `Internal Server Error ${e.message}` },
    //     { status: 500 }
    //     );
    // }
    return NextResponse.json({ message: "GET request not allowed" }, { status: 405 });
};

export async function POST(request: Request) {
    try {
        const {
            jobInfo,
            personalInfo,
            academicInfo,
            experience,
            availability,
            skills,
            attachments,
            additionalInfo,
            declaration
        } = await request.json();

        const application = new Jobapp({
            jobInfo,
            personalInfo,
            academicInfo,
            experience,
            availability,
            skills,
            attachments,
            additionalInfo,
            declaration
        });

        await application.save();

        await sendMail(personalInfo.email, personalInfo.fullName);

        return NextResponse.json(application, { status: 201 });
    } catch (e: any) {
        return NextResponse.json(
            { message: `Internal Server Error ${e.message}` },
            { status: 500 }
        );
    }
}

const sendMail = async (email: string, name: string) => {
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
        subject: `Job Application from ${name}`,
        text: `New job application from ${name} with email ${email}`,
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