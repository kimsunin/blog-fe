import {NextRequest, NextResponse} from "next/server";
import {supabase} from "@/utils/supabase";

export async function GET(req: NextRequest, {params}: { params: { slug: string[] } }) {
  console.log(req.json());

  let {data, error} = await supabase
    .from(params.slug[0])
    .select("title,content,date")
    // Filters
    .eq('id', params.slug[1]).single();


  if (data) {
    return NextResponse.json({data: data, message: "success", status: 200});
  } else {
    return NextResponse.json({error: error, message: "글이 존재하지 않습니다", status: 404});
  }
}
