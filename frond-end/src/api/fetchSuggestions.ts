import axios from "axios";

export const fetchSuggestions = async (
  query: string,
  country?: string,
  city?: string,
  street?: string
) => {
  if (query.length < 3) {
    return [];
  }

  let q = query;
  if (city) {
    q = `${query}, ${city}, ${country}`;
  } else if (country) {
    q = `${query}, ${country}`;
  } else if (street) {
    q = `${query}, ${street}, ${city}, ${country}`;
  }

  try {
    const response = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json`,
      {
        params: {
          q: q,
          key: "482b5c1567ef458fb31ee4e7e35f4a4b",
          limit: 5,
        },
      }
    );

    if (response.data.results) {
      console.log("results >>>>", response.data.results[0].formatted);
      const results = response.data.results;
      return results.map((result: any) => result.formatted);
    } else {
      return [];
    }
  } catch (error) {
    throw new Error("Error fetching suggestions");
  }
};
