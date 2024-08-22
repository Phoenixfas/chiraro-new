import dbConnect from "./utils/dbConnect";

export async function register() {
    await dbConnect()
}