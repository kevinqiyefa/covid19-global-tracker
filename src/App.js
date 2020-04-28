import React, { useState, useEffect } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import { fetchCases } from './services/API';

import styles from './App.module.css';

function App() {
  const [cases, setCases] = useState({});

  // const [country, setCountry] = useState('');

  useEffect(() => {
    const fetchCasesAPI = async () => {
      setCases(await fetchCases());
    };
    fetchCasesAPI();
  }, []);

  return (
    <div className={styles.App}>
      <Cards cases={cases} />
      <Chart />
      <CountryPicker />
    </div>
  );
}

export default App;
