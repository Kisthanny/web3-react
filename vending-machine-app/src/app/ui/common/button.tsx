'use client'
import React from "react";

const Button = ({
  label,
  onClick,
}: {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  px-4 py-2 text-white"
    >
      {label}
    </button>
  );
};

export default Button;
