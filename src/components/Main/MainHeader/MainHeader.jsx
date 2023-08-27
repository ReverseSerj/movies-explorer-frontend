import React from 'react';
import './MainHeader.css';

export default function MainHeader(props) {
  return(
    <div className='main__header-container'>
      <h2 className='main__header'>{props.text}</h2>
    </div>
  )
}