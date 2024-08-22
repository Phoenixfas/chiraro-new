import Job from "@/models/Job";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
    const { params } = context;
    const id = params.id;

    const job = await Job.findById(id);
    if (!job) {
        return NextResponse.json({ message: "Job not found" }, { status: 404 });
    }

    return NextResponse.json(job, { status: 200 });
}