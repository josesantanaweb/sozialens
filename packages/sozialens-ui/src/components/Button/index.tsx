import React from "react";
import { cn } from "../../utils";
import type { ButtonProps } from "./types";
import { variantClass } from './variants'

const Button: React.FC<ButtonProps> = ({ onClick, children, className, disabled, variant = 'primary' }) => {

  const variantClasses = variantClass({ variant });
  const disabledClasses = "opacity-40 cursor-not-allowed bg-primary-400";
  const mergeClassName = cn(
    variantClasses,
    { [disabledClasses]: disabled },
    className
  );

  return (
    <button
      type="button"
      onClick={onClick}
      className={mergeClassName}
    >
      {children}
    </button>
  );
};

export default Button;
