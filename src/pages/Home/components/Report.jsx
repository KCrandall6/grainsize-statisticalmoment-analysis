import React from 'react';
import Button from 'react-bootstrap/Button';
import WeightAndCumul from './WeightAndCumul';
import DistributionGraphs from './DistributionGraphs';
import StatisticalMoments from './StatisticalMoments';


const Report = ({calculationsData, moments}) => {


  return(
    <div>

    <div id='parent' className='d-flex w-100 flex-column p-2 border'>
      <div id='name' className='text-center'>
        <h1>{calculationsData.sampleName}</h1>
      </div>
      <div id='data-holder' className='d-flex flex-row p-2 border'>
        <div id='distributions' className='p-2 border'>
          <WeightAndCumul calculationsData={calculationsData}/>
        </div>
        <div id='moments-and-graphs' className='d-flex flex-column p-2 border'>
          <div id='moments' className='p-2 border'>
            <StatisticalMoments moments={moments}/>
          </div>
          <div id='graphs' className='p-2 border'>
            <DistributionGraphs calculationsData={calculationsData}/>
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