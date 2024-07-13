import { NextRequest, NextResponse } from "next/server";
import {supabase} from "@/utils/supabase";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    let id = params.id;
    let {data: note, error} = await supabase
      .from('craf')
      .select("content")
      // Filters
      .eq('id', id).single();

    return NextResponse.json({ data: note?.content }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { data: "<p>File Not Found</p>  <a href=/>cd ~</a>" },
      { status: 404 }
    );
  }
}
