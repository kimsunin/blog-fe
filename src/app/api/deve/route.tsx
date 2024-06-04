import { NextRequest, NextResponse } from "next/server";
import deveList from "@/db/deve/deveList.json";

export function GET(request: NextRequest) {
  return NextResponse.json(deveList);
}
