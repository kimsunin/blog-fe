import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/utils/supabase";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  console.log(req.json());

  const datas: any = {
    deve: { type: "deve", data: [] },
    note: { type: "note", data: [] },
    craf: { type: "craf", data: [] },
  };

  const getDeve = async () => {
    let { data, error } = await supabase
      .from("deve")
      .select("*")
      .or(`title.ilike.%${params.id}%, content.ilike.%${params.id}%`);

    let groupData: any = {};

    data?.forEach((item: any) => {
      const year = item.date.slice(0, 4);
      if (!groupData[year]) {
        groupData[year] = [];
      }

      groupData[year].push({
        id: item.id,
        title: item.title,
        date: item.date,
        img_url: item.img_url,
      });
    });

    let transformData = Object.keys(groupData).map((year) => ({
      year: year,
      content: groupData[year],
    }));

    datas.deve.data = transformData;
  };

  const getNote = async () => {
    let { data, error } = await supabase
      .from("note")
      .select("*")
      .or(`title.ilike.%${params.id}%, content.ilike.%${params.id}%`);

    let groupData: any = {};

    data?.forEach((item: any) => {
      const year = item.date.slice(0, 4);
      if (!groupData[year]) {
        groupData[year] = [];
      }

      groupData[year].push({
        id: item.id,
        title: item.title,
        date: item.date,
        img_url: item.img_url,
      });
    });

    let transformData = Object.keys(groupData).map((year) => ({
      year: year,
      content: groupData[year],
    }));

    datas.note.data = transformData;
  };

  const getCraf = async () => {
    let { data, error } = await supabase
      .from("craf")
      .select("*")
      .or(`title.ilike.%${params.id}%, content.ilike.%${params.id}%`);

    let groupData: any = {};

    data?.forEach((item: any) => {
      const year = item.date.slice(0, 4);
      if (!groupData[year]) {
        groupData[year] = [];
      }

      groupData[year].push({
        id: item.id,
        title: item.title,
        date: item.date,
        img_url: item.img_url,
      });
    });

    let transformData = Object.keys(groupData).map((year) => ({
      year: year,
      content: groupData[year],
    }));

    datas.craf.data = transformData;
  };

  await getCraf();
  await getNote();
  await getDeve();

  if (
    datas.deve.data.length > 0 ||
    datas.note.data.length > 0 ||
    datas.craf.data.length > 0
  ) {
    return NextResponse.json({ data: datas, message: "success", status: 200 });
  } else {
    return NextResponse.json({
      error: datas,
      message: "글이 존재하지 않습니다",
      status: 404,
    });
  }
}
