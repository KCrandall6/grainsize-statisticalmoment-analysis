import React from 'react';
import { Bar, Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



const DistributionGraphs = ({calculationsData}) => {

  
  const barData = {
    labels: calculationsData.phiSizes,
    datasets: [
      {
        label: `${calculationsData.sampleName}`,
        backgroundColor: "#0069b4b3",
        borderColor: "#0069b4",
        borderWidth: 1,
        hoverBackgroundColor: "#0069b447",
        hoverBorderColor: "#0069b4",
        data: calculationsData.weightPercentArr,
        yAxisID: 'y-axis-1',
        xAxisID: 'x-axis-1'
      }
    ]
  }
  const barDataOptions = {
    responsive: true,
    scales: {
      'y-axis-1': {
        title: {
          display: true,
          text: 'Weight (%)',
          font: {
              size: 15
          }
        },
      },
      'x-axis-1': {
        title: {
          display: true,
          text: 'Particle Diameter (ϕ)',
          font: {
              size: 15
          }
        },
      }
    },
    plugins: {
      title: {
        display: true,
        text: `${calculationsData.sampleName} Distribution`,
        font: {
          size: 20
        }
      }
    }
  }

  const lineData = {
    labels: calculationsData.phiSizes,
    datasets: [
      {
        label: `${calculationsData.sampleName}`,
        backgroundColor: "#0069b4b3",
        borderColor: "#0069b4",
        borderWidth: 1,
        hoverBackgroundColor: "#0069b447",
        hoverBorderColor: "#0069b4",
        data: calculationsData.cumulativePercentArr,
        yAxisID: 'y-axis-2',
        xAxisID: 'x-axis-2'
      }
    ]
  }

  const lineDataOptions = {
    responsive: true,
    scales: {
      'y-axis-2': {
        title: {
          display: true,
          text: 'Cumulative Mass Retained (%)',
          font: {
              size: 15
          }
        }
      },
      'x-axis-2': {
        title: {
          display: true,
          text: 'Particle Diameter (ϕ)',
          font: {
              size: 15
          },
          position: 'bottom',
          align: 'center',
          rotation: 0
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: `${calculationsData.sampleName} Cumulative`,
        font: {
          size: 20
        }
      }
    }
  }
  

  return (
    <div>
        <Bar
          className='border'
          data={barData}
          height={250}
          options={barDataOptions}
          />
          <br/>
        <Line
          className='border'
          data={lineData}
          height={250}
          options={lineDataOptions}
        />
    </div>
  )
};

export default DistributionGraphs;