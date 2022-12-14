import React from 'react';
import Button from 'react-bootstrap/Button';
import WeightAndCumul from './WeightAndCumul';


const Report = ({calculationsData}) => {

// console.log('in the report', calculationsData)

  return(
    <div>

    <div id='parent' className='d-flex flex-column p-2 border'>
      <div id='name' className='text-center'>
        <p>{calculationsData.sampleName}</p>
      </div>
      <div id='data-holder' className='d-flex flex-row p-2 border'>
        <div id='distributions' className='p-2 border'>
          <p>weight and cumul %</p>
          {calculationsData.totalWeight}
          <WeightAndCumul/>
        </div>
        <div id='moments-and-graphs' className='d-flex flex-column p-2 border'>
          <div id='moments' className='p-2 border'>
            <p>Statistical Moment</p>
          </div>
          <div id='graphs' className='p-2 border'>
            <p>Distribution and Cumulative</p>
          </div>
        </div>
      </div>
    </div>
    <Button className='m-2' onClick={() => console.log('data')}>Download PDF</Button>
    <Button className='m-2' onClick={() => console.log('data')}>Download Excel</Button>
    </div>
  )
};

export default Report;