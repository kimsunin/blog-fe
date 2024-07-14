import { NextRequest, NextResponse } from "next/server";
import {supabase} from "@/utils/supabase";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    let id = params.id;
    let {data, error} = await supabase
      .from('note')
      .select("content")
      // Filters
      .eq('id', id).single();
    if(data){
      return NextResponse.json({data: data?.content}, {status: 200});
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
