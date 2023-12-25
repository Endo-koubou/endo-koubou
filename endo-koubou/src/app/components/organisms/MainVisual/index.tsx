"use client";
import Image from "next/image";
import { useState, useEffect, Suspense } from "react";
import { FadeIn } from "@/app/components/atoms";
import { MvTitle } from "@/app/components/molecules";
import styles from "./main_visual.module.scss";
import useResponsive from "@/app/hooks/useResponsive";

const images_pc = [
  "/images/mv/pc_01.jpg",
  "/images/mv/pc_02.jpg",
  "/images/mv/pc_03.jpg",
  "/images/mv/pc_04.jpg",
];

const images_sp = [
  "/images/mv/sp_01.jpg",
  "/images/mv/sp_02.jpg",
  "/images/mv/sp_03.jpg",
  "/images/mv/sp_04.jpg",
];

export function MainVisual() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const isPc = useResponsive("pc");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 4);
    }, 5800);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const handleImageLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <section className={styles.mv} style={{ height: "100vh" }}>
      {isPc ? (
        <Image
          src="/images/mv/pc_01.jpg"
          alt=""
          fill
          className={`${styles.preload_image} ${styles.cover_image}`}
          onLoadingComplete={handleImageLoaded}
        />
      ) : (
        <Image
          src="/images/mv/sp_01.jpg"
          alt=""
          fill
          className={`${styles.preload_image} ${styles.cover_image}`}
          onLoadingComplete={handleImageLoaded}
        />
      )}
      {isLoaded && (
        <>
          <div className={styles.title}>
            <FadeIn fadeType="in">
              <Image
                src="/images/logo_endo-koubou.png"
                width={75}
                height={68}
                alt="ENDO工房のロゴ画像"
                className={styles.logo}
                onLoadingComplete={handleImageLoaded}
              />
            </FadeIn>
            <MvTitle />
          </div>
          {isPc
            ? images_pc.map((image, index) => (
                <div
                  key={image}
                  className={`${
                    index === currentSlide
                      ? styles.activeSlide
                      : styles.inactiveSlide
                  } ${styles.mv_pc}`}
                >
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    fill
                    className={styles.cover_image}
                  />
                </div>
              ))
            : images_sp.map((image, index) => (
                <div
                  key={image}
                  className={`${
                    index === currentSlide
                      ? styles.activeSlide
                      : styles.inactiveSlide
                  } ${styles.mv_sp}`}
                >
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    fill
                    className={styles.cover_image}
                  />
                </div>
              ))}
        </>
      )}
    </section>
  );
}
