import React from 'react';
import Button from 'react-bootstrap/Button';
import WeightAndCumul from './WeightAndCumul';
import DistributionGraphs from './DistributionGraphs';
import StatisticalMoments from './StatisticalMoments';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Excel from 'exceljs';
import FileSaver from 'file-saver';



const Report = ({calculationsData}) => {


  const downloadPDF = () => {
    const div = document.querySelector("#div-to-download");
    const pdf = new jsPDF('p', 'in', 'letter');
    html2canvas(div, {scale: 1}).then(canvas => {
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0);
      pdf.save(`${calculationsData.sampleName}.pdf`);
    });
  };

  const downloadXLSX = () => {
    const tableTitle = [[`${calculationsData.sampleName}`]]
    const table1Data = [['Phi Sizes'], calculationsData.phiSizes];
    const table2Data = [['Weight Inputs'], calculationsData.weightInputsArr];
    const table3Data = [['Weight Percent'], calculationsData.weightPercentArr];
    const table4Data = [['Cumulative Percent'], calculationsData.cumulativePercentArr];

    const workbook = new Excel.Workbook();
    const sheet = workbook.addWorksheet("Data");
    sheet.addRows(tableTitle);
    sheet.addRows(table1Data);
    sheet.addRows(table2Data);
    sheet.addRows(table3Data);
    sheet.addRows(table4Data);
    workbook.xlsx.writeBuffer().then((data) => {
        let blob = new Blob([data], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
        FileSaver.saveAs(blob, `${calculationsData.sampleName}.xlsx`);
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
        <Button className='m-2' onClick={() => downloadXLSX()}>Download Excel</Button>
      </div>
    </div>
  )
};

export default Report;