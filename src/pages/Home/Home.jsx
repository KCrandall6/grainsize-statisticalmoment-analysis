import React from 'react';

import DataEntry from './components/DataEntry';
import Report from './components/Report';

function Home() {

  // const [dataEntered, setDataEntered] = useState(false);

  return(
    <div className='p-5'>
      <p>This is home</p>
      <div className='d-flex justify-content-start'>
      <DataEntry />
      <Report />
      </div>
    </div>
  )
}

export default Home;