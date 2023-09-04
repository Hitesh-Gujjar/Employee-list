import React from "react";

function TextInput({ type, id, ...props }) {
  return (
    <input
      type={type}
      id={id}
      className="border border-gray-300 bg-white shadow-md w-full h-9 px-2 py-1 rounded-md"
      {...props}
    />
  );
}

export default TextInput;
