"use client";
import MarkDownView from "@/common/components/MarkDownView/MarkDownView";
import errorData from "@/db/error.md";
import { useEffect, useState } from "react";
import { json } from "stream/consumers";

export default function NotFound() {
  const [data, setData] = useState<string>();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setData("<p>Page Not Found</p>  <a href=/>cd ~</a>");
    setVisible(true);
  }, []);

  return (
    <main>
      <section className={visible ? "isvisible" : "isinvisible"}>
        <article>
          <MarkDownView post={data} />
        </article>
      </section>
    </main>
  );
}
