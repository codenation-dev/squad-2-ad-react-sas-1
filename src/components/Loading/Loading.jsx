
import React from 'react';
import './Loading.scss';

const Loading = () => {
  return (
    <React.Fragment>
      <div aria-busy="true" aria-label="Loading" role="progressbar" className="loading__container">
      <div className="swing">
      <div className="swing-l"></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div className="swing-r"></div>
      </div></div>
    </React.Fragment>
  )
}


export default Loading;