import React from "react";
import Col from "reactstrap/lib/Col";

import s from "../../../index.module.scss";
import SearchIcon from '@mui/icons-material/Search';

const SearchBoxProfile = ({handleFilter}) => {
  return (
    <>
      <div className={s["search-box"]}>
        <input type="text" className={s["input-search"]} onChange={(e)=>handleFilter(e.target.value)}/>
       <SearchIcon className="ml-2"/>
      </div>
    </>
  );
};

export default SearchBoxProfile;
