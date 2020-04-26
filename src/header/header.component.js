import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <div className="header">
        <p>
          COVID<span>-19</span>
        </p>
      </div>
      <div className="menu">
        <span>
          <Link to="/home">HOME</Link>
        </span>
        <span>
          <Link to="/world">WORLD</Link>
        </span>
        <span>
          <Link to="/symptom">SYMPTOMS</Link>
        </span>
      </div>
    </div>
  );
}
