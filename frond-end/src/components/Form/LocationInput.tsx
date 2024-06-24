import React, { useState } from "react";
import { SuggestionsItem } from "./SuggestionsItem";
import { handleInputChange } from "../../utils";

interface LocationInputProps {
  label: string;
  value: string;
  handleLocation?: (name: string, value: string) => void;
}

export const LocationInput: React.FC<LocationInputProps> = ({
  label,
  handleLocation,
}) => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [countrySuggestions, setCountrySuggestions] = useState<string[]>([]);
  const [citySuggestions, setCitySuggestions] = useState<string[]>([]);
  const [streetSuggestions, setStreetSuggestions] = useState<string[]>([]);

  const handleSuggestionClick = (suggestion: string, field: string) => {
    console.log("suggestion: ", suggestion, "field: ", field);
    if (field === "country") {
      setCountry(suggestion);
      setCity("");
      setStreet("");
      setCountrySuggestions([]);
      setCitySuggestions([]);
      setStreetSuggestions([]);
    } else if (field === "city") {
      setCountry("");
      setCity(suggestion);
      setCitySuggestions([]);
      setStreet("");
      setStreetSuggestions([]);
    } else if (field === "street") {
      setCountry("");
      setCity("");
      setStreet(suggestion);
      setStreetSuggestions([]);
    }
    handleLocation && handleLocation(label, suggestion);
  };

  console.log("country: ", country, "\n city: ", city, "\n street: ", street);
  return (
    <div className="formDetailField">
      <label>{label}</label>
      <div className="location">
        <p>{street && street}</p> <p>{city && city}</p>{" "}
        <p>{country && country}</p>
      </div>
      <SuggestionsItem
        type="text"
        name="country"
        placeholder="Enter country"
        value={country}
        onChange={(e) =>
          handleInputChange(
            e,
            "country",
            setCountry,
            setCity,
            setStreet,
            setCountrySuggestions,
            setCitySuggestions,
            setStreetSuggestions,

            country,
            city,
            street
          )
        }
        suggestions={countrySuggestions}
        handleSuggestionClick={handleSuggestionClick}
      />

      {country && (
        <>
          <SuggestionsItem
            type="text"
            name="city"
            placeholder="Enter city"
            value={city}
            onChange={(e) =>
              handleInputChange(
                e,
                "city",
                setCountry,
                setCity,
                setStreet,
                setCountrySuggestions,
                setCitySuggestions,
                setStreetSuggestions,
                country,
                city,
                street
              )
            }
            suggestions={citySuggestions}
            handleSuggestionClick={handleSuggestionClick}
          />
        </>
      )}
      {city && (
        <>
          <SuggestionsItem
            type="text"
            name="street"
            placeholder="Enter street and house number"
            value={street}
            onChange={(e) =>
              handleInputChange(
                e,
                "street",
                setCountry,
                setCity,
                setStreet,
                setCountrySuggestions,
                setCitySuggestions,
                setStreetSuggestions,
                country,
                city,
                street
              )
            }
            suggestions={streetSuggestions}
            handleSuggestionClick={handleSuggestionClick}
          />
        </>
      )}
    </div>
  );
};
