import React from "react";
import { LocationInput } from "./LocationInput";
import { PhoneInput } from "./PhoneInput";
import { FormItemProps } from "../../types";

export const FormItem: React.FC<FormItemProps> = ({
  label,
  type,
  value,
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
