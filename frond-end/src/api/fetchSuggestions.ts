import axios from "axios";

export const fetchSuggestions = async (query: string) => {
  if (query.length < 3) {
    return [];
  }

  try {
    const response = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json`,
      {
        params: {
          q: query,
          key: import.meta.env.VITE_API_KEY,
          limit: 5,
        },
      }
    );

    if (response.data.results) {
      const results = response.data.results;
      return results.map((result: any) => result.formatted);
    } else {
      return [];
    }
  } catch (error) {
    throw new Error("Error fetching suggestions");
  }
};
