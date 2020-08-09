import React, { useEffect, useState } from "react";
import Placeholder from "./placeholder";
import { getWorldData } from "./../actions";
import { connect } from "react-redux";
import Infobox from "./infobox";

function Worlddata({ worlddata, getWorldData }) {
  let [loader, setloader] = useState(true);

  const fetchData = () => {
    setloader(true);
    getWorldData().then(() => setloader(false));
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => fetchData(), 1000 * 60 * 10);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderContent = () =>
    loader || !worlddata ? (
      <Placeholder />
    ) : (
      <div className="ui four column stackable grid">
        <Infobox data={worlddata}></Infobox>
      </div>
    );

  return <div className="world">{renderContent()}</div>;
}
const mapStateToProps = (state) => ({ worlddata: state.world });
export default connect(mapStateToProps, { getWorldData })(Worlddata);
