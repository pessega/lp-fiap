"use client";

import type React from "react";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import styles from "./ScrollAnimation.module.scss";

interface ScrollAnimationProps {
  totalFrames?: number;
  imagePath?: string;
  imagePrefix?: string;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  totalFrames = 191,
  imagePath = "/images/water",
  imagePrefix = "water",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(0);
  const animationFrameRef = useRef<number>();
  const lastFrameRef = useRef<number>(-1);

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      let loadedCount = 0;

      for (let i = 0; i < totalFrames; i++) {
        try {
          const img = new Image();
          const imageUrl = `${imagePath}/${imagePrefix}_${i
            .toString()
            .padStart(3, "0")}.jpg`;

          await new Promise<void>((resolve, reject) => {
            img.onload = () => {
              loadedCount++;
              setLoadingProgress((loadedCount / totalFrames) * 100);
              resolve();
            };
            img.onerror = (error) => {
              const canvas = document.createElement("canvas");
              canvas.width = 800;
              canvas.height = 600;
              const ctx = canvas.getContext("2d");
              if (ctx) {
                ctx.fillStyle = "#333";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = "#fff";
                ctx.font = "24px Arial";
                ctx.textAlign = "center";
                ctx.fillText(`Frame ${i}`, canvas.width / 2, canvas.height / 2);
              }
              canvas.toBlob((blob) => {
                if (blob) {
                  img.src = URL.createObjectURL(blob);
                } else {
                  reject(error);
                }
              });
            };
            img.src = imageUrl;
          });

          loadedImages[i] = img;
        } catch (error) {
          console.error(`Error loading image ${i}:`, error);
        }
      }

      setImages(loadedImages);
      setImagesLoaded(true);
    };

    loadImages();
  }, [totalFrames, imagePath, imagePrefix]);

  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.scale(dpr, dpr);
    }

    return ctx;
  }, []);

  const drawImage = useCallback(
    (frameIndex: number) => {
      const canvas = canvasRef.current;
      if (!canvas || !images[frameIndex]) {
        return;
      }

      const ctx = setupCanvas();
      if (!ctx) return;

      const rect = canvas.getBoundingClientRect();

      ctx.clearRect(0, 0, rect.width, rect.height);

      const img = images[frameIndex];
      const canvasAspect = rect.width / rect.height;
      const imgAspect = img.width / img.height;

      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasAspect > imgAspect) {
        drawWidth = rect.width;
        drawHeight = rect.width / imgAspect;
        offsetX = 0;
        offsetY = (rect.height - drawHeight) / 2;
      } else {
        drawWidth = rect.height * imgAspect;
        drawHeight = rect.height;
        offsetX = (rect.width - drawWidth) / 2;
        offsetY = 0;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    },
    [images, setupCanvas]
  );

  useEffect(() => {
    if (!imagesLoaded || !containerRef.current) return;

    const handleScroll = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        let scrollProgress = 0;

        const sectionTop = rect.top;
        const sectionHeight = rect.height;

        const startOffset = windowHeight * 0.8;
        const endOffset = windowHeight * 0;

        const animationStart = sectionTop + startOffset;
        const animationEnd = sectionTop - windowHeight + endOffset;
        const totalAnimationDistance = animationStart - animationEnd;

        if (animationStart >= 0 && animationEnd <= 0) {
          const currentPosition = animationStart;
          scrollProgress = Math.max(
            0,
            Math.min(1, currentPosition / totalAnimationDistance)
          );
        } else if (animationEnd > 0) {
          scrollProgress = 1;
        }

        const invertedProgress = 1 - scrollProgress;
        const exactFrame = invertedProgress * (totalFrames - 1);
        const frameIndex = Math.round(exactFrame);
        const clampedFrame = Math.max(0, Math.min(totalFrames - 1, frameIndex));

        console.log(
          "[v0] Progress:",
          scrollProgress.toFixed(3),
          "Inverted:",
          invertedProgress.toFixed(3),
          "Frame:",
          clampedFrame,
          "Total:",
          totalFrames
        );

        if (clampedFrame !== lastFrameRef.current) {
          lastFrameRef.current = clampedFrame;
          setCurrentFrame(clampedFrame);
          drawImage(clampedFrame);
        }
      });
    };

    if (images.length > 0) {
      drawImage(0);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [imagesLoaded, drawImage, totalFrames, images.length]);

  useEffect(() => {
    const handleResize = () => {
      if (!imagesLoaded || !containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let scrollProgress = 0;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      const startOffset = windowHeight * 0.2;
      const endOffset = windowHeight * 0.2;

      const animationStart = sectionTop + startOffset;
      const animationEnd = sectionTop - windowHeight + endOffset;
      const totalAnimationDistance = animationStart - animationEnd;

      if (animationStart >= 0 && animationEnd <= 0) {
        const currentPosition = animationStart;
        scrollProgress = Math.max(
          0,
          Math.min(1, currentPosition / totalAnimationDistance)
        );
      } else if (animationEnd > 0) {
        scrollProgress = 1;
      }

      const invertedProgress = 1 - scrollProgress;
      const exactFrame = invertedProgress * (totalFrames - 1);
      const frameIndex = Math.round(exactFrame);
      const clampedFrame = Math.max(0, Math.min(totalFrames - 1, frameIndex));

      setCurrentFrame(clampedFrame);
      drawImage(clampedFrame);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded, drawImage, totalFrames, images.length]);

  return (
    <motion.section
      ref={containerRef}
      className={styles.container}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        style={{
          opacity: imagesLoaded ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      />

      {!imagesLoaded && (
        <div className={styles.loading}>
          <div className={styles.loadingText}>Carregando animação...</div>
          <div className={styles.loadingBar}>
            <div
              className={styles.loadingProgress}
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default ScrollAnimation;
