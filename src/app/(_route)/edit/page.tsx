"use client";
import {useCallback, useState} from "react";
import MdEditor from "@/app/(_route)/edit/(components)/MdEditor/MdEditor";

function Page() {
  const [value, setValue] = useState<string | undefined>("");
  const handleChange = useCallback((value: string | undefined) => {
    setValue(value)
  }, []);


  return (
    <section className="isvisible">
      <select>

      </select>
      <input/>
      <MdEditor value={value} onChange={handleChange}/>
    </section>);
}


export default Page;