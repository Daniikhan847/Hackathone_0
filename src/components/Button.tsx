import React from "react";

const Button = ({ text, theme }: { text: string; theme: "dark" | "light" }) => {
  return (
    <button
      className={`h-10 px-4 ${
        theme === "dark"
          ? "text-white bg-blue-900"
          : "text-blue-900 bg-gray-300"
      } text-sm`}
    >
      {text}
    </button>
  );
};

export default Button;