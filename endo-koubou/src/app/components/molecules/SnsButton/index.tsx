import { Button } from "@/app/components/atoms";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

export type SnsButtonProps = {
  sns: "x" | "instagram";
  link?: string;
  className?: string;
};

export function SnsButton({ sns, link, className }: SnsButtonProps) {
  return (
    <Button isDisable={link ? false : true} className={className}>
      {sns === "x" ? (
        link ? (
          <a href={`https://twitter.com/${link}`} target="blank">
            <FaXTwitter />
          </a>
        ) : (
          <FaXTwitter />
        )
      ) : sns == "instagram" && link ? (
        <a href={`https://www.instagram.com/${link}`} target="blank">
          <FaInstagram />
        </a>
      ) : (
        <FaInstagram />
      )}
    </Button>
  );
}
