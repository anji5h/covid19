import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getCountryData } from "../actions";
import { Link, useLocation } from "react-router-dom";
import Tableplaceholder from "./tableplaceholder";
import Searchbar from "./searchbar";

function Countryinfo({ getCountryData, country }) {
  const query = new URLSearchParams(useLocation().search);
  let [loader, setloader] = useState(true);
  const fetchData = () => {
    setloader(true);
    getCountryData().then(() => setloader(false));
  };
  const formatter = (data) => data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  useEffect(() => {
    if (query.get("q")) fetchData();
    else return;
    const interval = setInterval(() => fetchData(), 1000 * 60 * 10);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderContent = () => {
    if (loader || !country.length) return <Tableplaceholder></Tableplaceholder>;
    else {
      let result = country.filter((item) =>
        new RegExp(`^${query.get("q")}`, "i").test(item.country)
      );
      if (!loader && !result.length)
        return (
          <tr>
            <td colSpan="9" className="center aligned">
              No result found
            </td>
          </tr>
        );
      else
        return result.map((item) => (
          <tr key={item.country} className="center aligned">
            <td className="left aligned">
              <b>{item.country}</b>
            </td>
            <td>{formatter(item.cases)}</td>
            <td className="warning">{formatter(item.todayCases)}</td>
            <td className="negative">{formatter(item.deaths)}</td>
            <td className="negative">{formatter(item.todayDeaths)}</td>
            <td>{formatter(item.recovered)}</td>
            <td>{formatter(item.active)}</td>
            <td>{formatter(item.casesPerOneMillion)}</td>
            <td>{formatter(item.population)}</td>
          </tr>
        ));
    }
  };

  return (
    <div className="countrytable">
      <div className="headerbox">
        <span className="tableheader">
          Reported Cases and Deaths by Country, Territory, or Conveyance
        </span>
        <Link to="/" className="ui basic button" style={{ marginLeft: "50px" }}>
          Back to home
        </Link>
        {country.length ? <Searchbar country={country}></Searchbar> : null}
      </div>

      <table className="ui striped celled nine column table">
        <thead>
          <tr className="center aligned">
            <th className="left aligned">Country</th>
            <th>Total Cases</th>
            <th>New Cases</th>
            <th>Total Deaths</th>
            <th>New Deaths</th>
            <th>Total Recovered</th>
            <th>Active Cases</th>
            <th>Cases per 1M pop</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>{renderContent()}</tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => ({ country: state.country });

const mapDispatchToProps = { getCountryData };

export default connect(mapStateToProps, mapDispatchToProps)(Countryinfo);
