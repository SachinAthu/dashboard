import React from 'react';

import WorkSummary from '../../components/work-summary/WorkSummary';
import Visits from '../../components/visits/Visits';
import Exchanges from '../../components/exchanges/Exchanges';
import Team from '../../components/team/Team';

import classes from './Dashboard.module.scss';

function Dashboard() {
  return (
    <div className={classes.dashboard}>
      <div className={classes.left}>
        <div className={classes.summary}>
          <WorkSummary />
        </div>

        <div className={classes.left_div_1}>
          <div className={classes.exchanges}>
            <Exchanges />
          </div>

          <div className={classes.team}>
            <Team />
          </div>
        </div>
      </div>

      <div className={classes.right}>
        <div className={classes.visits}>
          <Visits />
        </div>
      </div>
    </div>
  )
}

export default Dashboard