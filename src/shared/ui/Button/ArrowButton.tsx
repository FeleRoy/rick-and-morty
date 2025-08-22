import React from "react";

type ArrowButtonProps = {
  onClick: () => void;
  text: string;
  isDisabled?: boolean;
};

const ArrowButton: React.FC<ArrowButtonProps> = ({ onClick, text, isDisabled = false }) => (
  <button
    onClick={onClick}
    className="text-3xl disabled:opacity-50 disabled:cursor-default cursor-pointer"
    disabled={isDisabled}
  >
    <span className="text-3xl">{text}</span>
  </button>
);

export default ArrowButton;
