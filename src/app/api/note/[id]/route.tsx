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
      return NextResponse.json({data: data?.content, status: 200});
    } else {
      return NextResponse.json({error: "글이 존재하지 않습니다", status: 404});
    }
  } catch (error) {
    console.log(error);
  }
}
