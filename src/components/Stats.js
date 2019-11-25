import React from "react";
import { Bar } from "react-chartjs-2";
import NavbarComponent from "./Navbar";

const Stats = ({ scholarsData }) => {
  let rowsArray = [];
  for (let i = 0; i < 15; i++) {
    rowsArray.push(
      scholarsData[i] ? Object.values(scholarsData[i])[0].length : 0
    );
  }
  const data = {
    labels: [
      "2nd/8th Century",
      "3rd/9th Century",
      "4th/10th Century",
      "5th/11th Century",
      "6th/12th Century",
      "7th/13th Century",
      "8th/14th Century",
      "9th/15th Century",
      "10th/16th Century",
      "11th/17th Century",
      "12th/18th Century",
      "13th/19th Century",
      "14th/20th Century",
      "15th/21st Century"
    ],
    datasets: [
      {
        label: "Number of Scholars",
        data: rowsArray,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <>
      <NavbarComponent />
      <div className="row">
        <div className="col-1 yAxisText">Number of scholars &uarr;</div>
        <div className="col-11">
          <div style={{ margin: "40px 40px" }}>
            <Bar
              data={data}
              width={100}
              height={400}
              options={{ maintainAspectRatio: false }}
            />
          </div>
        </div>
      </div>
      <div className="text-center">
        <p>Period &rarr;</p>
      </div>
    </>
  );
};

export default Stats;
