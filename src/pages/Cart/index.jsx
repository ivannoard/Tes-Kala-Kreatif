import React from "react";

const index = () => {
  return (
    <>
      <main className="py-3">
        <div className="max-w-5xl p-3 mx-auto bg-white shadow-md flex flex-col gap-5">
          <div className="card bg-white grid grid-cols-12 items-center">
            <div className="col-span-10">
              <div className="card-content flex gap-5">
                <div className="bg-slate-500 w-[100px] h-[100px]"></div>
                <div className="py-2">
                  <h5 className="text-slate-900 font-semibold text-lg">
                    Lorem ipsum dolor sit amet.
                  </h5>
                  <h4 className="font-semibold text-slate-500 text-xl">
                    Rp. 250.000
                  </h4>
                  <p className="text-slate-500 text-md">jumlah: 1</p>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="p-5">
                <button className="bg-slate-500 block mx-auto py-2 px-4 text-white font-semibold">
                  Lihat Barang
                </button>
              </div>
            </div>
          </div>
          <div className="card bg-white grid grid-cols-12 items-center">
            <div className="col-span-10">
              <div className="card-content flex gap-5">
                <div className="bg-slate-500 w-[100px] h-[100px]"></div>
                <div className="py-2">
                  <h5 className="text-slate-900 font-semibold text-lg">
                    Lorem ipsum dolor sit amet.
                  </h5>
                  <h4 className="font-semibold text-slate-500 text-xl">
                    Rp. 250.000
                  </h4>
                  <p className="text-slate-500 text-md">jumlah: 1</p>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="p-5">
                <button className="bg-slate-500 block mx-auto py-2 px-4 text-white font-semibold">
                  Lihat Barang
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default index;
