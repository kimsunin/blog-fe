import { NextRequest, NextResponse } from "next/server";
import {supabase} from "@/utils/supabase";


export async function GET(request: NextRequest) {
  try {
    let {data: note, error} = await supabase
      .from('note')
      .select('id,title,date');


    let groupedNotes: any = {};

    note?.forEach(note => {
      const year = note.date.slice(0, 4);
      if (!groupedNotes[year]) {
        groupedNotes[year] = [];
      }
      groupedNotes[year].push({
        id: note.id,
        title: note.title,
        date: note.date.slice(5),
      });
    });


    const data = Object.keys(groupedNotes).map(year => ({
      year: year,
      content: groupedNotes[year]
    }));


    return NextResponse.json({data: data}, {status: 200});
  }
  catch (error) {
    console.log(error);
  }
}
