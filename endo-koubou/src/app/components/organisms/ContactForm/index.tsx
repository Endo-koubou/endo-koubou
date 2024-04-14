"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Typography } from "@/app/components/atoms";
import { Toaster, ContactButton } from "@/app/components/molecules";
import { DateUtils } from "@/app/util/formatDate";
import styles from "./contact_form.module.scss";

interface FormValues {
  name: string;
  email: string;
  title: string;
  group: string;
  date_start: string;
  date_end: string;
  no_time?: boolean;
  inquiry_type: string;
  message: string;
}

export function ContactForm() {
  const today = DateUtils.getCurrentDateFormatted();
  const { register, handleSubmit, watch } = useForm({
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      title: "",
      group: "",
      date_start: today,
      date_end: today,
      no_time: false,
      inquiry_type: "製作の依頼、お見積もり",
      message: "",
    },
  });
  const [isDisable, setIsDisable] = useState<boolean>(false);
  const isNoTimeChecked = watch("no_time");

  const onSubmit = handleSubmit(async (data: FormValues) => {
    setIsDisable(true);

    if (data.no_time) {
      data.date_start = "指定なし";
      data.date_end = "指定なし";
    }
    delete data.no_time;

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
      return;
    } finally {
      setIsDisable(false);
    }
  });

  return (
    <form
      method="post"
      onSubmit={onSubmit}
      className={`${styles.form} ${isDisable ? styles.cursor_wait : ""}`}
    >
      <div>
        <label>
          <Typography variant="h5">
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
          <Typography variant="h5">
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
          <Typography variant="h5">
            件名または演目名<span className={styles.required}>(必須)</span>
          </Typography>
          <input
            id="title"
            type="text"
            {...register("title")}
            placeholder="例）製作の依頼 /『○○群像劇』など"
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
          <Typography variant="h5">
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
          <Typography variant="h5">
            仕込み日 ~ バラし日<span className={styles.optional}>(任意)</span>
          </Typography>
          <div className={styles.date_inputs}>
            <input
              type="date"
              {...register("date_start")}
              disabled={isDisable ? isDisable : isNoTimeChecked}
              className={`${styles.input_date}  ${
                isDisable ? styles.cursor_wait : ""
              } ${isNoTimeChecked ? styles.no_time : ""}`}
            />
            <Typography variant="span">~</Typography>
            <input
              type="date"
              {...register("date_end")}
              disabled={isDisable ? isDisable : isNoTimeChecked}
              className={`${styles.input_date}  ${
                isDisable ? styles.cursor_wait : ""
              } ${isNoTimeChecked ? styles.no_time : ""}`}
            />
          </div>
        </label>

        <label htmlFor="no_time" className={styles.no_time_wrapper}>
          <input
            id="no_time"
            type="checkbox"
            {...register("no_time")}
            disabled={isDisable}
            className={`${styles.input_check}  ${
              isDisable ? styles.cursor_wait : ""
            }`}
          />
          <Typography variant="span">日程を指定しない</Typography>
        </label>
      </div>
      <div>
        <label>
          <Typography variant="h5">
            お問い合わせ種別<span className={styles.required}>(必須)</span>
          </Typography>
          <select
            id="inquiry_type"
            {...register("inquiry_type")}
            disabled={isDisable}
          >
            <option value="製作の依頼、お見積もり">
              製作の依頼、お見積もり
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
          <Typography variant="h5">
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
