import React, { useState, useEffect, memo } from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../services/API';
// import PropTypes from 'prop-types';

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountriesAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchCountriesAPI();
  }, []);
  console.log('countrypicker');
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

// CountryPicker.propTypes = {};

export default memo(CountryPicker);
