import React, { Component } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

import classes from './SRate.module.scss';
import Track from '../../../assets/svg/track.svg';
import ChangingProgress from '../../ChangingProgress';

class SRate extends Component {
  percentage = 74.54;

  /**
   * rotate middle marker
   * 0-100 / -152deg - 58deg
   * 100 - 210deg
   */
  rotate(value) {
    let d = parseInt((value * 210) / 100);
    d += -152;
    return d;
  }

  render() {
    return (
      <div className={classes.srate}>
        <h2>Satisfaction rate</h2>
  
        <ChangingProgress
          percentage={this.percentage} >
            { value => (
              <div id='srateChart' className={classes.chart}>
                <CircularProgressbar 
                  value={value}
                  circleRatio={0.5}
                  styles={ buildStyles({
                    rotation: 0.75,
                    strokeLinecap: "round",
                    textSize: '16px',
                    pathTransition: "none",
                    pathColor: '#246CF9',
                    textColor: '#246CF9',
                    trailColor: '#282C38',
                  }) }  />
        
                  <span className={classes.zero}>0%</span>
        
                  <span className={classes.hundred}>100%</span>
        
                  <img 
                    className={classes.track} 
                    src={Track} 
                    alt='satisfaction rate track' /> 
        
                  <div 
                    className={classes.middle}
                    style={{ transform: `translateX(-50%) rotate(${this.rotate(value)}deg)` }}
                  >🚀</div>
        
                  <div className={classes.bottom}>
                    <span className={classes.value}>{`${value.toFixed(2)}%`}</span>
        
                    <span className={classes.detail}>Based on likes</span>
                  </div>
              </div>
            ) }
        </ChangingProgress>
      </div>
    )

  }

}

export default SRate