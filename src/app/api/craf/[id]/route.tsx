import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    const filePath = path.join(
      process.cwd(),
      "src",
      "db",
      "craf",
      "md",
      `${id}.md`
    );
    const data = await fs.readFile(filePath, "utf-8");
    return NextResponse.json({ data: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { data: "<p>File Not Found</p>  <a href=/>cd ~</a>" },
      { status: 404 }
    );
  }
}
