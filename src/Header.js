import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header>
      <h1>Cracked software</h1>
      <div className="search">
        <input type="text" placeholder="search for application" />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </header>
  );
}
