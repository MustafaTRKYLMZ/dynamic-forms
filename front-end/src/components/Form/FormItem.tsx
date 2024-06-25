import React from "react";

import { FormItemProps } from "../../types";
import { LocationInput } from "./LocationInput";
import { PhoneInput } from "./PhoneInput";

export const FormItem: React.FC<FormItemProps> = ({
  label,
  type,
  value,
  options,
  handleChange,
  handleLocation,
  handlePhone,
  isSubmitted,
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
    return (
      <PhoneInput
        label={label}
        handlePhone={handlePhone || (() => {})}
        isSubmitted={isSubmitted || false}
      />
    );
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
