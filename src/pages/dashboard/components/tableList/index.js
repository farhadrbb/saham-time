import React from "react";
import UI from "./UI";

export default function TableList({item}) {
  return (
    <>
      <div>
        <UI listData={item}/>
      </div>
    </>
  );
}
