// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import style from './style.css';

export default () => {
  return (
    <>
      <style>{style.toString()}</style>
      <div className="lds-circle">
        <div />
      </div>
    </>
  );
};
