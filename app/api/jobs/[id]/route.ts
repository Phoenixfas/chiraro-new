import Job from "@/models/Job";
import { NextResponse } from "next/server";
// import dbConnect from "@/utils/dbConnect";

export async function GET(request: Request, context: any) {
    // const connected = await dbConnect();
    const { params } = context;
    const id = params.id;

    const job = await Job.findById(id);
    if (!job) {
        return NextResponse.json({ message: "Job not found" }, { status: 404 });
    }

    return NextResponse.json(job, { status: 200 });
}