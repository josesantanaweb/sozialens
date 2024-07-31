import React from "react";
import { cn } from "../../utils";
import type { InputProps } from "./types";

const Input: React.FC<InputProps> = ({ id, onChange, label, className, ...props  }) => {

  const mergeClassName = cn(
    "h-11 border border-base-500 rounded-md px-5 outline-none focus:border-primary-100 placeholder-base-400",
    className,
  );

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-dark">{label}</label>
      <input
        id={id}
        type="text"
        onChange={onChange}
        className={mergeClassName}
        {...props}
      />
    </div>
  );
};

export default Input;
