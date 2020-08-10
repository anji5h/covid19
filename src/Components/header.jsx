import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCountryData } from "../actions";

import Searchbar from "./searchbar";

function Header({ country, getCountryData }) {
  const fetchData = () => {
    getCountryData();
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => fetchData(), 1000 * 60 * 10);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderSearch = () => (country.length ? <Searchbar country={country}></Searchbar> : null);

  return (
    <div className="headerbox">
      <span className="pageheader">CoVID-19 TRACKER</span>
      {renderSearch()}
    </div>
  );
}
const mapStateToProps = (state) => ({ country: state.country });
export default connect(mapStateToProps, { getCountryData })(Header);
