import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCountryData } from "../actions";
import { Link } from "react-router-dom";
import history from "../history";

function Header({ country, getCountryData }) {
  let [results, setresult] = useState([]);
  const fetchData = () => {
    getCountryData();
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => fetchData(), 1000 * 60 * 10);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleChange = (e) => {
    let result = [];
    if (e.target.value) {
      result = country.filter((item) => new RegExp(`^${e.target.value}`, "i").test(item.country));
    }
    setresult(result);
  };
  const renderResult = () =>
    results.map((item) => (
      <Link to={`/country?q=${item.country}`} key={item.country}>
        {item.country}
      </Link>
    ));

  const onsubmit = (value) => {
    if (!value) return;
    history.push(`/country?q=${value}`)
  };
  const renderSearch = () =>
    country.length ? (
      <div className="ui fluid search searchbox">
        <div className="ui icon input">
          <input
            className="prompt"
            type="text"
            placeholder="Search by country"
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") onsubmit(e.target.value);
            }}
          ></input>
          <i className="search icon"></i>
        </div>
        <div className="searchlist">{renderResult()}</div>
      </div>
    ) : null;

  return (
    <div className="headerbox">
      <span className="pageheader">CoVID-19 TRACKER</span>
      {renderSearch()}
    </div>
  );
}
const mapStateToProps = (state) => ({ country: state.country });
export default connect(mapStateToProps, { getCountryData })(Header);
