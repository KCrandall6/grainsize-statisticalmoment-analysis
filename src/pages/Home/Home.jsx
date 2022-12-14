import React, { useState } from 'react';

import DataEntry from './components/DataEntry';
import Report from './components/Report';

function Home() {

  const [phiData, setPhiData] = useState({
    '-2.5': 0,
    '-2.0': 0,
    '-1.5': 0,
    '-1.0': 0,
    '-0.5': 0,
    '0.0': 0,
    '0.5': 0,
    '1.0': 0,
    '1.5': 0,
    '2.0': 0,
    '2.5': 0,
    '3.0': 0,
    '3.5': 0,
    '4.0': 0,
    'pan': 0,
  });
  const[calculationsData, setCalculationsData] = useState({
    'sampleName': 'Sample Name',
    'totalWeight': 0,
    'weightInputsArr': [],
    'weightPercentArr': [],
    'cumulativePercentArr': []
  })

  console.log('calculations data: ', calculationsData)


  const phiSizes = [-2.5, -2.0, -1.5, -1, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0];

  let totalWeight = 0;
  let weightInputsArr = [];
  let weightPercentArr = [];
  let cumulativePercentArr = [];

  const setWeightToArr = () => {
    const arr = Object.values(phiData);
    if (weightInputsArr.length > 0) weightInputsArr = [];
    arr.forEach((el) => {
      if (!isNaN(Number(el))) {
        weightInputsArr.push(Number(el));
      }
    })
  };

  const calcTotalWeight = () => {
    totalWeight = Number(weightInputsArr.reduce((a, b) => a + b, 0).toFixed(2));
  }

  const calcWeightPercent = () => {
    if (weightPercentArr.length > 0) weightPercentArr = [];
    weightInputsArr.forEach((el) => {
      weightPercentArr.push(Number((el/totalWeight*100).toFixed(2)));
    })
  };

  const calcCumulPercent = () => {
    if (cumulativePercentArr.length > 0) cumulativePercentArr = [];
    for (let i = 0; i < weightPercentArr.length; i++) {
      if (i === 0) {
        cumulativePercentArr.push(weightPercentArr[i]);
      } else {
        cumulativePercentArr.push(Number((weightPercentArr[i] + cumulativePercentArr[i - 1]).toFixed(2)));
      }
    };
  };

  const dataSubmit = () => {
    console.log('data is: ', phiData);
    setWeightToArr();
    calcTotalWeight();
    calcWeightPercent();
    calcCumulPercent();

    setCalculationsData({...calculationsData, 'totalWeight': totalWeight, 'weightInputsArr': weightInputsArr, 'weightPercentArr': weightPercentArr, 'cumulativePercentArr': cumulativePercentArr})
  }

  return(
    <div className='p-5'>
      <p>This is home</p>
      <div className='d-flex justify-content-start'>
      <DataEntry phiData={phiData} phiSizes={phiSizes} setPhiData={setPhiData} calculationsData={calculationsData} setCalculationsData={setCalculationsData} dataSubmit={dataSubmit}/>
      <Report calculationsData={calculationsData}/>
      </div>
    </div>
  )
}

export default Home;