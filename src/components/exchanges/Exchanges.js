import React, { Component } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import classes from './Exchanges.module.scss';
import { EXCHANGES } from '../../assets/data';
import ChangingProgress from '../ChangingProgress';
import { getValueText } from '../../core/common';

class ExchangeChart extends Component {
  render() {
    return (
      <ChangingProgress
      percentage={this.props.percentage} >
        { value => (
          <CircularProgressbar 
            value={value}
            text={`${getValueText(value.toFixed(2), this.props.percentage)}%`}
            circleRatio={1}
            styles={ buildStyles({
              rotation: 0,
              strokeLinecap: 'round',
              textSize: '16px',
              pathTransition: "none",
              pathColor: this.props.color,
              textColor: '#ffffff',
              trailColor: '#282C38',
            }) } />
        ) }
      </ChangingProgress>
    );
    
  }

}


function Exchanges() {
  return (
    <div className={classes.exchanges}>
      { EXCHANGES.map((ex, i) => (
        <div className={`card ${classes.exchange}`} key={i}>
          <div className={classes.exchange_div_1}>
            <span className={classes.exchange_div_1_span_1}>Exchange Balance</span>
            <span className={classes.exchange_div_1_span_2}>{ ex.value }</span>
            <span className={classes.exchange_div_1_span_3} style={{ color: ex.amountColor }}>{ ex.amount } { ex.currency }</span>
          </div>

          <div className={classes.exchange_div_2}>
            <ExchangeChart percentage={ex.percentage} color={ex.chartColor} />
          </div>
        </div>
      )) }
    </div>
  )
}

export default Exchanges;