import React, { useState, FC } from "react";
import { useCountryCodes } from "../../hooks";
import { PhoneInputProps } from "../../types";

export const PhoneInput: FC<PhoneInputProps> = ({ label, handlePhone }) => {
  const countries = useCountryCodes();
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountryCode(e.target.value);
    updateField(phoneNumber);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phoneNumber = e.target.value;
    setPhoneNumber(phoneNumber);
    updateField(phoneNumber);
  };
  const updateField = (phoneNumber: string) => {
    const fullPhoneNumber = `${selectedCountryCode}${phoneNumber}`;
    if (fullPhoneNumber.length < 10) return;
    handlePhone(label, fullPhoneNumber);
    setPhoneNumber(phoneNumber);
  };
  return (
    <div className="phoneContainer">
      <label>{label}</label>
      <div className="phoneNumber">
        <select value={selectedCountryCode} onChange={handleSelectChange}>
          <option value="">Select a country</option>
          {countries?.map((country, index) => (
            <option key={index} value={country.dialCode}>
              <img src={country.flagUrl} alt={country.name} />
              <span>
                {country.name} ({country.dialCode})
              </span>
            </option>
          ))}
        </select>
        <input
          type="text"
          name={label}
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
