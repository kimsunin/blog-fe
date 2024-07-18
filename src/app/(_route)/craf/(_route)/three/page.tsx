"use client"
import {useState, useEffect} from "react";
import ThreeCanvas from "@/components/ThreeCanvas/ThreeCanvas";

function Page(){

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true)
  }, []);

  return <section className={visible ? "isvisible" : "isinvisible"}>
    <ThreeCanvas />
  </section>;
}

export default Page