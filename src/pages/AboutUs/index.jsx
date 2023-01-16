import React from "react";
import { MapAboutUs, ProfileAboutUs } from "../../components/molecules/AboutUs";

const index = () => {
  return (
    <>
      <main className="py-5 px-3">
        <div className="containers grid grid-cols-12 gap-5">
          <div className="col-span-7">
            <ProfileAboutUs />
          </div>
          <div className="col-span-5">
            <MapAboutUs />
          </div>
        </div>
      </main>
    </>
  );
};

export default index;
