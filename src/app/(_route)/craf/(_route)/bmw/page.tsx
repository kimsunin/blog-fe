"use client"
import {useEffect, useState} from "react";
import BmwCanvas from "@/components/BmwCanvas/BmwCanvas";


function Page() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true)
  }, []);

  return (
    <section className={visible? "isvisible" : "isinvisible"}>
      <BmwCanvas />
    </section>
  );
}

export default Page;
