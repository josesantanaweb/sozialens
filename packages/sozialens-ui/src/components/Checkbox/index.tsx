import React from "react";
import type { CheckboxProps } from "./types";
import Check from "./Check";

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  isChecked,
  onChange,
}) => {
  return (
    <label htmlFor={id} className="flex items-center gap-3 cursor-pointer">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        className="hidden"
      />
      <span
        className={`w-6 h-6 flex items-center justify-center transition border border-base-400 rounded-md ${isChecked ? "bg-primary-100 border-primary-100" : "bg-white"}`}
      >
        {Boolean(isChecked) && <Check />}
      </span>
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
    </label>
  );
};

export default Checkbox;
