import React, { memo, useCallback, useEffect, useState } from "react";
import s from "../../../index.module.scss";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes as summaries } from "../../../../../redux/summaries";
import { LinearProgress } from "@mui/material";

function isEven(n) {
  if (n % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

const NamadListProfile = memo(({ handleClickNamad, searchValue,stateEdit,setstateEdit }) => {
  const dispatch = useDispatch();
  const summariesReducer = useSelector(
    (state) => state.summaries_select_reducer
  );
  const [data, setdata] = useState([]);

  const apiCall = useCallback(() => {
    dispatch({ type: summaries.summariesSelectAsync, payload: {} });
  });
  useEffect(() => {
    apiCall();
  }, []);

  useEffect(() => {
    if (summariesReducer.data) setdata(summariesReducer.data);
  }, [summariesReducer]);

  useEffect(() => {
    let filter = summariesReducer?.data?.filter((itm) => {
      return itm.body.sector_name.includes(searchValue);
    });
    setdata(filter);
  }, [searchValue]);
  return (
    <>
    {summariesReducer.loading && (<LinearProgress color="success"/>)}
      <div className={s["namad-box"]}>
        <div className="d-flex justify-content-center">
          <h6 className="text-center mt-2 mr-2 mb-3">لیست نمادها</h6>
          <h6 className="text-center mt-2 mr-2 mb-3">{data?.length}</h6>
        </div>

        <div className={s["namad-list"]}>
          {data.map((itm, ind) => (
            <>
              <div
                className={`${s["namad-plus"]} d-flex justify-content-between px-2 align-items-center mx-auto`}
                style={
                  isEven(ind) === "odd" ? { backgroundColor: "#0f1125" } : {}
                }
                onClick={(e) => handleClickNamad(itm.body, ind)}
              >
                <div style={{ fontSize: 12, color: "lightgray" }}>
                  {itm.body?.sector_name}
                </div>
                <div>
                  <AddIcon className={s["hover"]} />
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
});

export default NamadListProfile;
