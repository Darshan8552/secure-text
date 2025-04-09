import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Text from "@/models/Text";

export async function POST(req) {
  try {
    await connectDB();
    const { pathInput } = await req.json();
    if (!pathInput) {
      return NextResponse.json(
        { message: "Path is required" },
        { status: 400 }
      );
    }

    const text = await Text.findOne({ path: pathInput });

    if (text) {
      return NextResponse.json({ exist: true }, { status: 200 });
    }

    const newText = await Text.create({ path: pathInput });

    if (newText) {
      return NextResponse.json({ exist: false }, { status: 201 });
    }
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
