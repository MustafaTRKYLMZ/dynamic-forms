import axios from "axios";

export const fetchCountryCodes = async (): Promise<string[]> => {
  const response = await axios.get("https://restcountries.com/v2/all");
  if (!response) {
    throw new Error("Error fetching countries");
  }
  const countriesData = response.data;
  console.log("countriesData>>>>", countriesData[5]);
  return countriesData;
};
