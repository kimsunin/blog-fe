import { NextRequest, NextResponse } from "next/server";
import {supabase} from "@/utils/supabase";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    let id = params.id;
    let {data: note, error} = await supabase
      .from('deve')
      .select("content")
      // Filters
      .eq('id', id).single();

    if(note){
      return NextResponse.json({data: note?.content}, {status: 200});
    } else {
      return NextResponse.json({data: "<p>File Not Found</p>  <a href=/>cd ~</a>"}, {status: 404});
    }
  } catch (error) {
    return NextResponse.json(
      { data: "<p>File Not Found</p>  <a href=/>cd ~</a>" },
      { status: 404 }
    );
  }
}
