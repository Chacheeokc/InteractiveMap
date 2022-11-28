import Chart from "react-google-charts";
import React, { Component } from "react"

const data = [
    ["Country", "Visited"],
    ["Germany", 200],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["RU", 700]
  ];
  export default class GeoMap extends Component {
   /* constructor(props) {
      super(props)
    }*/
    render() {
      return (
        <div className="GeoMap">
          <Chart chartType="GeoChart" width="100%" height="400px" data={data} />
        </div>
      );
    }
  }