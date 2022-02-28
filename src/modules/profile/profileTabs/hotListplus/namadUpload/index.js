import React, { useEffect, useState } from "react";
import Upload from "../../../../../components/Icons/SidebarIcons/Upload";
import CloseIcon from "@mui/icons-material/Close";
// import Draggable from "react-draggable";
// import DraggableList from 'react-draggable-lists';
import s from "../../../index.module.scss";
import DraggableList from "react-draggable-lists";
import DrapDrop from "./example";

function isEven(n) {
  if (n % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

const NamadUploadProfile = ({ namad, handleDelete ,stateEdit,setstateEdit}) => {
 

  const [flagDrag, setflagDrag] = useState(false);
  let data = [];

  const handleFlagDrag = () => {
    setflagDrag((prev) => !prev);
  };




  return (
    <>
      {stateEdit.length > 1 ? (
        <p className="mb-3 d-flex justify-content-between" style={{ height: 40 }}>
          <div
            onClick={() => handleFlagDrag()}
            className={`${s["drag-botton"]}`}
          >
            {flagDrag ? ("اضافه و حذف نمادها"):("جابه جایی نماد ها")}
          </div>
          {!flagDrag ? (<div className={`${s["drag-botton"]}`}>ثبت هات لیست ها</div>):(null)}
          
        </p>
      ) :stateEdit.length > 0  ? (
        <div className="mb-3 d-flex justify-content-between" style={{ height: 40 }}>
          <div></div>
          <div className={`${s["drag-botton"]}`}>ثبت هات لیست ها</div>
        </div>
      ):(
        <p className="mb-3" style={{ height: 40 }}>
        </p>
      )}
      <p
        className={
          stateEdit.length === 0
            ? `${s["namad-upload"]} d-flex justify-content-center align-items-center`
            : `${s["namad-upload"]}`
        }
      >
        <div>{stateEdit.length === 0 && <Upload />}</div>
        {stateEdit.length > 0 && !flagDrag && (
          <>
            {stateEdit.map((itm, ind) => (
              <div
                key={ind}
                className={`${s["row-upload-namad"]} mx-auto px-2`}
                style={
                  isEven(ind) === "odd" ? { backgroundColor: "#0f1125" } : {}
                }
              >
                {itm.content.sector_name}
                <CloseIcon
                  onClick={() => handleDelete(itm,ind)}
                  className={s["hover"]}
                />
              </div>
            ))}
          </>
        )}
        {stateEdit.length > 0 && flagDrag ? (
          // <DraggableList width={500} height={50} rowSize={1} children={getdrop}>
          //   {namad.map((itm, ind) => (
          //     <>
          //       <div
          //         key={ind}
          //         className={`${s["row-upload-namad"]} mx-auto px-2`}
          //         style={
          //           isEven(ind) === "odd" ? { backgroundColor: "#0f1125" } : {}
          //         }
          //       >
          //         {itm.value}
          //         <CloseIcon
          //           onClick={() => handleDelete(itm)}
          //           className={s["hover"]}
          //         />
          //       </div>
          //     </>
          //   ))}
          // </DraggableList>
          <DrapDrop namad={namad} handleDelete={handleDelete} setstateEdit={setstateEdit} stateEdit={stateEdit}/>
        ) : 
        null}
      </p>
    </>
  );
};

export default NamadUploadProfile;

const listItems = [
  "Entertainment",
  "Private Time",
  "Rest",
  "Meal",
  "Exercise",
  "Work",
  "Home Projects",
  "Family",
];
