import styles from "./Avatar.module.css";
import { ImgHTMLAttributes } from "react";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  comment?: boolean;
}

export function Avatar({ comment = false, ...props }: AvatarProps) {
  return (
    <img
      className={comment ? styles.avatar2comment : styles.avatar}
      {...props}
    />
  );
}
