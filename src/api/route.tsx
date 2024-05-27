import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json(
    {name: "김선인", age: 25}
  );
}