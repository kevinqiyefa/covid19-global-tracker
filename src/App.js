import React, { useState, useEffect } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import { fetchCases } from './services/API';
import image from './assets/images/image.png';

import styles from './App.module.css';

function App() {
  const [cases, setCases] = useState({});
  const [country, setCountry] = useState('');

  useEffect(() => {
    const fetchCasesAPI = async () => {
      setCases(await fetchCases(country));
    };
    fetchCasesAPI();
  }, [country]);

  return (
    <div className={styles.App}>
      <img className={styles.image} src={image} alt="COVID-19" />
      <Cards cases={cases} />
      <CountryPicker handleCountryChange={setCountry} />
      <Chart country={country} cases={cases} />
    </div>
  );
}

export default App;
