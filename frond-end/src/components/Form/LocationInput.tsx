import React, { FC, useState } from "react";
import { SuggestionsItem } from "./SuggestionsItem";
import { debounce } from "../../utils";
import { fetchSuggestions } from "../../api";

export interface LocationInputProps {
  label: string;
  value: string;
  handleLocation?: (name: string, value: string) => void;
}

export const LocationInput: FC<LocationInputProps> = ({
  label,
  value,
  handleLocation,
}) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [query, setQuery] = useState<string>(value);

  const handleSuggestionClick = (suggestion: string) => {
    handleLocation && handleLocation(label, suggestion);
    setSuggestions([]);
    setQuery("");
  };

  const handleChange = async (inputValue: string) => {
    setQuery(inputValue);
    if (inputValue.length < 3) {
      setSuggestions([]);
      return;
    }

    const suggestions = await fetchSuggestions(inputValue);
    setSuggestions(suggestions);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    handleChange(value);
  };

  return (
    <div className="formDetailField">
      <label>{label}</label>
      <div className="location">
        <p>{value}</p>
      </div>
      <SuggestionsItem
        type="text"
        name="location"
        placeholder="Enter location"
        query={query}
        onChange={handleInputChange}
        suggestions={suggestions}
        handleSuggestionClick={handleSuggestionClick}
      />
    </div>
  );
};
