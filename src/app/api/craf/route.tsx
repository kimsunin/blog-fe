import { NextRequest, NextResponse } from "next/server";
import crafList from "@/db/craf/crafList.json";

export function GET(req: NextRequest) {
  return NextResponse.json(crafList);
}
