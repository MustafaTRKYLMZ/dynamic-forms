import React from "react";
import { LocationInput } from "./LocationInput";

interface FormItemProps {
  label: string;
  type: string;
  value: string;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  handleLocation?: (name: string, value: string) => void;
}

export const FormItem: React.FC<FormItemProps> = ({
  label,
  type,
  value,
  handleChange,
  handleLocation,
}) => {
  if (type === "location") {
    return (
      <LocationInput
        label={label}
        value={value}
        handleLocation={handleLocation}
      />
    );
  }

  return (
    <div className="formDetailField">
      <label>{label}</label>
      {type === "textarea" ? (
        <textarea name={label} value={value} onChange={handleChange} />
      ) : (
        <input type={type} name={label} value={value} onChange={handleChange} />
      )}
    </div>
  );
};
