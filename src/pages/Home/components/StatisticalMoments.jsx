import React from 'react';
import Table from 'react-bootstrap/Table';


const StatisticalMoments = ({calculationsData}) => {

  let mean;
  let stdDev;
  let skewness;
  let kurtosis;
  let percentiles = {
    '5': null,
    '16': null,
    '25': null,
    '50': null,
    '75': null,
    '84': null,
    '95': null
  };

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
    Object.keys(percentiles).forEach((el) => {
      percentiles[el] = Number(percentileCalc(calculationsData.cumulativePercentArr, el))
    })
    mean = ((percentiles[16] + percentiles[50] + percentiles[84]) / 3).toFixed(2);
    stdDev = (((percentiles[84] - percentiles[16]) / 4) + ((percentiles[95] - percentiles[5]) / 6.6)).toFixed(2);
    console.log('mean shouble be 16', mean)
  }


  console.log('here', calcMoments());


  return(
    <div>
      <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th></th>
              <th>Mean</th>
              <th>Sorting</th>
              <th>Skewness</th>
              <th>Kurtosis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Logarithmic ϕ</th>
              <th>{mean}</th>
              <th>{stdDev}</th>
              <th>{skewness}</th>
              <th>{kurtosis}</th>
            </tr>
            <tr>
              <th>Description</th>
            </tr>
          </tbody>
      </Table>
    </div>
  )
}

export default StatisticalMoments;