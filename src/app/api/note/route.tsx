import { NextRequest, NextResponse } from "next/server";
import noteList from "@/db/note/noteList.json";

export function GET(request: NextRequest) {
  return NextResponse.json({ data: noteList }, { status: 200 });
}
