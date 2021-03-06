import React, { memo } from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import cx from 'classnames';

import {
  CircularProgress,
  Grid,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';

// import green from '@material-ui/core/colors/green';
// import red from '@material-ui/core/colors/red';

import styles from './Cards.module.css';

const Cards = ({ cases: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return <CircularProgress size="3rem" />;
  }

  return (
    <div className={styles.cardsContainer}>
      <Grid container justify="center">
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography
              color="textPrimary"
              gutterBottom
              className={styles.casesTitle}
            >
              <i
                className={cx(styles.emoji, 'em em-mask')}
                aria-label="FACE WITH MEDICAL MASK"
              ></i>
              Infected
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.75}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of active cases of COVID-19.
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography
              color="textSecondary"
              gutterBottom
              className={styles.casesTitle}
            >
              <i
                className={cx(styles.emoji, 'em em-sunglasses')}
                aria-label="SMILING FACE WITH SUNGLASSES"
              ></i>
              Recovered
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.75}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of recoveries from COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography
              color="error"
              gutterBottom
              className={styles.casesTitle}
            >
              <i
                className={cx(styles.emoji, 'em em-zombie')}
                aria-label="ZOMBIE"
              ></i>
              Deaths
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.75}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of deaths caused by COVID-19.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

Cards.propTypes = {
  cases: PropTypes.object,
};

export default memo(Cards);
