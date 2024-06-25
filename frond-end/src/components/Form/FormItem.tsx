import React from "react";
import { LocationInput } from "./LocationInput";
import { PhoneInput } from "./PhoneInput";
import { FormItemProps } from "../../types";

export const FormItem: React.FC<FormItemProps> = ({
  label,
  type,
  value,
  options,
  handleChange,
  handleLocation,
  handlePhone,
}) => {
  if (type === "location") {
    return (
      <LocationInput
        label={label}
        value={value || ""}
        handleLocation={handleLocation}
      />
    );
  }
  if (type === "phone") {
    if (!handlePhone) throw new Error("handlePhone is required for phone type");
    return <PhoneInput label={label} handlePhone={handlePhone} />;
  }

  if (type === "select") {
    return (
      <div className="formDetailField">
        <label>{label}</label>
        <select name={label} value={value} onChange={handleChange}>
          <option value="">Select an option</option>
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
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
