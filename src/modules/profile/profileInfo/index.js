import React from "react";
import s from "../index.module.scss";

const ProfileInfo = ({ type }) => {
  return (
    <>
      <div className={s["profile-parent"]}>
        <div className={s["profile_cirlce"]}></div>
        <h4 className="text-light mt-5">فرهاد ربیعی</h4>
        <h6 className="text-light mt-5">دنبال کنندگان</h6>
        <div className="text-light">2000</div>
        {type === "others" && (
          <>
            <div className={s["button-level"]}>Gold</div>
            <button className={s["button-follow"]}>Follow</button>
          </>
        )}
      </div>
    </>
  );
};

export default ProfileInfo;
