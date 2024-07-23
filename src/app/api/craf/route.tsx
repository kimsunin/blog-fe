import { NextRequest, NextResponse } from "next/server";
import {supabase} from "@/utils/supabase";


export async function GET(request: NextRequest) {
  try {
    let {data, error} = await supabase
      .from('craf')
      .select('id,title,date')
      .order("date", {ascending: false});


    let groupedNotes: any = {};

    data?.forEach(craf => {
      const year = craf.date.slice(0, 4);
      if (!groupedNotes[year]) {
        groupedNotes[year] = [];
      }
      groupedNotes[year].push({
        id: craf.id,
        title: craf.title,
        date: craf.date,
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
