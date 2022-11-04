import React from 'react';
import { Line } from 'react-chartjs-2';
import {Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip  } from 'chart.js'; 

import classes from './WorkSummary.module.scss';
import { SUMMARY } from '../../assets/data';
import ArrowUp from '../../assets/svg/arrow_up.svg';
import ArrowUpChart from '../../assets/svg/arrow_up_chart.svg';
import ArrowDownChart from '../../assets/svg/arrow_down_chart.svg';


function WorkSummary() {
  Chart.register(CategoryScale, LineController, LineElement, PointElement, LinearScale, Title, Tooltip);

  const getOrCreateTooltip = (chart) => {
    let tooltipEl = chart.canvas.parentNode.querySelector('div');
  
    if (!tooltipEl) {
      tooltipEl = document.createElement('div');
      tooltipEl.style.background = 'rgba(60, 66, 84, 0.5)';
      tooltipEl.style.border = '1px solid #3C4254';
      tooltipEl.style.backdropFilter = 'blur(7px)';
      tooltipEl.style.borderRadius = '8px';
      tooltipEl.style.color = 'white';
      tooltipEl.style.opacity = 1;
      tooltipEl.style.pointerEvents = 'none';
      tooltipEl.style.position = 'absolute';
      tooltipEl.style.transform = 'translate(-50%, 0)';
      tooltipEl.style.transition = 'all .3s ease';
  
      const table = document.createElement('table');
      table.style.margin = '0px';
  
      tooltipEl.appendChild(table);
      chart.canvas.parentNode.appendChild(tooltipEl);
    }
  
    return tooltipEl;
  };
  
  const externalTooltipHandler = (context) => {
    // Tooltip Element
    const {chart, tooltip} = context;
    const tooltipEl = getOrCreateTooltip(chart);
  
    // Hide if no tooltip
    if (tooltip.opacity === 0) {
      tooltipEl.style.opacity = 0;
      return;
    }
  
    // Set Text
    if (tooltip.body) {
      const titleLines = tooltip.title || [];
      const bodyLines = tooltip.body.map(b => b.lines);
  
      const tableHead = document.createElement('thead');
  
      titleLines.forEach(title => {
        const tr = document.createElement('tr');
        tr.style.borderWidth = 0;
  
        const th = document.createElement('th');
        th.style.borderWidth = 0;
        // const text = document.createTextNode(title);
  
        // th.appendChild(text);
        tr.appendChild(th);
        tableHead.appendChild(tr);
      });
  
      const tableBody = document.createElement('tbody');
      bodyLines.forEach((body, i) => {
        const colors = tooltip.labelColors[i];
  
        const span = document.createElement('span');
        span.style.background = colors.backgroundColor;
        span.style.borderColor = colors.borderColor;
        span.style.borderWidth = '2px';
        span.style.borderRadius = '50%';
        span.style.marginRight = '10px';
        span.style.height = '10px';
        span.style.width = '10px';
        span.style.display = 'inline-block';
  
        const tr = document.createElement('tr');
        tr.style.backgroundColor = 'inherit';
        tr.style.borderWidth = 0;
  
        const td = document.createElement('td');
        td.style.display = 'flex';
        td.style.alignItems = 'center';
        td.style.borderWidth = 0;
        td.style.padding = '15px 0';
  
        const t = String(body).split(':');
        const t1 = t[0].trim();
        const t2 = t[1].trim();

        const text = document.createElement('div');

        const s1 = document.createElement('span');
        s1.style.fontSize = '16px';
        s1.style.fontWeight = '400';
        s1.style.marginRight = '10px';
        s1.innerText = t1;

        const s2 = document.createElement('span');
        s2.style.fontSize = '14px';
        s2.style.fontWeight = '500';
        if(i === 0) {
          s2.style.color = '#11CABE';
        }
        if(i === 1) {
          s2.style.color = '#FA2256';
        }
        s2.style.letterSpacing = '1px';
        s2.innerText = t2 + '%';

        const img = document.createElement('img');
        img.style.marginRight = '10px';
        if(i === 0) {
          img.src = ArrowUpChart;
          img.alt = 'arrow up chart';
        }
        if(i === 1) {
          img.src = ArrowDownChart;
          img.alt = 'arrow down chart';
        }

        text.appendChild(s1);
        text.appendChild(img);
        text.appendChild(s2);

        // console.log(text)
  
        td.appendChild(span);
        td.appendChild(text);
        tr.appendChild(td);
        tableBody.appendChild(tr);
      });
  
      const tableRoot = tooltipEl.querySelector('table');
  
      // Remove old children
      while (tableRoot.firstChild) {
        tableRoot.firstChild.remove();
      }
  
      // Add new children
      tableRoot.appendChild(tableHead);
      tableRoot.appendChild(tableBody);
    }
  
    const {offsetLeft: positionX, offsetTop: positionY} = chart.canvas;
  
    // Display, position, and set styles for font
    tooltipEl.style.opacity = 1;
    tooltipEl.style.left = positionX + tooltip.caretX + 'px';
    tooltipEl.style.top = positionY + tooltip.caretY + 'px';
    tooltipEl.style.font = tooltip.options.bodyFont.string;
    tooltipEl.style.padding = '0 16px';
  };

  const options = {
    responsive: true,
    redraw: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false,
        position: 'nearest',
        external: externalTooltipHandler,
      }
    },
    scales: {
      x: {
        grid: {
            display:false,
            drawBorder: false,
        },
        ticks: {
          display: false,
        }
      },
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        grid: {
          display: true,
          drawBorder: false,
          offset: true,
          drawTicks: true,
          borderDash: [5, 5],
          color: "#282C38"
        },
      },
      y1: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
        hitRadius: 10,
      }
    }
  };

  return (
    <div className={`card ${classes.work_summary}`}>
      <div className={classes.div_1}>
        <div className={classes.div_1_1}>
          <h6>Your work summary</h6>
          <span>Nov - July</span>
        </div>

        <div className={classes.div_1_2}>
          <div style={{ marginRight: '20px' }}>
            <span className={classes.span_1} style={{ backgroundColor: '#246CF9' }}>&nbsp;</span>
            <span className={classes.span_2}>Last Month</span>
          </div>

          <div>
            <span className={classes.span_1} style={{ backgroundColor: '#FA2256' }}>&nbsp;</span>
            <span className={classes.span_2}>This Month</span>
          </div>
        </div>

        <div className={classes.div_1_3}>
          <button style={{ backgroundColor: '#246CF9', borderRight: 0, color: '#ffffff', borderRadius: '5px 0 0 5px' }}>Daily</button>
          <button style={{ borderLeft: 0, borderRadius: '0 5px 5px 0' }}>Monthly</button>
        </div>
      </div>

      <div className={classes.div_1_2_small}>
        <div style={{ marginRight: '20px' }}>
          <span className={classes.span_1} style={{ backgroundColor: '#246CF9' }}>&nbsp;</span>
          <span className={classes.span_2}>Last Month</span>
        </div>

        <div>
          <span className={classes.span_1} style={{ backgroundColor: '#FA2256' }}>&nbsp;</span>
          <span className={classes.span_2}>This Month</span>
        </div>
      </div>

      <div className={classes.div_2}>
        <Line 
          options={options} data={SUMMARY} />
      </div>

      <div className={classes.div_3}>
        <span className={classes.span_1}>9845</span>

        <span className={classes.span_2}>
          <img src={ArrowUp} alt='arrow up' />
          829
        </span>

        <span className={classes.span_3}>
          Sign-Ups past 30 days
        </span>
      </div>
    </div>
  )
}

export default WorkSummary