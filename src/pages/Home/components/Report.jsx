import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import WeightAndCumul from './WeightAndCumul';


const Report = ({phiData}) => {
  
  let totalWeight = 0;
  let newArr = [];
  
  const [weightArr, setWeightArr] = useState([]);
  const [weightPerc, setWeightPerc] = useState([]);
  const [cumulPerc, setCumulPerc] = useState([]);

  const setWeightToArr = () => {
    const arr = Object.values(phiData);
    arr.forEach((el) => {
      setWeightArr(weightArr => [...weightArr, el])
    })
  }
  console.log('weight outside', weightArr)
  const calcWeightPercent = () => {

  };
  const calcCumulPercent = () => {

  };

  // useEffect(() => {
  //   setWeightToArr();
  //   calcWeightPercent();
  //   calcCumulPercent();
  // }, [])


  return(
    <div>

    <div id='parent' className='d-flex flex-column p-2 border'>
      <div id='name' className='text-center'>
        <p>Sample Name</p>
      </div>
      <div id='data-holder' className='d-flex flex-row p-2 border'>
        <div id='distributions' className='p-2 border'>
          <p>weight and cumul %</p>
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
    <Button className='m-2' onClick={() => setWeightToArr()}>Download PDF</Button>
    <Button className='m-2' onClick={() => console.log('data')}>Download Excel</Button>
    </div>
  )
};

export default Report;