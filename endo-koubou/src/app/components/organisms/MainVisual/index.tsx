"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FadeIn } from "@/app/components/atoms";
import { MvTitle } from "@/app/components/molecules";
import styles from "./main_visual.module.scss";

const images = [
  "/images/mv_01.jpg",
  "/images/mv_02.jpg",
  "/images/mv_03.jpg",
  "/images/mv_04.jpg",
];

export function MainVisual() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 6000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <section className={styles.mv} style={{ height: "100dvh" }}>
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
      {images.map((image, index) => (
        <div
          key={image}
          className={
            index === currentSlide ? styles.activeSlide : styles.inactiveSlide
          }
        >
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
    </section>
  );
}
