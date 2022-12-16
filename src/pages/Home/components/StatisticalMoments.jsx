import React from 'react';
import Table from 'react-bootstrap/Table';


const StatisticalMoments = ({calculationsData}) => {

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