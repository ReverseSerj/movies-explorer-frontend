import React from 'react';
import './MainHeader.css';

export default function MainHeader(props) {
  return(
    <div className='main__header'>
      <h2 className='main__header-title'>{props.text}</h2>
    </div>
  )
}