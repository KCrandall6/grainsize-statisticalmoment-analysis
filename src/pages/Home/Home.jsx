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
    'cumulativePercentArr': [],
    'phiSizes': [-2.5, -2.0, -1.5, -1, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 'pan'],
    'placement': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  })


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

  const [moments, setMoments] = useState({
    'mean' : '-',
    'meanDes' : '-',
    'stdDev' : '-',
    'stdDevDes' : '-',
    'skewness' : '-',
    'skewnessDes' : '-',
    'kurtosis' : '-',
    'kurtosisDes' : '-'
  })

  // let percentiles = {
  //   '5': null,
  //   '16': null,
  //   '25': null,
  //   '50': null,
  //   '75': null,
  //   '84': null,
  //   '95': null
  // };

  const [percentiles, setPercentiles] = useState({
    '5': null,
    '16': null,
    '25': null,
    '50': null,
    '75': null,
    '84': null,
    '95': null
  })


  const percentileCalc = (data, percentile) => {
    let front = [];
    let back = [];
    let slope;
    // calculate the x and y coordinates in front and back of percentile
    for (let i = 0; i < data.length - 1; i++) {
      if (percentile > data[i] && percentile < data[i + 1]) {
        front = [calculationsData.phiSizes[i + 1], data[i + 1]];
        back = [calculationsData.phiSizes[i], data[i]]
      }
    }
    // calculate the slope of a line between the two points
    slope = ((front[1] - back[1]) / (front[0] - back[0]))
    // return the calculated x value when y = percentile; point-slope form linear equation
    return (((percentile - back[1]) / (slope)) + back[0]).toFixed(2)
  }


  const calcMoments = () => {
    let p = {
      '5': null,
      '16': null,
      '25': null,
      '50': null,
      '75': null,
      '84': null,
      '95': null
    };
    Object.keys(p).forEach((el) => {
      p[el] = Number(percentileCalc(calculationsData.cumulativePercentArr, el))
    })
    setPercentiles({p})
    console.log('percentiles', percentiles)
    setMoments({
      ...moments, 
      mean : ((percentiles[16] + percentiles[50] + percentiles[84]) / 3).toFixed(2),
      stdDev : (((percentiles[84] - percentiles[16]) / 4) + ((percentiles[95] - percentiles[5]) / 6.6)).toFixed(2),
      skewness : (((percentiles[16] + percentiles[84] - (2 * percentiles[50])) / (2 * (percentiles[84] - percentiles[16]))) + (((percentiles[5] + percentiles[95]) - (2 * (percentiles[50]))) / (2 * (percentiles[95] - percentiles[5])))).toFixed(2),
      kurtosis : ((percentiles[95] - percentiles[5]) / (2.44 * (percentiles[75] - percentiles[25]))).toFixed(2)
    })
    console.log('moments in calcMoments', moments)
  }

  const determineDes = (num, moment) => {
    if (moment === 'mean') {
        if (num < -12) return 'Larger than Boulder';
        else if (num >= -12 && num < -8) return 'Boulder';
        else if (num >= -8 && num < -6) return 'Cobble';
        else if (num >= -6 && num < -2) return 'Pebble';
        else if (num >= -2 && num < -1) return 'Granule';
        else if (num >= -1 && num < 0) return 'Very Coarse Sand';
        else if (num >= 0 && num < 1) return 'Coarse Sand';
        else if (num >= 1 && num < 2) return 'Medium Sand';
        else if (num >= 2 && num < 3) return 'Fine Sand';
        else if (num >= 3 && num < 4) return 'Very Fine Sand';
        else if (num >= 4 && num < 5) return 'Coarse Silt';
        else if (num >= 5 && num < 6) return 'Medium Silt';
        else if (num >= 6 && num < 7) return 'Fine Silt';
        else if (num >= 7 && num < 8) return 'Very Fine Silt';
        else if (num >= 8) return 'Clay';
    } else if (moment === 'stdDev') {
        if (num < 0.35) return 'Very Well Sorted';
        else if (num >= 0.35 && num < 0.5) return 'Well Sorted';
        else if (num >= 0.5 && num < 0.7) return 'Moderately Well Sorted';
        else if (num >= 0.7 && num < 1) return 'Moderately Sorted';
        else if (num >= 1 && num < 2) return 'Poorly Sorted';
        else if (num >= 2 && num < 4) return 'Very Poorly Sorted';
        else if (num >= 4) return 'Extremely Poorly Sorted';
    } else if (moment === 'skewness') {
        if (num > 0.3) return 'Very Fine Skewed';
        else if (num > 0.1 && num <= 0.3) return 'Fine Skewed';
        else if (num > -0.1 && num <= 0.1) return 'Symmetrical';
        else if (num > -0.3 && num <= -0.1) return 'Coarse Skewed';
        else if (num <= -0.3) return 'Very Coarse Skewed';
    } else if (moment === 'kurtosis') {
        if (num < 0.67) return 'Very Platykurtic';
        else if (num >= 0.67 && num < 0.9) return 'Platykurtic';
        else if (num >= 0.9 && num < 1.11) return 'Mesokurtic';
        else if (num >= 1.11 && num < 1.5) return 'Leptokurtic';
        else if (num >= 1.5 && num < 3) return 'Very Leptokurtic';
        else if (num >= 3) return 'Extremely Leptokurtic'
    }
  }

  const calcDescriptions = () => {
    if (!isNaN(Number(moments.mean))) {
      console.log('success')
      setMoments({
        ...moments,
        meanDes : determineDes(moments.mean, 'mean'),
        stdDevDes : determineDes(moments.stdDev, 'stdDev'),
        skewnessDes : determineDes(moments.skewness, 'skewness'),
        kurtosisDes : determineDes(moments.kurtosis, 'kurtosis')
      })
    }
  }

  // console.log('test', calcMoments(), calcDescriptions())

  const dataSubmit = () => {
    setWeightToArr();
    calcTotalWeight();
    calcWeightPercent();
    calcCumulPercent();

    setCalculationsData({...calculationsData, 'totalWeight': totalWeight, 'weightInputsArr': weightInputsArr, 'weightPercentArr': weightPercentArr, 'cumulativePercentArr': cumulativePercentArr})

    calcMoments();
    calcDescriptions();
  }

  console.log('console.log outside', moments)


  return(
    <div className='d-flex justify-content-center p-5'>
      <div className='d-flex justify-content-start'>
      <DataEntry phiData={phiData} phiSizes={phiSizes} setPhiData={setPhiData} calculationsData={calculationsData} setCalculationsData={setCalculationsData} dataSubmit={dataSubmit}/>
      <Report calculationsData={calculationsData} moments={moments}/>
      </div>
    </div>
  )
}

export default Home;