import React from "react";

interface PhoneInputProps {
  label: string;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PhoneInput: React.FC<PhoneInputProps> = ({
  label,
  value,
  onChange,
}) => {
  // Custom logic for phone input
  return (
    <div>
      <label>{label}</label>
      <input
        type="tel"
        name={label}
        placeholder="Enter phone number"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
