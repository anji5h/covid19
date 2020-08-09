import React from "react";
import Placeholder from "./placeholder";
import { connect } from "react-redux";
import Infobox from "./infobox";

function Nepalddata({ country }) {
  const renderContent = () =>
    !country.length ? (
      <Placeholder />
    ) : (
      <div className="ui four column stackable grid">
        <Infobox data={country.filter((item) => item.country === "Nepal")[0]}></Infobox>
      </div>
    );

  return (
    <div className="nepal">
      <h3 className="ui center aligned grey header">NEPAL</h3>
      <br></br>
      {renderContent()}
    </div>
  );
}
const mapStateToProps = (state) => ({ country: state.country });
export default connect(mapStateToProps, {})(Nepalddata);
