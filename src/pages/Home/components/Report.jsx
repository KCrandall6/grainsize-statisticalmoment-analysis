import React from 'react';


const Report = () => {

  return(
    <div class='parent' className='d-grid p-2 border'>
      <div class='name' className='text-center'>
        <p>Sample Name</p>
      </div>
      <div class='distributions'>weight and cumul %</div>
      <div class='moments'>Statistical Moment</div>
      <div class='graphs'>Distribution and Cumulative</div>
    </div>
  )
};

export default Report;