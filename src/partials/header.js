import React from "react";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import Logo from "../bookbuzz.svg";
import IconButton from "../components/icon-button";
import SearchInput from "../components/search-input";

function Header(props) {
  const { onNewPageClicked, onSearchChanged } = props;
  return (
    <header>
      <img className="logo" src={Logo} alt="Book Buzz logo" />
      <SearchInput icon={faSearch} onSearchChanged={onSearchChanged} />
      <IconButton icon={faPlus} onButtonClicked={onNewPageClicked} />
    </header>
  );
}

export default Header;
