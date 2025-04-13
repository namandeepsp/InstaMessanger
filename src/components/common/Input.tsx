import React from "react";

interface IInputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  id?: string | null;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  label,
  type,
  name,
  value,
  id = null,
  onChange,
}: IInputProps) => {
  const inputId = id !== null ? id : name;
  return (
    <div className="flex items-center justify-between w-100 h-fit gap-4 bg-transparent">
      <label className="text-primary text-lg font-medium" htmlFor={inputId}>
        {label}
      </label>
      <input
        type={type}
        id={inputId}
        name={name}
        value={value}
        onChange={onChange}
        className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
      />
    </div>
  );
};

export default Input;
