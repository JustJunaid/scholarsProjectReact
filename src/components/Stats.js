import React from 'react'
import { Bar } from 'react-chartjs-2';
import NavbarComponent from "./Navbar";

const Stats = ({scholarsData}) => {
    let rowsArray = []
    for (let i=1; i<16; i++) {
      rowsArray.push(scholarsData[i] ? scholarsData[i].length : 0)
    }
    console.log('rowsArray', rowsArray)
    const data = {
      labels: ['1st Century', '2nd Century', '3rd Century', '4th Century', '5th Century', '6th Century', '7th Century', '8th Century', '9th Century', '10th Century', '11th Century', '12th Century', '13th Century', '14th Century', '15th Century'],
      datasets: [{
          label: '# of Scholars',
          data: rowsArray,
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  }

    return (
        <>
          <NavbarComponent/>
          <div style={{margin: '40px 40px'}}>
            <Bar
            data={data}
            width={100}
            height={400}
            options={{ maintainAspectRatio: false }}
            />
          </div>
        </>
    )
}

export default Stats