import React from "react";

// types
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  icon,
  btnType,
  isDisabled,
  containerStyles,
  textStyles,
  iconStyles,
}: CustomButtonProps) => {
  return (
    <button
      type={btnType}
      disabled={isDisabled}
      className={` ${containerStyles}`}
    >
      <span className={` ${iconStyles}`}>
        {icon}
        </span>
      <span className={` ${textStyles}`}>
        {title}
        </span>
    </button>
  );
};

export default CustomButton;
