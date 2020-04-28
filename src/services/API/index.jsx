import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchCases = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

export const fetchDailyCases = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data.map(({ confirmed, deaths, reportDate: date }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date,
    }));
  } catch (error) {
    return error;
  }
};
