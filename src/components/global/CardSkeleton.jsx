import React from "react";

const CardSkeleton = () => {
  return (
    <>
      <div className="card bg-white border animate-pulse">
        <div className="skeleteon-image bg-slate-300 h-[200px]"></div>
        <div className="p-3 flex flex-col gap-3">
          <div className="bg-slate-300 w-1/2 h-[10px]"></div>
          <div className="bg-slate-300 w-[20%] h-[10px]"></div>
          <div className="bg-slate-300 w-[30%] h-[10px]"></div>
          <div className="bg-slate-300 w-[40%] h-[10px]"></div>
        </div>
      </div>
    </>
  );
};

export default CardSkeleton;
