"use client";
import MarkDownView from "@/components/MarkDownView/MarkDownView";
import { useEffect, useState } from "react";

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
