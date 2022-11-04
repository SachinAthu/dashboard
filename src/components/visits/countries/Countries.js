import React from 'react';

import classes from './Countries.module.scss';
import ArrowLeft2 from '../../../assets/svg/arrow_left_2.svg';
import RateDown from '../../../assets/svg/rate_down_arrow.svg';
import RateUp from '../../../assets/svg/rate_up_arrow.svg';
import { COUNTRIES } from '../../../assets/data';

// flag icons
import usa_flag from '../../../assets/svg/flags/usa_flag.svg';
import canada_flag from '../../../assets/svg/flags/canada_flag.svg';
import germany_flag from '../../../assets/svg/flags/germany_flag.svg';
import mexico_flag from '../../../assets/svg/flags/mexico_flag.svg';
import france_flag from '../../../assets/svg/flags/france_flag.svg';

function Countries() {
  const flagIcons = {
    usa_flag,
    canada_flag,
    germany_flag,
    mexico_flag,
    france_flag,
  };

  function generateCountries() {
    let countryList = [];

    COUNTRIES.forEach((c, i) => {
      let item = (
        <li key={i}>
          <img src={flagIcons[c.flag]} alt={c.flag} />

          <span className={classes.name}>{ c.name }</span>

          <span className={classes.count}>{ Number(c.count).toLocaleString() }</span>

          <img src={c.isRateUp ? RateUp : RateDown} alt='rate' />

          <span className={classes.rate}>{ c.rate + '%' }</span>
        </li>
      );

      countryList.push(item);
    });

    return countryList;

  }

  return (
    <div className={classes.countries}>
      <div className={classes.div_1}>
        <h1>Visits by Location</h1>

        <span className='dashboard_gray_btn' style={{ padding: '3px 8px' }}>
          See All
          <img src={ArrowLeft2} alt='arrow left 2' style={{ marginLeft: '5px' }} />
        </span>
      </div>

      <div className={classes.div_2}>
        <ul>
          { generateCountries() }
        </ul>
      </div>
    </div>
  )
}

export default Countries