import React, { useState, useEffect } from 'react';
import Countries from './Countries';
import Nav from './Nav';
import Form from './Form';

const url = 'https://restcountries.com/v3.1/all';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [regionArray, setRegion] = useState([]);

  const fetchCountries = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const regions = [...new Set(countries.map((country) => country.region))];
  console.log(regions);

  const showByRegion = (region) => {
    console.log(region);
    const countryByRegion = countries.filter((country) => {
      return region === country.region;
    });
    setCountries(countryByRegion);
  };
  return (
    <main>
      <div className="container">
        <Nav />
        <Form regions={regions} showByRegion={showByRegion} />
        {loading ? (
          <h2 className="loading">Loading...</h2>
        ) : (
          <Countries countries={countries} />
        )}
      </div>
    </main>
  );
};

export default App;
