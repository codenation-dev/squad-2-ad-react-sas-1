
import React from 'react';
import './Loading.scss';

const Loading = () => {
  return (
    <React.Fragment>
      <div aria-busy="true" aria-label="Loading" role="progressbar" class="loading__container">
      <div class="swing">
      <div class="swing-l"></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div class="swing-r"></div>
      </div></div>
    </React.Fragment>
  )
}


export default Loading;