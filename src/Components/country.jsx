import React from "react";
import Countryplaceholder from "./countryplaceholder";
import { connect } from "react-redux";
function Country({ country}) {
 
  const renderContent = () => {
    if (!country.length) return <Countryplaceholder />;
    else {
      const newArr = [...country.sort((a, b) => b.cases - a.cases).splice(0, 10)];
      return (
        <div className="ui middle aligned divided large list">
          {newArr.map((item) => (
            <div key={item.country} className="item">
              <div className="right floated content" style={{ fontWeight: "bold" }}>
                <div>{item.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
              </div>
              <div className="content">
                <i className={`${item.countryInfo.iso2.toLowerCase()} flag`}></i>
                <span style={{paddingLeft:'20px'}}>{item.country}</span>
              </div>
            </div>
          ))}
        </div>
      );
    }
  };

  return <div className="countrylist">{renderContent()}</div>;
}
const mapStateToProps = (state) => ({ country: state.country });
export default connect(mapStateToProps, {})(Country);
