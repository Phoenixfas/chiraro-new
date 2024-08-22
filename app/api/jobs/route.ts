import Job from "@/models/Job";
import { NextResponse } from "next/server";
// import dbConnect from "@/utils/dbConnect";

export async function GET() {
    // const connected = await dbConnect();
    // if (!connected) {
    //     return NextResponse.json({ message: "Error connecting to database" }, { status: 500 });
    // }
    const jobs = await Job.find();
    return NextResponse.json(jobs);
}

