import React, { Component } from "react";
import "./covid19.css";
import Loader from "../loading/loader.component";
import Header from "../header/header.component";
import apicall from "../apicall";
export default class Covid19 extends Component {
  constructor() {
    super();
    this.state = {
      worlddata: {},
      countrydata: {},
      isloading: false,
      searchlist: [],
    };
  }

  componentDidMount() {
    this.setState({
      isloading: true,
    });
    apicall
      .then((data) => {
        this.setState({
          worlddata: data.worlddata,
          countrydata: data.nepaldata,
        });
      })
      .catch((err) => {
        this.setState({
          worlddata: {
            TotalConfirmed: 0,
            TotalDeaths: 0,
            TotalRecovered: 0,
            ActiveCases: 0,
          },
          countrydata: {
            tested_positive: 0,
            tested_total: 0,
            in_isolation: 0,
            deaths: 0,
            recovered: 0,
            active: 0,
          },
        });
      })
      .finally(() => {
        this.setState({
          isloading: false,
        });
      });
  }

  render() {
    let content = this.state.isloading ? (
      <Loader></Loader>
    ) : (
      <>
        <div className="world">
          <h3>GLOBAL STATUS</h3>
          <div className="stat">
            <div className="row1">
              <div className="box">
                <p>
                  <i className="fas fa-bed icon"></i>
                </p>
                <p>{this.state.worlddata.TotalConfirmed}</p>
                <p>Cases</p>
              </div>
              <div className="box">
                <p>
                  <i className="fas fa-skull icon"></i>
                </p>
                <p>{this.state.worlddata.TotalDeaths}</p>
                <p>Deaths</p>
              </div>
              <div className="box">
                <p>
                  <i className="fas fa-plus-square icon"></i>
                </p>
                <p>{this.state.worlddata.TotalRecovered}</p>
                <p>Recovered</p>
              </div>
              <div className="box">
                <p>
                  <i className="fas fa-procedures icon"></i>
                </p>
                <p>{this.state.worlddata.ActiveCases}</p>
                <p>Active Cases</p>
              </div>
            </div>
          </div>
        </div>
        <div className="nepal">
          <h3>NEPAL</h3>
          <div className="stat">
            <div className="row1">
              <div className="box">
                <p>
                  <i className="fas fa-procedures icon"></i>
                </p>
                <p>{this.state.countrydata.tested_positive}</p>
                <p>Cases</p>
              </div>
              <div className="box">
                <p>
                  <i className="fas fa-skull icon"></i>
                </p>
                <p>{this.state.countrydata.deaths}</p>
                <p>Deaths</p>
              </div>
              <div className="box">
                <p>
                  <i className="fas fa-plus-square icon"></i>
                </p>
                <p>{this.state.countrydata.recovered}</p>
                <p>Recovered</p>
              </div>
              <div className="box">
                <p>
                  <i className="fas fa-procedures icon"></i>
                </p>
                <p>{this.state.countrydata.active}</p>
                <p>Active Cases</p>
              </div>
            </div>
            <div className="row2">
              <div className="box">
                <p>
                  <i className="fas fa-vials icon"></i>
                </p>
                <p>{this.state.countrydata.tested_total}</p>
                <p>Total Test</p>
              </div>
              <div className="box">
                <p>
                  <i className="fas fa-house-user icon"></i>
                </p>
                <p>{this.state.countrydata.in_isolation}</p>
                <p>Isolation</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
    return (
      <div className="container">
        <Header></Header>
        {content}
      </div>
    );
  }
}
