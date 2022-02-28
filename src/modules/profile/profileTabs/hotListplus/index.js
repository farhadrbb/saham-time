import { styled } from "@material-ui/core";
import { Autocomplete, TextField, useAutocomplete } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import React, { useCallback, useEffect, useState } from "react";
import s from "../../index.module.scss";
import NamadListProfile from "./namadList";
import NamadUploadProfile from "./namadUpload";
import SearchBoxProfile from "./searchBox";
import {actionTypes as notif} from '../../../../redux/notificationAlert'
import { useDispatch } from "react-redux";

const HotListPlus = () => {
  const [namad, setnamad] = useState([]);
  const [searchValue, setsearchValue] = useState("");
  const dispatch = useDispatch()
  const [stateEdit, setstateEdit] = useState([]);


  const handleClickNamad = useCallback((value, ind) => {
    let obj = {
      id:ind,
      content:{...value},
    };
    let flag = true;
    stateEdit.forEach((itm, index) => {
      if (itm.content.isin === value.isin) {
        
        flag = false;
        dispatch({type:notif.error,textAlert:'نماد تکراری است'})
      }
    });
    if (flag) {
      setnamad((prev) => [...prev,obj]);
    }
  },[namad]);



  useEffect(() => {
    setstateEdit(namad)
  }, [namad]);




  const handleDelete = useCallback((itm,ind) => {
    let filter = stateEdit.filter((n, index) => index !== ind);
    setstateEdit(filter);
    setnamad(filter)
  },[stateEdit]);

  const handleFilter = useCallback((value)=>{
    setsearchValue(value)
  },[searchValue])



  return (
    <>
      <div className="row h-100 mx-auto">
        <div className="col-12 col-xl-6 mx-auto">
          <SearchBoxProfile handleFilter={handleFilter}/>
          <NamadListProfile handleClickNamad={handleClickNamad} searchValue={searchValue} stateEdit={stateEdit} setstateEdit={setstateEdit}/>
        </div>
        <div className="col-12 col-xl-6 mt-3 mt-md-0 mx-auto">
          <NamadUploadProfile namad={namad} handleDelete={handleDelete} stateEdit={stateEdit} setstateEdit={setstateEdit}/>
        </div>
      </div>
    </>
  );
};

export default HotListPlus;
