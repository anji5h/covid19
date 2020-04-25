import React, { Component } from "react";
import "./covid19.css";
import Loader from "../loading/loader.component";
import Header from "../header/header.component";
export default class Covid19 extends Component {
  constructor() {
    super();
    this.state = {
      worlddata: [],
      countrydata: [],
      isloading: false,
    };
  }
  async componentDidMount() {
    this.setState({
      isloading: true,
    });
    let data = await fetch(
      "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
          "x-rapidapi-key":
            "7f1a82cf5emshb4af1d6adb310cap116695jsn488e64d4c858",
        },
      }
    ).then((data) => data.json());

    this.setState(
      {
        worlddata: data,
        isloading: false,
      },
      () => {
        console.log(this.state.worlddata);
      }
    );
  }
  render() {
    let content = this.state.isloading ? (
      <Loader></Loader>
    ) : (
      <div className="container">
        <Header></Header>
        <div className="stat">
          <div>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
    return <>{content}</>;
  }
}
