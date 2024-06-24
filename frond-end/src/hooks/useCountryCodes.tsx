import { useEffect, useState } from "react";
import { fetchCountryCodes } from "../api";
import { CountryCode } from "../types";

export const useCountryCodes = () => {
  const [countryCodes, setCountryCodes] = useState<CountryCode[]>([]);

  const getCountyCodes = async () => {
    const countryCodes = await fetchCountryCodes();
    const codes = countryCodes.map((country: any) => ({
      name: country.name,
      dialCode: country.callingCodes[0],
      flagUrl: country.flags.png,
    }));
    setCountryCodes(codes);
  };
  useEffect(() => {
    getCountyCodes();
  }, []);

  return countryCodes;
};
