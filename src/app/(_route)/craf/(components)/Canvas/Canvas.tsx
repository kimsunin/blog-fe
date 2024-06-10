"use client";
import { KeyboardEvent, useEffect, useRef, useState } from "react";

function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [bmw, setBmw] = useState({ x: 0, y: 40 });
  const [hds, setHds] = useState<{ x: number; y: number }[]>([]);
  const [time, setTime] = useState(0);

  // const [y, setY] = useState(60);

  const hdsDraw = () => {
    // requestAnimationFrame(hdsDraw);
    // hds.forEach((hd) => {
    //   if (hd.x <= 30 && hd.y >= bmw.y && hd.y < bmw.y + 20) {
    //     console.log("충돌");
    //   }
    // });
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
    bmwDraw();
    hds.forEach((hd) => {
      if (hd.x <= 30 && hd.y >= bmw.y && hd.y < bmw.y + 20) {
        console.log("충돌");
      }
      hd.x -= 10;
      if (ctx) {
        ctx.fillStyle = "black";
      }
      ctx?.fillRect(hd.x, hd.y, 24, 20);
    });
    setHds((hds) =>
      hds.filter((hd) => {
        return hd.x >= 0;
      })
    );
    if (time % 12 == 0 && ctx?.canvas) {
      let hd = { x: ctx.canvas.width, y: Math.floor(Math.random() * 5) * 20 };
      setHds((hds) => [...hds, hd]);
    }
  };

  const bmwDraw = () => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "blue";
    }
    ctx?.fillRect(0, bmw.y, 24, 20);
  };

  const move = (e: KeyboardEvent<HTMLCanvasElement>) => {
    if (e.key == "ArrowUp" && bmw.y > 0) {
      setBmw({ ...bmw, y: bmw.y - 20 });
    }
    if (e.key == "ArrowDown" && bmw.y < 80) {
      setBmw({ ...bmw, y: bmw.y + 20 });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    canvas.style.width = "100%";
    canvas.height = 100;
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setTime((pre) => pre + 0.5);
    }, 50);
    return () => clearInterval(id);
  }, [time]);

  useEffect(() => {
    hdsDraw();
  }, [time]);

  return (
    <canvas
      style={{ backgroundColor: "gray" }}
      ref={canvasRef}
      onKeyDown={(e) => move(e)}
      tabIndex={0}
    />
  );
}

export default Canvas;
