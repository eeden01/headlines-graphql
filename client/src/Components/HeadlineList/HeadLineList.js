import React from 'react';
import './style.css';
import HeadLineItem from '../HeadLineItem/HeadLineItem';


function HeadLineList ({ headlines }) {

  return (
    <div className="HeadLineList">
      <div className='flag' id="flagSpain"></div>
      <div className="wrapper">
        {headlines.map(headline => {
          if (headline.locale === 'Spain')
            return <HeadLineItem key={headline.url} headline={headline} />
        })}
      </div>
      <div className='flag' id="flagUK"></div>
      <div className="wrapper">
        {headlines.map(headline => {
          if (headline.locale === 'UK')
            return <HeadLineItem key={headline.url} headline={headline} />
        })}
      </div>
    </div>
  );
}

export default HeadLineList;
