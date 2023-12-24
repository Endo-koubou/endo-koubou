"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
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
  const [isLoadedFirstImage, setIsLoadedFirstImage] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isPc = useResponsive("pc");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 4);
    }, 5800);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const handleImageLoad = () => {
    setIsLoadedFirstImage(true);
  };

  return (
    <section className={styles.mv} style={{ height: "100vh" }}>
      {isLoadedFirstImage && (
        <>
          <div className={styles.title}>
            <FadeIn fadeType="in">
              <Image
                src="/images/logo_endo-koubou.png"
                width={75}
                height={68}
                alt="ENDO工房のロゴ画像"
                className={styles.logo}
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
                    className={styles.slide_image}
                    onLoadingComplete={handleImageLoad}
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
                    className={styles.slide_image}
                    onLoadingComplete={handleImageLoad}
                  />
                </div>
              ))}
        </>
      )}
    </section>
  );
}
