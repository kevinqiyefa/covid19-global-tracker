import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Cards />
      <Chart />
      <CountryPicker />
    </div>
  );
}

export default App;
