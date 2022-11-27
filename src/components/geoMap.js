import React from "react";
import Chart from "react-google-charts";

const data = [
    ["Country", "Popularity"],
    ["Germany", 200],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["RU", 700]
  ];
  export default class geoMap extends React.Component {
    render() {
      return (
        <div className="geoMap">
          <Chart chartType="GeoChart" width="100%" height="400px" data={data} />
        </div>
      );
    }
  }