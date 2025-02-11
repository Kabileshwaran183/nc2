import React from "react";

export const Services = ({ data }) => {
  return (
    <section className="top-container-1"  id="servies">
        <div className=" container-serv">

          <div className=" Title-div ">
            <h2 className="text-3xl font-bold txt-shadow text-gray-800 hover:text-[#FFF200] ">Dealership</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {data
              ? data.map((d, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center  hbg-slate-50 rounded-2xl shadow-lgover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2"
                >

                  <div className=" w-50 h-40 flex object-fill items-center justify-center rounded-full mb-1 transition-all duration-300">
                    <img src={d.icon} />
                  </div>

                  <div className="text-center p-5">
                    <h3 className="text-2xl font-bold text-gray-800 mb-10 hover:text-[#FFF200]">
                      {d.name}
                    </h3>
                    <p className="text-gray-600 text-sm ">{d.text}</p>
                  </div>
                </div>
              ))
              : <p className="text-lg text-gray-500">Loading...</p>}
          </div>
        </div>
    </section>

  );
};

export default Services;
