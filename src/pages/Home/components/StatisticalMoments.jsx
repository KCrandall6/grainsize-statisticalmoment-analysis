import React from 'react';
import Table from 'react-bootstrap/Table';

import InfoModal from './InfoModal';
import myImage from '../../../modal-photos/statisticalmoments.jpg'

const StatisticalMoments = ({calculationsData}) => {

  const statisticalMomentsInfo = {
    "title" : "Statistical Moments",
    "content" : "In order to calculate the statistical moments, the percentiles must first be calculated. Percentiles can be calculated a few different ways, but one way is based on the cumulative distribution curve (0% - 100%) where the percentile represents the particle diameter(Φ) at said percent. For this example, a simple linear interpolation between points at every phi increment was used to calculate percentiles, giving a good estimation of the where the percentile would land. Once the necessary percentiles are had, the statistical moments can then be calculated following the equations in the figure below. The statistical moments here are calculated following the Folk and Ward (1957) logarithmic graphical measures.",
    "image" : myImage
  }

  let moments = {
    'mean' : '-',
    'meanDes' : '-',
    'stdDev' : '-',
    'stdDevDes' : '-',
    'skewness' : '-',
    'skewnessDes' : '-',
    'kurtosis' : '-',
    'kurtosisDes' : '-'
  };

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
      // check to see if at the end of the array (pan) and cumulative not exactly at 100; transpose and assume next phi increment would be 100 % cumulative
      if (data[i] < 100 && i === 13) {
        front = [5, 100]
        back = [calculationsData.phiSizes[i], data[i]]
      }
      // normal scenario check and calculate coordinates
      else if (percentile >= data[i] && percentile <= data[i + 1]) {
        front = [calculationsData.phiSizes[i + 1], data[i + 1]];
        back = [calculationsData.phiSizes[i], data[i]]
      }
      // check to see if at the beginning of the array (-2.5) and past the first percents; transpose and assume previous phi would be at 0 % cumulative
      else if (percentile < data[i] && i === 0) {
        front = [calculationsData.phiSizes[i], data[i]];
        back = [-3, 0]
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
    moments.mean = ((percentiles[16] + percentiles[50] + percentiles[84]) / 3).toFixed(2);
    moments.stdDev = (((percentiles[84] - percentiles[16]) / 4) + ((percentiles[95] - percentiles[5]) / 6.6)).toFixed(2);
    moments.skewness = (((percentiles[16] + percentiles[84] - (2 * percentiles[50])) / (2 * (percentiles[84] - percentiles[16]))) + (((percentiles[5] + percentiles[95]) - (2 * (percentiles[50]))) / (2 * (percentiles[95] - percentiles[5])))).toFixed(2);
    moments.kurtosis = ((percentiles[95] - percentiles[5]) / (2.44 * (percentiles[75] - percentiles[25]))).toFixed(2);
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
      moments.meanDes = determineDes(moments.mean, 'mean');
      moments.stdDevDes = determineDes(moments.stdDev, 'stdDev');
      moments.skewnessDes = determineDes(moments.skewness, 'skewness');
      moments.kurtosisDes = determineDes(moments.kurtosis, 'kurtosis');
    }
  }

  calcMoments();
  calcDescriptions();


  return(
    <div className='text-center'>
      <h3>Statistical Moments <InfoModal data={statisticalMomentsInfo}/></h3>
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
              <td>{isNaN(Number(moments.mean)) ? '-' : moments.mean}</td>
              <td>{isNaN(Number(moments.stdDev)) ? '-' : moments.stdDev}</td>
              <td>{isNaN(Number(moments.skewness)) ? '-' : moments.skewness}</td>
              <td>{isNaN(Number(moments.kurtosis)) ? '-' : moments.kurtosis}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{moments.meanDes}</td>
              <td>{moments.stdDevDes}</td>
              <td>{moments.skewnessDes}</td>
              <td>{moments.kurtosisDes}</td>
            </tr>
          </tbody>
      </Table>
    </div>
  )
}

export default StatisticalMoments;