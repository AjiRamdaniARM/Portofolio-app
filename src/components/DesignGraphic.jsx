import React from "react";
import Karya1 from "../assets/image/Poster_AjiRamdani_Pelajar.jpg";
import karya2 from "../assets/image/Template-Ilustrasi-HUT-77-(2).jpg";
import karya4 from "../assets/image/LOMBA-TEMA-BEBAS.jpg";
import karya3 from "../assets/image/AjiRamdani_Sukabumi_Smks-Terpadu-Ibadurrahman.jpg";
const Designgraphic = () => {
  return (
    <div className="design">
      <section className="pt-36 pb-32 bg-white" id="clients">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16"></div>
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center">
            <div className="mb-12 p-4 md:w-1/2 hover:shadow-lg hover:bg-teal-300 transition duration-300 ease-in-out">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={Karya1} alt="landing-coding" width="w-full " />
              </div>
            </div>
            <div className="mb-12 p-4 md:w-1/2 hover:shadow-lg hover:bg-teal-300 transition duration-300 ease-in-out">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={karya2} alt="landing-coding" width="w-full" />
              </div>
            </div>
            <div className="mb-12 p-4 md:w-1/2 hover:shadow-lg hover:bg-teal-300 transition duration-300 ease-in-out">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={karya3} alt="landing-coding" width="w-full" />
              </div>
            </div>
            <div className="mb-12 p-4 md:w-1/2 hover:shadow-lg hover:bg-teal-300 transition duration-300 ease-in-out">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={karya4} alt="landing-coding" width="w-full" />
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="w-full px-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://www.instagram.com/ajiramdani_04/";
            }}
            className="text-base font-semibold text-white bg-teal-400 py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500"
          >
            Lebih Banyak Karya
          </button>
        </div>{" "}
      </section>
    </div>
  );
};
export default Designgraphic;
