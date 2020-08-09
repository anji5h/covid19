import React from "react";

export default function Infobox({ data }) {
  return (
    <>
      <div className="column">
        <div className="ui blue segment">
          <h4>Total Cases</h4>
          <h2>{data.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
          <span>+ {data.todayCases}</span>
        </div>
      </div>
      <div className="column">
        <div className="ui green segment">
          <h4>Recovered</h4>
          <h2>{data.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
          <span>+ {data.todayRecovered}</span>
        </div>
      </div>
      <div className="column">
        <div className="ui red segment">
          <h4>Deaths</h4>
          <h2>{data.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
          <span>+ {data.todayDeaths}</span>
        </div>
      </div>
      <div className="column">
        <div className="ui orange segment">
          <h4>Active Cases</h4>
          <h2>{data.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
          <span>+ {data.todayCases - data.todayRecovered}</span>
        </div>
      </div>
    </>
  );
}
