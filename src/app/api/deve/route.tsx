import { NextRequest, NextResponse } from "next/server";
import {supabase} from "@/utils/supabase";


export async function GET() {
  try {
    let {data, error} = await supabase
      .from('deve')
      .select('id,title,date,img_url')
      .order("date", {ascending: false});


    let groupedNotes: any = {};

    data?.forEach(deve => {
      const year = deve.date.slice(0, 4);
      if (!groupedNotes[year]) {
        groupedNotes[year] = [];
      }
      groupedNotes[year].push({
        id: deve.id,
        title: deve.title,
        date: deve.date,
        img_url: deve.img_url
      });
    });


    const transformData = Object.keys(groupedNotes).map(year => ({
      year: year,
      content: groupedNotes[year]
    }));


    return NextResponse.json({data: transformData}, {status: 200});
  }
  catch (error) {
    console.log(error);
  }
}
