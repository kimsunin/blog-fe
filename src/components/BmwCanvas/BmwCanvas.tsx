"use client";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

function BmwCanvas() {
  const { theme, setTheme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const [bmw, setBmw] = useState({ x: 0, y: 40 });
  const [hds, setHds] = useState<{ x: number; y: number }[]>([]);
  const [time, setTime] = useState(0);
  const [speed, setSpeed] = useState(50);

  // canvas생성 및 속성부여
  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    canvas.style.width = "100%";
    canvas.height = 100;
    if (ctx) {
      ctx.fillStyle = `${
        theme == "light" ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)"
      }`;
    }
  }, [theme]);

  //  자동차 생성
  useEffect(() => {
    hdsDraw();
  }, [time, theme]);
  const bmwDraw = () => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    ctx?.fillRect(0, bmw.y, 24, 20);
  };
  const hdsDraw = () => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
    bmwDraw();
    crash();
    hds.forEach((hd) => {
      if (start) {
        hd.x -= 10;
      }
      ctx?.fillRect(hd.x, hd.y, 24, 20);
    });
    setHds((hds) =>
      hds.filter((hd) => {
        return hd.x >= 0;
      })
    );
    if (time != 0 && time % 12 == 0 && ctx?.canvas) {
      let hd = { x: ctx.canvas.width, y: Math.floor(Math.random() * 5) * 20 };
      setHds((hds) => [...hds, hd]);
    }
  };

  // 이동
  const move = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (start) {
      if (e.key == "ArrowUp" && bmw.y > 0) {
        setBmw({ ...bmw, y: bmw.y - 20 });
      }
      if (e.key == "ArrowDown" && bmw.y < 80) {
        setBmw({ ...bmw, y: bmw.y + 20 });
      }
    }
  };

  // 게임시작
  const startGame = () => {
    if (end) {
      setBmw({ x: 0, y: 40 });
      setHds([]);
      setTime(0);
      setSpeed(50);
      setEnd(false);
      setStart(true);
    } else {
      setStart(!start);
    }
  };

  // 게임종료
  const crash = () => {
    hds.forEach((hd) => {
      if (hd.x <= 38 && hd.y >= bmw.y && hd.y < bmw.y + 20) {
        console.log("충돌");
        setStart(false);
        setEnd(true);
      }
    });
  };

  // 카운트
  useEffect(() => {
    if (start) {
      const id = setInterval(() => {
        setTime((pre) => pre + 1);
        // 스피드가 계속 빨라지게 구현
        setSpeed((pre) => pre - 0.01);
        // 360에 한번 테마 바구기
        if (time != 0 && time % 360 == 0) {
          setTheme(theme == "light" ? "dark" : "light");
        }
      }, speed);
      return () => clearInterval(id);
    }
  }, [time, start]);

  return (
    <div
      className="outline-none"
      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => move(e)}
      tabIndex={0}
    >
      <canvas className="bg-black/5 dark:bg-white/10" ref={canvasRef} />
      <div className="w-full flex justify-between">
        <button className="rounded-md outline-none" onClick={() => startGame()}>
          {start ? "정지" : `${end ? "재시작" : "시작"}`}
        </button>
        <span>점수 : {time}</span>
      </div>
    </div>
  );
}

export default BmwCanvas;
