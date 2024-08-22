import Job from "@/models/Job";
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";

export async function GET(request: Request, context: any) {
    const { params } = context;
    const id = params.id;
    const connected = await dbConnect();
    if (!connected) {
        return NextResponse.json({ message: "Error connecting to database" }, { status: 500 });
    }

    const job = await Job.findById(id);
    if (!job) {
        return NextResponse.json({ message: "Job not found" }, { status: 404 });
    }

    return NextResponse.json(job, { status: 200 });
}