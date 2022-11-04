import React from 'react';

import classes from './Cards.module.scss';
import ArrowLeft2 from '../../../assets/svg/arrow_left_2.svg';
import Card from './Card';

export default function Cards() {
  return (
    <div className={classes.cards}>
      <div className={classes.div_1}>
        <h4>Your cards</h4>

        <span className='dashboard_gray_btn' style={{ padding: '3px 8px' }}>
          See All
          <img src={ArrowLeft2} alt='arrow left 2' style={{ marginLeft: '5px' }} />
        </span>
      </div>

      <div className={classes.div_2}>
        <Card cardNumber={4343434343431566} year={2026} month={6} />
      </div>
    </div>
  )
}

