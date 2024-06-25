import React, { useState, FC, useEffect } from "react";
import { useCountryCodes } from "../../hooks";
import { PhoneInputProps } from "../../types";

export const PhoneInput: FC<PhoneInputProps> = ({
  label,
  handlePhone,
  isSubmitted,
}) => {
  const countries = useCountryCodes();
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  useEffect(() => {
    if (isSubmitted) {
      setSelectedCountryCode("");
      setPhoneNumber("");
    }
  }, [isSubmitted]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountryCode(e.target.value);
    updateField(e.target.value, phoneNumber);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const updateField = (countryCode: string, phone: string) => {
    const fullPhoneNumber = `${countryCode}${phone}`;
    handlePhone(label, fullPhoneNumber);
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
