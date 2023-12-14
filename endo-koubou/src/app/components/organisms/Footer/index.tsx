"use client";
import Link from "next/link";
import useResponsive from "@/app/hooks/useResponsive";
import { Logo, Typography } from "@/app/components/atoms";
import { ScrollButton } from "@/app/components/molecules";
import { SnsButtons } from "@/app/components/organisms";
import styles from "./footer.module.scss";

export function Footer() {
  const isPc = useResponsive("pc");

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <ScrollButton />
          {isPc && (
            <>
              <Typography variant="p" className={styles.text}>
                舞台美術をもっと身近に
              </Typography>
              <Logo fill="base" className={styles.logo} />
            </>
          )}
        </div>
        <div className={styles.right_contents}>
          {isPc && (
            <div className={styles.icons}>
              <SnsButtons
                instagramId="elton_0914"
                xId="hacouma0914"
                color="base"
                size="s"
              />
            </div>
          )}
          <nav>
            <ul className={styles.links}>
              <li>
                <Link href="/works">
                  <Typography
                    variant="p"
                    vertical={isPc}
                    className={styles.link}
                  >
                    作品一覧
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="/company">
                  <Typography
                    variant="p"
                    vertical={isPc}
                    className={styles.link}
                  >
                    会社概要
                    {isPc && <br />}
                    &スタッフ一覧
                  </Typography>
                </Link>
              </li>
              <li>
                <Typography variant="p" vertical={isPc} className={styles.link}>
                  <Link href="/contact">お問い合わせ</Link>
                </Typography>
              </li>
              <li>
                <Typography variant="p" vertical={isPc} className={styles.link}>
                  <Link href="/">ホーム</Link>
                </Typography>
              </li>
            </ul>
          </nav>
          {!isPc && (
            <>
              <div className={styles.icons}>
                <SnsButtons color="base" size="s" />
              </div>
              <Typography variant="p" className={styles.text}>
                舞台美術をもっと身近に
              </Typography>
              <Logo
                fill="base"
                width={190}
                height={29.75}
                className={styles.logo}
              />
            </>
          )}
        </div>
      </div>
      <div className={styles.copy}>
        <small>©︎ ENDO Koubou</small>
      </div>
    </footer>
  );
}
