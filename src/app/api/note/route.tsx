import { NextRequest, NextResponse } from "next/server";
import {supabase} from "@/utils/supabase";


export async function GET(request: NextRequest) {
  try {
    let {data, error} = await supabase
      .from('note')
      .select('id,title,date,img_url')
      .order("date", {ascending: false});

    let groupedNotes: any = {};

    data?.forEach(note => {
      const year = note.date.slice(0, 4);
      if (!groupedNotes[year]) {
        groupedNotes[year] = [];
      }
      groupedNotes[year].push({
        id: note.id,
        title: note.title,
        date: note.date,
        img_url:note.img_url
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
