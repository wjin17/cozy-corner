import { useEffect, useRef } from "react";

import bigCloud from "../assets/big_cloud.png";
import gorlDog from "../assets/gorl_dog2.png";

export const Wallpaper = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cloudPosRef = useRef<number>(0);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = gorlDog;

    const cloudImg = new Image();
    cloudImg.src = bigCloud;

    let assetsLoaded = 0;
    const totalAssets = 2;

    const draw = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      drawSky(ctx, canvas.width, canvas.height);
      drawGrass(ctx, canvas.width, canvas.height);

      // Draw cloud
      const cloudScale = 0.3;
      const cloudWidth = cloudImg.width * cloudScale;
      const cloudY = canvas.height * 0.1;
      ctx.drawImage(
        cloudImg,
        cloudPosRef.current,
        cloudY,
        cloudWidth,
        cloudImg.height * cloudScale,
      );

      // Draw image to fit the canvas while maintaining aspect ratio
      const scale = Math.max(
        (canvas.width / img.width) * 0.5,
        (canvas.height / img.height) * 0.5,
      );
      const x = (canvas.width - img.width * scale) / 2;
      const y = (canvas.height - img.height * scale) / 2;

      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    const updateAnimation = () => {
      // Move cloud position
      cloudPosRef.current -= 0.05;

      // Loop cloud position when it's completely off-screen
      if (cloudPosRef.current < -cloudImg.width * 0.3) {
        cloudPosRef.current = canvas.width;
      }

      draw();
      animationRef.current = requestAnimationFrame(updateAnimation);
    };

    const startAnimation = () => {
      // Initialize cloud position at right edge
      cloudPosRef.current = canvas.width;
      animationRef.current = requestAnimationFrame(updateAnimation);
      draw();
    };

    const onAssetLoad = () => {
      assetsLoaded++;
      if (assetsLoaded === totalAssets) {
        startAnimation();
      }
    };

    img.onload = onAssetLoad;
    cloudImg.onload = onAssetLoad;

    window.addEventListener("resize", draw);

    return () => {
      window.removeEventListener("resize", draw);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  function drawSky(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
  ) {
    ctx.fillStyle = "#96e2ff";
    ctx.fillRect(0, 0, width, height / 2 + 10);
  }

  function drawGrass(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
  ) {
    ctx.fillStyle = "#9ec44d";
    ctx.fillRect(0, height / 2 + 10, width, height);
  }

  return (
    <canvas ref={canvasRef} className="absolute top-0 left-0 h-full w-full" />
  );
};
