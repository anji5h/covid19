import React from "react";
import { Map, TileLayer } from "react-leaflet";
import { connect } from "react-redux";
import { showDataOnMap } from "../utils";

function Worldmap({ countries }) {
  const mapCenter = { lat: 34.80746, lng: -40.4796 };
  const mapZoom = 3;
  return (
    <div className="map">
      <div className="ui segment">
        <Map center={mapCenter} zoom={mapZoom}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {showDataOnMap(countries, "cases")}
        </Map>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({ countries: state.country });

export default connect(mapStateToProps, {})(Worldmap);
