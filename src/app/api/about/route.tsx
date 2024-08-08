import {NextResponse} from "next/server";
import {supabase} from "@/utils/supabase";


export async function GET() {
  try {
    let {data, error} = await supabase
      .from('about')
      .select("title,content,date")
      // Filters
      .eq('id', 1).single();

    if (data) {
      return NextResponse.json({data: data, message:"success", status: 200});
    } else {
      return NextResponse.json({error: error, message: "글이 존재하지 않습니다", status: 404});
    }
  } catch (error) {
    console.log(error);
  }
}
