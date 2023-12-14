"use client";
import "./globals.scss";
import Image from "next/image";
import { FadeIn, Typography } from "@/app/components/atoms";
import { TransButton, FlowItem } from "@/app/components/molecules";
import {
  ContactSection,
  SnsButtons,
  MainVisual,
} from "@/app/components/organisms";
import styles from "./page.module.scss";
import useResponsive from "./hooks/useResponsive";

export default function Home() {
  const isPc = useResponsive("pc");
  return (
    <>
      <main className={styles.main}>
        <MainVisual />

        <section className={styles.works}>
          <div className={styles.relative_box}>
            <div className={styles.sub_title}>
              <Typography variant="h2" vertical>
                作品紹介
                <br />
                <span>
                  <Typography variant="span">WORKS</Typography>
                </span>
              </Typography>
            </div>
            <div className={styles.read}>
              <Typography variant="p">
                ENDO工房では様々な舞台美術を
                <br />
                手がけております。写真はその一部です。
              </Typography>
            </div>
            <div className={styles.bg} />
          </div>
          {isPc ? (
            <>
              <FadeIn delay={1} fadeType="up">
                <div
                  style={{
                    width: "100%",
                    height: "325px",
                    background: "#5e5e5e",
                  }}
                />
              </FadeIn>
              <FadeIn delay={1} fadeType="up">
                <div
                  style={{
                    width: "100%",
                    height: "325px",
                    background: "#5e5e5e",
                  }}
                />
              </FadeIn>
            </>
          ) : (
            <></>
          )}
          <div className={styles.button}>
            <TransButton label="もっとみる" direction="next" path="/works" />
          </div>
        </section>

        <section className={styles.company}>
          <div className={styles.relative_box}>
            <div className={styles.sub_title}>
              <Typography variant="h2" vertical>
                会社概要
                <br />
                スタッフ一覧
                <br />
                <span>
                  <Typography variant="span">COMPANY</Typography>
                </span>
              </Typography>
            </div>
            <div className={styles.wrapper}>
              {isPc && (
                <Image
                  src="/images/company.jpg"
                  width="794"
                  height="359"
                  alt="工房内の風景写真"
                  className={styles.image}
                />
              )}
              <div className={styles.relative_box}>
                <div className={styles.right_contents}>
                  <Typography variant="p">
                    軽い会社説明。〜〜年に設立して低コストながらもクオリティが高い作品が売りです等のテキストが入ります
                  </Typography>
                  {!isPc && (
                    <Image
                      src="/images/company.jpg"
                      width="794"
                      height="359"
                      alt="工房内の風景写真"
                      className={styles.image}
                    />
                  )}

                  <div className={styles.button}>
                    <TransButton
                      label="もっとみる"
                      direction="next"
                      path="/company"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bg} />
          </div>
        </section>

        <section className={styles.flow}>
          <div className={styles.sub_title}>
            <Typography variant="h2" vertical={isPc && true}>
              制作依頼のフロー
              <br />
              <Typography variant="span">FLOW</Typography>
            </Typography>
          </div>
          <div>
            <FlowItem
              step="01"
              icon="mail"
              title="お問い合わせ"
              text="お問い合わせページまたは各種SNSからご連絡ください。"
            />
            <FlowItem
              step="02"
              icon="document"
              title="台本もしくは依頼書、公演の概要"
              text="ご要望に沿ったものをお作りするため台本等のお渡しをお願いしております。"
            />
            <FlowItem
              step="03"
              icon="chat"
              title="打ち合わせ（ヒヤリング）"
              text="お電話またはメールなどで打ち合わせし、依頼内容のすり合わせを行います。"
            />
            <FlowItem
              step="04"
              icon="edit"
              title="デザイン考案"
              text="ご依頼内容が定まり次第、デザインを作成いたします。"
            />
            <FlowItem
              step="05"
              icon="presen"
              title="プレゼンテーション"
              text="考案したデザインをお見せし、細部の最終調整を行います。"
            />
            <FlowItem
              step="06"
              icon="check"
              title="本決定"
              text="お客様の満足のいく形で最終調整が済んだ後、本格的に舞台美術の製作に取り掛かります。"
              isLast
            />
          </div>
        </section>

        <section className={styles.contact}>
          <div className={styles.inner}>
            <div className={styles.sub_title}>
              <Typography variant="h2" vertical>
                お問い合わせ
                <br />
                <span>
                  <Typography variant="span">CONTACT</Typography>
                </span>
              </Typography>
            </div>
            <ContactSection className={styles.contents} />
          </div>
        </section>
        <section className={styles.sns}>
          <Typography variant="p">
            下記アイコンから各種SNSのプロフィールを開くことができます。
            <br />
            ダイレクトメッセージよりお問い合わせいただくことも可能です。
          </Typography>
          <div className={styles.icons}>
            <SnsButtons
              instagramId="elton_0914"
              xId="hacouma0914"
              color="secondary"
              size="m"
            />
          </div>
        </section>
      </main>
    </>
  );
}
