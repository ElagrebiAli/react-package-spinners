// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import style from './style.css';

export default () => {
  return (
    <>
      <style>{style}</style>
      <div className="lds-spinner">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </>
  );
};
