import { useState, useEffect } from "react";

const useCountryCity = (country) => {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://countriesnow.space/api/v0.1/countries/"
        );
        const data = await response.json();
        setCountries(data.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        if (country) {
          const response = await fetch(
            `https://countriesnow.space/api/v0.1/countries/cities/q?country=${country}`
          );
          const data = await response.json();
          setCities(data.data);
        } else {
          setCities([]);
        }
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, [country]);

  return { countries, cities };
};

export default useCountryCity;