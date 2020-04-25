import React, { Component } from "react";
import "./covid19.css";
import Loader from "../loading/loader.component";
export default class Covid19 extends Component {
  constructor() {
    super();
    this.state = {
      nepdata: {
        positive: 0,
        negative: 0,
        total: 0,
        isolation: 0,
        pending: 0,
        recovered: 0,
      },
      whodata: {
        newcase: 0,
        newdeath: 0,
        totalcase: 0,
        totaldeath: 0,
        recover: 0,
      },
      isloading: false,
    };
  }
  componentDidMount() {
    // this.setState({
    //   isloading: true,
    // });
    Promise.all([
      fetch(
        "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key":
              "7f1a82cf5emshb4af1d6adb310cap116695jsn488e64d4c858",
          },
        }
      ).then((data) => data.json()),
      fetch("https://nepalcorona.info/api/v1/data/nepal").then((data) =>
        data.json()
      ),
    ])

      .then((data) => {
        console.log(data);
        this.setState({
          nepdata: {
            positive: data[1].tested_positive,
            negative: data[1].tested_negative,
            total: data[1].tested_total,
            isolation: data[1].in_isolation,
            recovered: data[1].recovered,
            pending: data[1].pending_result,
          },
          whodata: {
            newcase: data[0].new_cases,
            newdeath: data[0].new_deaths,
            totalcase: data[0].total_cases,
            totaldeath: data[0].total_deaths,
            recover: data[0].total_recovered,
          },
        });
      })
      .catch((err) => {
        console.log(err);
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
      <div className="container">
        <h1>COVID-19 STATISTICS</h1>
        <div className="covid-result">
          <h2>NEPAL SUMMARY</h2>
            <div className='row'>
            <div className="total box">
              <p>TOTAL TEST</p>
              <p>{this.state.nepdata.total}</p>
            </div>
            <div className="positive box">
              <p>POSITIVE TEST</p>
              <p>{this.state.nepdata.positive}</p>
            </div>
            <div className="negative box">
              <p>NEGATIVE TEST</p>
              <p>{this.state.nepdata.negative}</p>
            </div>
            <div className="pending box">
              <p>PENDING TEST</p>
              <p>{this.state.nepdata.pending}</p>
            </div>
          
            <div className="isolation box">
              <p>IN ISOLATION</p>
              <p>{this.state.nepdata.isolation}</p>
            </div>
            <div className="recovered box">
              <p>TOTAL RECOVERED</p>
              <p>{this.state.nepdata.recovered}</p>
            </div>
            </div>
        </div>
        <div className="covid1-result">
          <h2>WORLD SUMMARY</h2>
          <div className="row">
            <div className="negative box">
              <p>TOTAL CASES</p>
              <p>{this.state.whodata.totalcase}</p>
            </div>
            <div className="total box">
              <p>NEW CASES</p>
              <p>{this.state.whodata.newcase}</p>
            </div>
            <div className="positive box">
              <p>NEW DEATHS</p>
              <p>{this.state.whodata.newdeath}</p>
            </div>
            </div>
            <div className='row2'>
            <div className="pending box">
              <p>TOTAL DEATHS</p>
              <p>{this.state.whodata.totaldeath}</p>
            </div>
            <div className="isolation box">
              <p>TOTAL RECOVERED</p>
              <p>{this.state.whodata.recover}</p>
            </div>
          </div>
        </div>
      </div>
    );
    return <>{content}</>;
  }
}
