import React from 'react';
import Table from 'react-bootstrap/Table';

const WeightAndCumul = ({calculationsData}) => {


  return (
    <div className='text-center'>
      <p>Total Sample Weight: {calculationsData.totalWeight}</p>
      <div className='d-flex flex-row '>
        <div className='p-2 m-1 border'>
          <p>Weight and Cumulative % Calculations</p>
          <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ϕ Size</th>
              <th>Weight %</th>
              <th>Cumulative %</th>
            </tr>
          </thead>
          <tbody>
            {calculationsData.placement.map((el) => (
              <tr  key={el}>
                <td>{isNaN(Number(calculationsData.phiSizes[el])) ? calculationsData.phiSizes[el] : Number(calculationsData.phiSizes[el]).toFixed(1)}</td>
                <td>{isNaN(Number(calculationsData.weightPercentArr[el])) ? '-' : Number(calculationsData.weightPercentArr[el]).toFixed(1)}</td>
                <td>{isNaN(Number(calculationsData.cumulativePercentArr[el])) ? '-' : Number(calculationsData.cumulativePercentArr[el]).toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        </div>
      </div>
    </div>
  )
}

export default WeightAndCumul;