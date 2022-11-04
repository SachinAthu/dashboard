import React, { Component } from 'react';

import classes from './Team.module.scss';
import Folder2 from '../../assets/svg/folder_2.svg';
import ArrowDown from '../../assets/svg/arrow_down.svg';
import ArrowLeft2 from '../../assets/svg/arrow_left_2.svg';
import { TEAM } from '../../assets/data';
import { getValueText } from '../../core/common';
import ChangingProgress from '../ChangingProgress';

// profile pictures
import silvestor from '../../assets/img/silvestor.png';
import amanda from '../../assets/img/amanda.png';
import adam from '../../assets/img/adam.png';
import isabella from '../../assets/img/isabella.png';
import robby from '../../assets/img/robby.png';

class TeamPercentage extends Component {
  render() {
    return (
      <ChangingProgress
      percentage={this.props.percentage} >
        { value => (
            <div className={classes.team_percentage}>
              <div className={classes.wrapper}>
                <div id='team-progress-bar' 
                  className={classes.progress} 
                  style={{ backgroundColor: this.props.color, width: `${value}%` }}>
                </div>
        
              </div>
              
              <span 
                className={classes.value_text} 
                style={{ color: this.props.color }}>
                  { `${getValueText(value, this.props.percentage)}%` }
              </span>
            </div>
          )
        }
      </ChangingProgress>
    );
  }
}

function Team() {
  const profilePics = {
    silvestor,
    amanda,
    adam,
    isabella,
    robby,
  };

  return (
    <div className={`card ${classes.team}`} style={{ padding: 0 }}>
      <div className={classes.div_1}>
        <h4>Team</h4>

        <img className={classes.div_1_1} src={Folder2} alt='folder 2' />

        <span className={classes.div_1_2}>Sales New York</span>

        <span className={classes.div_1_3}>
          <img src={ArrowDown} alt='arrow down' style={{ marginLeft: '3px' }} />
        </span>

        <span className='dashboard_gray_btn' style={{ padding: '3px 8px', marginLeft: 'auto' }}>
          Show More
          <img src={ArrowLeft2} alt='arrow left 2' style={{ marginLeft: '5px' }} />
        </span>
      </div>

      <hr className='hr-1' />

      <div className={classes.div_2}>
        <ul>
          { TEAM.map((t, i) => (
            <li key={i}>
              <div className={classes.div_2_li_1}>
                <img src={profilePics[t.profilePic]} alt={t.name} />
                <span>{ t.name }</span>
              </div>

              <div className={classes.div_2_li_2}>
                <TeamPercentage percentage={t.percentage} color={t.color} />
              </div>

              <div className={classes.div_2_li_3}>
                <span>{ t.amount }</span>
              </div>
            </li>
          )) }
        </ul>
      </div>
    </div>
  )
}

export default Team