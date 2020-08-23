import React, { useState, useEffect, useRef } from "react";
import { countriesSelector } from "./countrystoreSlice";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import { getAverage } from "../../utils";
import "chartjs-plugin-annotation";

const Chart = () => {
  const { chartCountries } = useSelector(countriesSelector);
  const [chartData, setChartData] = useState({});
  const [average, setAverage] = useState(0);
  const [scroll, setScroll] = useState(false);
  const chartsEndRef = useRef(null);

  const chart = (labels, data) => {
    setChartData({
      labels: labels,
      datasets: [
        {
          label: "Population",
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)",
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
          ],
          data: data,
          borderColor: "grey",
          borderWidth: 1,
        },
      ],
    });
    if (chartsEndRef && chartsEndRef.current) {
      setScroll(false);
      window.scrollTo({
        behavior: "smooth",
        top: chartsEndRef.current.offsetTop,
      });
    }
  };

  useEffect(() => {
    if (chartCountries.length === 0) setScroll(true);
    const labels = [];
    const data = [];
    chartCountries.forEach((country) => {
      labels.push(country.name);
      data.push(country.population);
    });
    const average = getAverage(data);
    setAverage(average);
    chart(labels, data);
  }, [chartCountries]);

  if (chartCountries.length === 0) return null;
  return (
    <div className="row">
      <div
        ref={scroll ? chartsEndRef : null}
        style={{ width: "100%" }}
        className="col-xs-12"
      >
        <hr />
        <Bar
          data={chartData}
          options={{
            responsive: true,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    steps: 1000,
                    stepValue: 100000,
                    min: 0,
                  },
                },
              ],
            },
            tooltips: {
              cornerRadius: 0,
              caretSize: 0,
              xPadding: 16,
              yPadding: 10,
              backgroundColor: "rgba(0, 150, 100, 0.9)",
              titleFontStyle: "normal",
              titleMarginBottom: 15,
            },

            annotation: {
              annotations: [
                {
                  type: "line",
                  mode: "horizontal",
                  scaleID: "y-axis-0",
                  value: average,
                  borderColor: "tomato",
                  borderWidth: 2,
                  label: {
                    backgroundColor: "red",
                    content: "Average",
                    enabled: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};

export default Chart;
