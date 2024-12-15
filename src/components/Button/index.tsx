import React from "react";
import styles from "./index.module.scss";
import classNames from "classnames";

type TButton = {
  className?: string;
  text: string;
  dark?: boolean;
  onClick?: () => void;
};
const Button = ({ className, text, onClick, dark }: TButton) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick?.();
  };
  return (
    <button
      onClick={handleClick}
      className={classNames(
        styles.button,
        className,
        dark && styles.button__dark,
      )}
    >
      {text}
    </button>
  );
};

export default Button;
