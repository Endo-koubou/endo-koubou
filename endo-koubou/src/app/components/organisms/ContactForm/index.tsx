"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Typography } from "@/app/components/atoms";
import { Toaster, ContactButton } from "@/app/components/molecules";
import styles from "./contact_form.module.scss";

export function ContactForm() {
  const { register, handleSubmit } = useForm();
  const [isDisable, setIsDisable] = useState<boolean>(false);

  const onSubmit = handleSubmit(async (data) => {
    setIsDisable(true);
    try {
      await fetch(`${process.env.NEXT_PUBLIC_HYPERFORM_END_POINT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      toast.custom(
        <Toaster message="お問い合わせが完了しました。メールをご確認ください。" />
      );
    } catch (e) {
      toast.custom(
        <Toaster
          type="error"
          message="送信に失敗しました。しばらく待ってから再度お試しください。"
        />
      );
    }
    setIsDisable(false);
  });

  return (
    <form
      method="post"
      onSubmit={onSubmit}
      className={`${styles.form} ${isDisable ? styles.cursor_wait : ""}`}
    >
      <div>
        <label>
          <Typography variant="h4">
            お名前<span className={styles.required}>(必須)</span>
          </Typography>
          <input
            id="name"
            type="text"
            placeholder="例）山田太郎"
            {...register("name")}
            disabled={isDisable}
            required
            className={`${styles.input_text}  ${
              isDisable ? styles.cursor_wait : ""
            }`}
          />
        </label>
      </div>
      <div>
        <label>
          <Typography variant="h4">
            メールアドレス<span className={styles.required}>(必須)</span>
          </Typography>
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder="例）example@example.com"
            disabled={isDisable}
            required
            className={`${styles.input_text}  ${
              isDisable ? styles.cursor_wait : ""
            }`}
          />
        </label>
      </div>
      <div>
        <label>
          <Typography variant="h4">
            件名または演目名<span className={styles.required}>(必須)</span>
          </Typography>
          <input
            id="title"
            type="text"
            {...register("title")}
            placeholder="例）制作の依頼 /『○○群像劇』など"
            disabled={isDisable}
            required
            className={`${styles.input_text}  ${
              isDisable ? styles.cursor_wait : ""
            }`}
          />
        </label>
      </div>
      <div>
        <label>
          <Typography variant="h4">
            所属団体<span className={styles.optional}>(任意)</span>
          </Typography>
          <input
            type="text"
            {...register("group")}
            placeholder="例）〇〇劇団"
            disabled={isDisable}
            className={`${styles.input_text}  ${
              isDisable ? styles.cursor_wait : ""
            }`}
          />
        </label>
      </div>
      <div>
        <label>
          <Typography variant="h4">
            仕込み日 ~ バラシ日<span className={styles.optional}>(任意)</span>
          </Typography>
          <div className={styles.date_inputs}>
            <input
              type="date"
              {...register("date_start")}
              disabled={isDisable}
              className={`${styles.input_date}  ${
                isDisable ? styles.cursor_wait : ""
              }`}
            />
            <Typography variant="span">~</Typography>
            <input
              type="date"
              {...register("date_end")}
              disabled={isDisable}
              className={`${styles.input_date}  ${
                isDisable ? styles.cursor_wait : ""
              }`}
            />
          </div>
        </label>
      </div>
      <div>
        <label>
          <Typography variant="h4">
            お問い合わせ種別<span className={styles.required}>(必須)</span>
          </Typography>
          <select
            id="inquiryType"
            {...register("inquiryType")}
            disabled={isDisable}
          >
            <option value="制作の依頼、お見積もり">
              制作の依頼、お見積もり
            </option>
            <option value="依頼前の相談、お見積もりなど">
              依頼前の相談、お見積もりなど
            </option>
            <option value="その他">その他</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          <Typography variant="h4">
            お問い合わせ内容をご記載ください
            <span className={styles.required}>(必須)</span>
          </Typography>
          <textarea
            id="message"
            {...register("message")}
            disabled={isDisable}
            required
            className={`${isDisable ? styles.cursor_wait : ""}`}
          ></textarea>
        </label>
      </div>
      <div
        className={`${styles.submit_button} ${
          isDisable ? styles.cursor_wait : ""
        }`}
      >
        <ContactButton
          label={isDisable ? "送信中..." : "送信する"}
          isDisable={isDisable}
        />
      </div>
    </form>
  );
}
