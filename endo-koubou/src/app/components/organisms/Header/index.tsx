"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button, Logo, Typography } from "@/app/components/atoms";
import styles from "./header.module.scss";
import useResponsive from "@/app/hooks/useResponsive";
import { FaBars, FaXmark } from "react-icons/fa6";

const menuMapping = [
  { label: "ホーム", subLabel: "HOME", path: "/", isPc: false },
  { label: "作品一覧", subLabel: "WORKS", path: "/works", isPc: true },
  {
    label: "工房情報 & スタッフ一覧",
    subLabel: "ATELIER",
    path: "/company",
    isPc: true,
  },
  { label: "お問い合わせ", subLabel: "CONTACT", path: "/contact", isPc: true },
];

export function Header() {
  const path = usePathname();
  const isTop = path === "/";
  const [showHeader, setShowHeader] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const classIsOpen = isMenuOpen ? "open" : "";
  const isPc = useResponsive("pc");

  useEffect(() => {
    if (!isTop) {
      return;
    } else {
      setShowHeader(false);
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > 455) {
          setShowHeader(true);
        } else {
          setShowHeader(false);
        }
      };
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isTop]);

  return (
    <header
      className={`${styles.header} ${styles[classIsOpen]} ${
        isTop && styles.animation
      } ${isTop && showHeader && styles.slideDown}`}
    >
      <div className={styles.inner}>
        <div className={styles.logo}>
          <Link href="/">
            <Logo
              fill="secondary"
              width={isPc ? 160 : 140}
              height={isPc ? 25.05 : 21.92}
              viewBox={isPc ? "0 0 190 30" : "0 0 190 30"}
            />
          </Link>
        </div>

        {isPc ? (
          <nav>
            <ul className={styles.menu}>
              {menuMapping.map(
                (page, index) =>
                  page.isPc && (
                    <li key={index} className={styles.item}>
                      <Link href={page.path}>
                        <Typography variant="span">{page.label}</Typography>
                      </Link>
                    </li>
                  )
              )}
            </ul>
          </nav>
        ) : (
          <Button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {!isMenuOpen ? (
              <FaBars className={styles.icon_menu} />
            ) : (
              <FaXmark className={styles.icon_menu} />
            )}
          </Button>
        )}
      </div>
      {isMenuOpen && (
        <nav className={styles.sp_nav}>
          <ul>
            {menuMapping.map((page, index) => (
              <li key={index} className={styles.item}>
                <Link href={page.path} onClick={() => setIsMenuOpen(false)}>
                  <Typography variant="h4" className={styles.page_title}>
                    {page.label}
                  </Typography>
                  <Typography variant="span" className={styles.sub_title}>
                    {page.subLabel}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
