import {NextRequest, NextResponse} from "next/server";
import {supabase} from "@/utils/supabase";


export async function GET(req: NextRequest, {params}: { params: { slug: string[] } }) {
  try{
    let {data, error} = await supabase
      .from(params.slug[0])
      .select("title, content")
      // Filters
      .eq('id', params.slug[1]).single();
    if(data) {
      return NextResponse.json({data: data}, {status: 200});
    } else {
      return NextResponse.json({error: "존재하지 않는 글입니다"}, {status: 404});
    }
  } catch(e){
    console.log(e);
  }
}

export async function DELETE(req: NextRequest, {params}: { params: { slug: string[] } }) {
  try{
    const { error } = await supabase
      .from(params.slug[0])
      .delete()
      .eq('id', params.slug[1])
    if(!error){
      return NextResponse.json({data:"삭제가 완료되었습니다."}, {status: 200});
    } else {
      return NextResponse.json({error: error.message}, {status: 200});
    }
  } catch (e){
    console.log(e);
  }
}

export async function POST(req: NextRequest, {params}: { params: { slug: string[] } }) {
  try{
    const request = await req.json();
    const { data, error } = await supabase
      .from(params.slug[0])
      .update({ title: request.title, content: request.content })
      .eq('id', params.slug[1])
      .select()
    if(data) {
      return NextResponse.json({data: data}, {status: 200});
    } else {
      return NextResponse.json({error: error?.message}, {status: 404});
    }
  } catch (e){
    console.log(e);
  }
}