import React, { useState } from 'react'
import { Link } from "react-router-dom";
import history from "../history";
export default function Searchbar({country}) {
    let [results, setresult] = useState([]);
    const handleChange = (e) => {
        let result = [];
        if (e.target.value) {
          result = country.filter((item) => new RegExp(`^${e.target.value}`, "i").test(item.country));
        }
        setresult(result);
      };
      const renderResult = () =>
        results.map((item) => (
          <Link to={`/country?q=${item.country}`} key={item.country}>
            {item.country}
          </Link>
        ));
    
      const onsubmit = (value) => {
        if (!value) return;
        setresult([])
        history.push(`/country?q=${value}`)
      };
    return (
        <div className="ui fluid search searchbox">
        <div className="ui icon input">
          <input
            className="prompt"
            type="text"
            placeholder="Search by country"
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") onsubmit(e.target.value);
            }}
          ></input>
          <i className="search icon"></i>
        </div>
        <div className="searchlist">{renderResult()}</div>
      </div>

    )
}
