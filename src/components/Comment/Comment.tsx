"use client"
import {useRef, useEffect} from "react";
import {useTheme} from "next-themes";
import styles from "./Comment.module.css"


function Comment() {
  const ref = useRef<HTMLDivElement>(null);
  const {resolvedTheme} = useTheme()

  const theme = resolvedTheme === 'dark' ? 'dark' : 'light';

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const scriptElem = document.createElement('script');
    scriptElem.src = 'https://giscus.app/client.js';
    scriptElem.async = true;
    scriptElem.crossOrigin = 'anonymous';

    scriptElem.setAttribute('data-repo', 'kimsunin/blog-fe');
    scriptElem.setAttribute('data-repo-id', 'R_kgDOMBDA_g');
    scriptElem.setAttribute('data-category', 'comments');
    scriptElem.setAttribute('data-category-id', 'DIC_kwDOMBDA_s4ChHoz');
    scriptElem.setAttribute('data-mapping', 'pathname');
    scriptElem.setAttribute('data-strict', '0');
    scriptElem.setAttribute('data-reactions-enabled', '1');
    scriptElem.setAttribute('data-emit-metadata', '0');
    scriptElem.setAttribute('data-input-position', 'bottom');
    scriptElem.setAttribute('data-theme', theme);
    scriptElem.setAttribute('data-lang', 'ko');


    ref.current.appendChild(scriptElem);

  }, [theme]);

  // https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#isetconfigmessage
  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
    iframe?.contentWindow?.postMessage({giscus: {setConfig: {theme}}}, 'https://giscus.app');
  }, [theme]);


  return <div className={styles.giscus_comment} ref={ref}></div>;
}

export default Comment;
