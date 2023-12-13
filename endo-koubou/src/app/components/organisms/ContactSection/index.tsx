import { Typography } from "@/app/components/atoms";
import { ContactForm } from "../ContactForm";
import styles from "./contact_section.module.scss";

export type ContactSectionProps = {
  className?: string;
};

export function ContactSection({ className }: ContactSectionProps) {
  return (
    <div className={`${styles.contents} ${className}`}>
      <Typography variant="p">
        ENDO工房へのご依頼は以下のお問い合わせフォームよりお送りください。
        <br />
        また、各種SNSのダイレクトメッセージからのお問い合わせも受けつけております。
      </Typography>
      <Typography variant="p">
        ご依頼前の相談のみも受け付けておりますので、お気軽にご相談ください。
      </Typography>
      <ContactForm />
    </div>
  );
}
