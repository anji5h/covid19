import React from "react";
import Worlddata from "./worlddata";
import Worldmap from "./map";
import Country from "./country";
import "leaflet/dist/leaflet.css";
import Linegraph from "./linegraph";
import Header from "./header";

export default function Home() {
  return (
    <div className="home">
      <div className="ui stackable two column grid">
        <div className="eleven wide column" style={{ padding: "0 50px" }}>
        <Header></Header>
          <div className="column-1">
            <Worlddata></Worlddata>
            <Worldmap></Worldmap>
          </div>
        </div>
        <div className="five wide column" style={{ height: "100%" }}>
          <div className="column-2">
            <div className="ui segment">
              <h3 className="ui center aligned dividing grey header">Top Countries By Cases</h3>
              <Country></Country>
            </div>
            <div className="ui segment">
              <Linegraph></Linegraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
