import React from 'react';

import classes from './Visits.module.scss';
import Countries from './countries/Countries';
import Cards from './cards/Cards';
import SRate from './satisfaction-rate/SRate';

function Visits() {
  return (
    <div className={`card ${classes.visits}`}>
      <div style={{ marginBottom: '15px' }}>
        <Countries />
      </div>

      <hr className='hr-1' />

      <div style={{ marginTop: '25px', marginBottom: '20px' }}>
        <Cards />
      </div>

      <hr className='hr-1' />

      <div style={{ marginTop: '25px' }}>
        <SRate />
      </div>
    </div>
  )
}

export default Visits