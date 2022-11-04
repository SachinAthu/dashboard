import React from "react";

import classes from './Cards.module.scss';

function Card({ cardNumber, year, month }) {
  function getCardNumber() {
    let num = String(cardNumber);

    if(!num || num.length !== 16) {
      return '';
    }

    const cardNumberEl = document.getElementById('cardNumber');
    cardNumberEl.innerText = num.substring(12);

  };

  function getDate() {
    let y = String(year);
    let m = String(month);

    if(y && y.length === 4) {
      y = y.substring(2);      
    } else {
      y = ' '
    };

    if(m) {
      if(m.length === 1) {
        m = '0' + m;
      }
    } else {
      m = ' ';
    };

    const cardDateEl = document.getElementById('cardDate');
    cardDateEl.innerText = m + '/' + y;

  }

  setTimeout(() => {
    getCardNumber();
    getDate();
  }, 100);

  return (
    <div className={classes.card}>
      <svg width="268" height="154" viewBox="0 0 268 154" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="268" height="154" rx="10" fill="#246CF9" />
        <mask id="mask0_1_561" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="268" height="154">
          <rect width="268" height="154" rx="10" fill="#246CF9" />
        </mask>
        <g mask="url(#mask0_1_561)">
          <path
            d="M33.1237 20.289L29.6587 30.4454C29.6587 30.4454 29.4596 29.5809 29.3764 29.0422C27.4032 24.6213 24.2028 23 24.2028 23L27.241 34.55H31.4137L37.1737 20.2863L33.1237 20.289ZM36.425 34.5513H40.2091L42.5 20.2877H38.6696L36.425 34.5513Z"
            fill="white"
          />
          <path
            d="M29.2018 28.1955L27.9268 21.7236C27.9268 21.7236 27.3514 20.3191 25.8555 20.3191C24.3582 20.3191 20 20.3191 20 20.3191C20 20.3191 27.4645 22.5991 29.2018 28.1955ZM47.8686 24.3732C47.8686 23.5468 48.5245 22.9305 50.4077 22.9305C51.6309 22.9305 53.0327 23.8523 53.0327 23.8523L53.645 20.6995C53.645 20.6995 51.8518 20 50.0995 20C46.1177 20 44.0627 21.9691 44.0627 24.4618C44.0627 28.9673 49.3114 28.3523 49.3114 30.6691C49.3114 31.0618 49.0045 31.9809 46.82 31.9809C44.63 31.9809 43.1859 31.1477 43.1859 31.1477L42.5314 34.1709C42.5314 34.1709 43.9332 35 46.6455 35C49.3577 35 53.1214 32.9014 53.1214 29.8823C53.12 26.2536 47.8686 25.9905 47.8686 24.3732ZM63.2109 20.2891H59.2291L53.0164 34.5527H56.7745L57.5532 32.5168H62.2905L62.6982 34.5527H66.1414L63.2109 20.2891ZM58.6045 29.7895L60.665 24.3991L61.745 29.7895H58.6045Z"
            fill="white"
          />
          <g opacity="0.1">
            <path
              d="M333.604 83.4551C356.968 138.425 390.43 122.197 404.241 107.212L243.992 325.794C215.989 292.085 159.256 193.756 156.348 70.1132C152.713 -84.4407 304.399 14.7432 333.604 83.4551Z"
              stroke="white"
            />
            <path
              d="M313.19 97.3193C331.824 141.246 358.561 128.258 369.6 116.273L241.491 291.074C219.14 264.143 173.875 185.575 171.615 86.7447C168.79 -36.7933 289.898 42.4105 313.19 97.3193Z"
              stroke="white"
            />
            <path
              d="M291.749 111.75C305.36 144.192 325.089 134.514 333.252 125.621L238.424 255.25C222.031 235.39 188.895 177.395 187.49 104.301C185.735 12.9322 274.736 71.1972 291.749 111.75Z"
              stroke="white"
            />
            <path
              d="M285.331 119.043C303.681 135.772 293.559 149.463 298.753 143.822L241.591 230.765C231.085 218.098 204.243 168.64 203.197 122.141C201.889 64.0185 247.741 84.7716 285.331 119.043Z"
              stroke="white"
            />
          </g>
          <path
            d="M234 106C232.161 106 230.341 106.362 228.642 107.066C226.944 107.769 225.401 108.8 224.101 110.101C222.8 111.401 221.769 112.944 221.066 114.642C220.362 116.341 220 118.161 220 120C220 121.839 220.362 123.659 221.066 125.358C221.769 127.056 222.8 128.599 224.101 129.899C225.401 131.2 226.944 132.231 228.642 132.934C230.341 133.638 232.161 134 234 134C235.839 134 237.659 133.638 239.358 132.934C241.056 132.231 242.599 131.2 243.899 129.899C245.2 128.599 246.231 127.056 246.934 125.358C247.638 123.659 248 121.839 248 120C248 118.161 247.638 116.341 246.934 114.642C246.231 112.944 245.2 111.401 243.899 110.101C242.599 108.8 241.056 107.769 239.358 107.066C237.659 106.362 235.839 106 234 106V106Z"
            fill="#FF9800"
          />
          <path
            d="M218 106C216.161 106 214.341 106.362 212.642 107.066C210.944 107.769 209.401 108.8 208.101 110.101C206.8 111.401 205.769 112.944 205.066 114.642C204.362 116.341 204 118.161 204 120C204 121.839 204.362 123.659 205.066 125.358C205.769 127.056 206.8 128.599 208.101 129.899C209.401 131.2 210.944 132.231 212.642 132.934C214.341 133.638 216.161 134 218 134C219.839 134 221.659 133.638 223.358 132.934C225.056 132.231 226.599 131.2 227.899 129.899C229.2 128.599 230.231 127.056 230.934 125.358C231.638 123.659 232 121.839 232 120C232 118.161 231.638 116.341 230.934 114.642C230.231 112.944 229.2 111.401 227.899 110.101C226.599 108.8 225.056 107.769 223.358 107.066C221.659 106.362 219.839 106 218 106V106Z"
            fill="#D50000"
          />
          <path d="M220 120C220 124.755 222.376 128.95 226 131.48C229.624 128.95 232 124.755 232 120C232 115.245 229.624 111.05 226 108.52C222.376 111.05 220 115.245 220 120Z" fill="#FF3D00" />
        </g>
      </svg>

      <div className={classes.number}>
        <span>
          &sdot;&sdot;&sdot;&sdot;
        </span>
        <span>
          &sdot;&sdot;&sdot;&sdot;
        </span>
        <span>
          &sdot;&sdot;&sdot;&sdot;
        </span>
        <span id="cardNumber"></span>
      </div>

      <span id="cardDate" className={classes.date}></span>
    </div>
  );
}

export default Card;
