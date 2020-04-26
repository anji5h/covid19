import React, { Component } from "react";
import "./world.css";
import Header from "../header/header.component";
import list from "../counterylist";
import Loader from "../loading/loader.component";
export default class World extends Component {
  constructor() {
    super();
    this.state = {
      countrydata: {
        Confirmed: 0,
        Deaths: 0,
        Recovered: 0,
        Active: 0,
        Country: "Country Name",
      },
      isloading: false,
      searchlist: [],
    };
  }

  handleChange = (event) => {
    let { value } = event.target;
    let countrylist;
    if (value === "") {
      countrylist = [];
    } else {
      countrylist = list.filter((item) => {
        return new RegExp(`^${value}`, "i").test(item);
      });
    }
    this.setState({
      searchlist: countrylist.map(
        (item) => item.charAt(0).toUpperCase() + item.slice(1)
      ),
    });
  };

  handleSubmit = async (country = "") => {
    let data = {};
    if (country !== "") {
      document.querySelector("#country-input").value = country;
      data = await fetch(`https://api.covid19api.com/total/country/${country}`)
        .then((data) => data.json())
        .catch(() => {
          data = {
            Confirmed: 0,
            Deaths: 0,
            Recovered: 0,
            Active: 0,
            Country: "Country name",
          };
        });

      if (Object.values(data).length !== 0) {
        data = data[(Object.keys(data).length - 1).toString()];
      } else {
        data = {
          Confirmed: 0,
          Deaths: 0,
          Recovered: 0,
          Active: 0,
          Country: "Country name",
        };
      }
    }
    data.Active = data.Confirmed - data.Recovered;
    for (let i in data) {
      data[i] = data[i].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    this.setState({
      searchlist: [],
      countrydata: data,
    });
  };

  render() {
    console.log(this.state);
    let searchlist = (this.state.searchlist || []).map((item, i) => (
      <p onClick={() => this.handleSubmit(item)} key={i}>
        {item}
      </p>
    ));
    let content = this.state.isloading ? (
      <Loader></Loader>
    ) : (
      <div className="world">
        <h3>{this.state.countrydata.Country.toUpperCase()}</h3>
        <div className="stat">
          <div className="row1">
            <div className="box">
              <p>
                <i className="fas fa-bed icon"></i>
              </p>
              <p>{this.state.countrydata.Confirmed}</p>
              <p>Cases</p>
            </div>
            <div className="box">
              <p>
                <i className="fas fa-skull icon"></i>
              </p>
              <p>{this.state.countrydata.Deaths}</p>
              <p>Deaths</p>
            </div>
            <div className="box">
              <p>
                <i className="fas fa-plus-square icon"></i>
              </p>
              <p>{this.state.countrydata.Recovered}</p>
              <p>Recovered</p>
            </div>
            <div className="box">
              <p>
                <i className="fas fa-procedures icon"></i>
              </p>
              <p>{this.state.countrydata.Active}</p>
              <p>Active Cases</p>
            </div>
          </div>
        </div>
      </div>
    );
    return (
      <div className="country-stat">
        <Header></Header>
        <p className="warning">PLAESE SELECT COUNTRY NAME TO PROCEED</p>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by country"
            name="country"
            id="country-input"
            onChange={this.handleChange}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                this.handleSubmit(
                  document.querySelector("#country-input").value
                );
              }
            }}
          ></input>
          <div className="search-list">{searchlist}</div>
        </div>

        <div className="world-content">
          {content}
        </div>
      </div>
    );
  }
}
