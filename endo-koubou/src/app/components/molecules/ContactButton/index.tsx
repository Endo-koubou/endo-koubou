import { Button, Typography } from "@/app/components/atoms";
import styles from "./contact_button.module.scss";

export type ContactButtonProps = {
  label: string;
  isDisable?: boolean;
};

export function ContactButton({
  label,
  isDisable = false,
}: ContactButtonProps) {
  return (
    <Button
      color="base"
      bgColor="secondary"
      rounded
      size="m"
      type="submit"
      isDisable={isDisable}
    >
      <Typography variant="p">{label}</Typography>
    </Button>
  );
}
