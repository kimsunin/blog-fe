"use client"
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";
import MarkDownView from "@/components/MarkDownView/MarkDownView";
import {useDialog} from "@/hooks/useDialog";
import CustomImage from "@/components/CustomImage/CustomImage";
import styles from "./page.module.css"
import {GithubIc, NotionIc} from "svg/index";



function Page(){
  const {alert} = useDialog();
  const router = useRouter();

  const [visible, setVisible] = useState<boolean>(false)
  const [data, setData] = useState();

  useEffect(() => {
    getData().then((res) => {
      if (res?.status == 200) {
        setData(res.data?.content);
        setVisible(true);
      } else {
        alert(res.message).then(() => router.back());
      }
    });
  }, []);

  return <section className={visible ? "isvisible" : "isinvisible"}>
    <article className={styles.section_1}>
      <div>
        <CustomImage src={null}/>
      </div>
      <div>
        <h1>KIMSUNIN · 김선인</h1>
        <h2>사용자의 경험을 중요하게 생각합니다</h2>
        <div>
          <Link href="https://github.com/kimsunin" target="_blank">
            <GithubIc/>
          </Link>
          <Link href="https://www.notion.so/suninkim/kimsunin-947b333fef434eef9c0d5c935dfc30d0?pm=c" target="_blank">
            <NotionIc/>
          </Link>
        </div>
      </div>
    </article>
    <article className={styles.section_2}>
      <MarkDownView post={data}/>
    </article>
  </section>;
}

async function getData() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "about");
    return await res.json()
  } catch (e) {
    console.log(e);
  }
}

export default Page;