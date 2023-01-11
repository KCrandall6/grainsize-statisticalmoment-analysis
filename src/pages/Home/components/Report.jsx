import React from 'react';
import Button from 'react-bootstrap/Button';
import WeightAndCumul from './WeightAndCumul';
import DistributionGraphs from './DistributionGraphs';
import StatisticalMoments from './StatisticalMoments';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


const Report = ({calculationsData}) => {


  const downloadPDF = () => {
    // const scaleFactor = 0.75;
    // html2canvas(document.querySelector("#div-to-download"), {
    //   width: document.querySelector("#div-to-download").offsetWidth * scaleFactor,
    //   height: document.querySelector("#div-to-download").offsetHeight * scaleFactor
    // }).then(canvas => {
    //   const pdf = new jsPDF();
    //   var context = canvas.getContext('2d');
    //   context.scale(scaleFactor, scaleFactor);
    //   pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0);
    // const scale = 0.25;
    // const div = document.querySelector("#div-to-download");
    // const canvas = document.createElement('canvas');
    // canvas.width = div.offsetWidth*scale;
    // canvas.height = div.offsetHeight*scale;
    // const pdf = new jsPDF();
    // html2canvas(div,{
    //     canvas: canvas,
    //     useCORS: true
    // }).then(function(canvas) {
    //     pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, canvas.width*scale, canvas.height*scale);
    // const scale = 0.85;
    const div = document.querySelector("#div-to-download");
    const pdf = new jsPDF('p', 'in', 'letter');
    html2canvas(div).then(canvas => {
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0);
      pdf.save(`${calculationsData.sampleName}.pdf`);
    });
  }


  return(
    <div>
      <div id="div-to-download" className='d-flex w-auto flex-column p-1 border' style={{ maxWidth: '8.5in', maxHeight: '11in'}}>
        <div id='name' className='text-center'>
          <h1>{calculationsData.sampleName}</h1>
        </div>
        <div id='data-holder' className='d-flex flex-row p-2'>
          <div id='distributions' className='p-2'>
            <WeightAndCumul calculationsData={calculationsData}/>
          </div>
          <div id='moments-and-graphs' className='d-flex flex-column p-2 '>
            <div id='moments' className='p-2 '>
              <StatisticalMoments calculationsData={calculationsData}/>
            </div>
            <div id='graphs' className='p-2 '>
              <DistributionGraphs calculationsData={calculationsData}/>
            </div>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center p-4'>
        <Button className='m-2' onClick={() => downloadPDF()}>Download PDF</Button>
        <Button className='m-2' onClick={() => console.log('data')}>Download Excel</Button>
      </div>
    </div>
  )
};

export default Report;