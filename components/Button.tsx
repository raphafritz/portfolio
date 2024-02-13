import { ReactNode } from "react";

import styles from "@/styles/button.module.scss";

import classNames from "classnames/bind";
const css = classNames.bind(styles);

interface ButtonProps {
  design?: string;
  onClick?: () => void;
  ariaLabel?: string;
  children?: ReactNode;
  disabled?: boolean;
}

export default function Button({
  design = "primary",
  onClick,
  ariaLabel,
  children,
  disabled,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={css({ [design]: true })}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
