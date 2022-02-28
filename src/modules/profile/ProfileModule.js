import React from "react";
import ProfileInfo from "./profileInfo";
import ProfileTabs from "./profileTabs";

const ProfileModule = () => {
  return (
    <>
      <div className="row w-100 m-0">
        <div className="col-12 col-xl-3 ">
          <ProfileInfo type="others" />
        </div>
        <div className="col-12 col-xl-9 mt-3 mt-xl-0">
          <ProfileTabs type="othres" />
        </div>
      </div>
    </>
  );
};

export default ProfileModule;
