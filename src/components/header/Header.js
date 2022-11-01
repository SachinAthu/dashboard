import React from 'react';

import classes from './Header.module.scss';
import Folder from '../../assets/svg/folder.svg';
import ArrowDown from '../../assets/svg/arrow_down.svg';
import Search from '../../assets/svg/search.svg';
import Voice from '../../assets/svg/voice.svg';
import Notification from '../../assets/svg/notification.svg';
import Theme from '../../assets/svg/theme.svg';
import Star from '../../assets/svg/star.svg';

function Header() {
  return (
    <div className={`card ${classes.header}`}>
      <h2 className={classes.heading}>Dashboard</h2>

      <div className={classes.break}></div>
       
      <div className={classes.div_1}>
        <img className={classes.div_1_1} src={Folder} alt='folder' />

        <span className={classes.div_1_2}>Adam’s Team</span>

        <span className={classes.div_1_3}>
          Folder
          <img src={ArrowDown} alt='arrow down' style={{ marginLeft: '3px' }} />
        </span>
      </div>

      <div className={classes.search}>
        <img src={Search} alt='search' />

        <input type='text' placeholder='Type to search...' />
      </div>

      <div className={classes.div_2}>
        <img src={Voice} alt='voice' style={{ margin: '0 8px' }} />

        <div className={classes.break}></div>

        <img src={Notification} alt='notification' style={{ margin: '0 6px' }} />

        <img src={Theme} alt='theme' style={{ margin: '0 6px' }} />

        <div className={classes.break}></div>

        <span className='dashboard-gray-btn'>
          <img src={Star} alt='star' style={{ marginRight: '5px' }} />
          <span style={{ fontWeight: 600, fontSize: '12px', color: '#FFB545', textTransform: 'uppercase' }}>PREMIUM</span>
        </span>
      </div>
    </div>
  )
}

export default Header