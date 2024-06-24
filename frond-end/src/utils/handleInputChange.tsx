import { fetchSuggestions } from "../api/fetchSuggestions";

export const handleInputChange = async (
  e: React.ChangeEvent<HTMLInputElement>,
  field: string,
  setCountry: React.Dispatch<React.SetStateAction<string>>,
  setCity: React.Dispatch<React.SetStateAction<string>>,
  setStreet: React.Dispatch<React.SetStateAction<string>>,
  setCountrySuggestions: React.Dispatch<React.SetStateAction<string[]>>,
  setCitySuggestions: React.Dispatch<React.SetStateAction<string[]>>,
  setStreetSuggestions: React.Dispatch<React.SetStateAction<string[]>>,

  country?: string,
  city?: string,
  street?: string
) => {
  const { value } = e.target;

  if (field === "country") {
    setCountry(value);
    setCity("");
    setStreet("");
    setCountrySuggestions([]);
    setCitySuggestions([]);
    setStreetSuggestions([]);
    const suggestions = await fetchSuggestions(value);
    setCountrySuggestions(suggestions);
  } else if (field === "city") {
    setCity(value);
    setStreet("");
    setStreetSuggestions([]);
    const suggestions = await fetchSuggestions(value, country);
    setCitySuggestions(suggestions);
  } else if (field === "street") {
    setStreet(value);
    const suggestions = await fetchSuggestions(value, country, city, street);
    setStreetSuggestions(suggestions);
  }
};
