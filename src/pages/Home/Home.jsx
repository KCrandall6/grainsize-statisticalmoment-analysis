import React, { useState } from 'react';

import DataEntry from './components/DataEntry';
import Report from './components/Report';

function Home() {

  const [phiData, setPhiData] = useState({
    "sample name": '',
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

  const dataSubmit = () => {
    console.log('data is: ', phiData);
  }

  return(
    <div className='p-5'>
      <p>This is home</p>
      <div className='d-flex justify-content-start'>
      <DataEntry phiData={phiData} setPhiData={setPhiData} dataSubmit={dataSubmit}/>
      <Report phiData={phiData}/>
      </div>
    </div>
  )
}

export default Home;