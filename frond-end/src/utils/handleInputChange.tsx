import { fetchSuggestions } from "../api/fetchSuggestions";
import { debounce } from "./debounce";
export const handleInputChange = debounce(
  async (
    e: React.ChangeEvent<HTMLInputElement>,
    setQuery: React.Dispatch<React.SetStateAction<string>>,
    setSuggestions: React.Dispatch<React.SetStateAction<string[]>>,
    onChange: (value: string) => void
  ) => {
    const { value } = e.target;
    console.log("value: ", value);
    setQuery(value);
    console.log("suggessetQuerytions: ", setQuery);
    console.log("value outside: ", value);
    if (value.length < 3) {
      console.log("value: ", value);
      setSuggestions([]);
      return;
    }

    const suggestions = await fetchSuggestions(value);
    console.log("suggestions: ", suggestions);
    setSuggestions(suggestions);

    onChange(value);
  },
  100
);
