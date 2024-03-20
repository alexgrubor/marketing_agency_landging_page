"use client";
import { cn } from "../../../../utils/cn";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";
import BigTextInline from "@/app/components/ui/BigTextInline";
import LetsChatButton from "@/app/components/ui/LetsChatButton";

interface WavyBackgroundProps{

    className?: string;
    containerClassName?: string;
    backgroundFill?: string;
    blur?: number;
    speed?: "slow" | "fast" | string; 
    waveOpacity?: number;
    [key: string]: any;
}


const WaveSection = (
    {
        className,
        containerClassName,
        backgroundFill = "none",
        blur = 0,
        speed = "0.5s",
        waveOpacity = 0.5,
        ...props
    }: WavyBackgroundProps
) => {
    const noise = createNoise3D();
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    ctx: any,
    canvas: any;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };
 
  const init = () => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;
    window.onresize = function () {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };
    render();
  };
 
  const waveColors =  [
    "#6A0572",
    "#8E44AD",
    "#82589F",
    "#913D88",
    "#A569BD",
  ];
  const drawWave = (n: number) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth =  5;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 6) {
        var y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5); 
      }
      ctx.stroke();
      ctx.closePath();
    }
  };
 
  let animationId: number;
  const render = () => {
    ctx.fillStyle = backgroundFill || "white";
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };
 
  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [init]);
 
  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
 
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);
  return (
    <div  className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}>
        <canvas
        className="absolute inset-0 z-0 opacity-65"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
      <div className="text-container text-secondBg text-center mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4">
        Boost
        <span className="text-myPurple-600  mx-3  drop-shadow-lg">Your Brand</span> with
        XYZ Marketing
      </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-8">
          Strategic Marketing Solutions Tailored for Your Success
        </p>
        <LetsChatButton
          href="/contact-us"
          text="Let's chat"
          className="p-3 px-4 text-3xl cursor-pointer"
        />
      </div>
      </div>
      </div>
  )
}
export default WaveSection
