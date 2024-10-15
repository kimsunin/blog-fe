import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/utils/supabase";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  console.log(req.json());

  let { data, error } = await supabase
    .from(params.id)
    .select("id,title,date,img_url")
    .order("date", { ascending: false });

  if (data) {
    let groupedData: any = {};

    data?.forEach((item) => {
      const year = item.date.slice(0, 4);
      if (!groupedData[year]) {
        groupedData[year] = [];
      }
      groupedData[year].push({
        id: item.id,
        title: item.title,
        date: item.date,
        img_url: item.img_url,
      });
    });

    const transformData = Object.keys(groupedData).map((year) => ({
      year: year,
      content: groupedData[year],
    }));

    return NextResponse.json({
      data: transformData.reverse(),
      message: "success",
      status: 200,
    });
  } else {
    return NextResponse.json({
      error: error,
      message: "글이 존재하지 않습니다",
      status: 404,
    });
  }
}
