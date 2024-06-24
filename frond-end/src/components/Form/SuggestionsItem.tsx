import React, { FC } from "react";

export type SuggestionsItemProps = {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  suggestions: string[];
  handleSuggestionClick: (suggestion: string, name: string) => void;
};

export const SuggestionsItem: FC<SuggestionsItemProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  suggestions,
  handleSuggestionClick,
}) => {
  return (
    <div className="suggestionsContainer">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion, name)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
