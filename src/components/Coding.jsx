import React from "react";
import coding1 from "../assets/image/code1.png";
import coding2 from "../assets/image/code2.png";
import coding3 from "../assets/image/code3.png";
import coding4 from "../assets/image/code4.png";
const Coding = () => {
  return (
    <div className="Coding">
      <section className="pt-36 pb-32 bg-white" id="clients">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16"></div>
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center">
            <div className="mb-12 p-4 md:w-1/2 hover:shadow-lg hover:bg-teal-300 transition duration-300 ease-in-out">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={coding1} alt="landing-coding" width="w-full" />
              </div>
            </div>
            <div className="mb-12 p-4 md:w-1/2 hover:shadow-lg hover:bg-teal-300 transition duration-300 ease-in-out">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={coding2} alt="landing-coding" width="w-full" />
              </div>
            </div>
            <div className="mb-12 p-4 md:w-1/2 hover:shadow-lg hover:bg-teal-300 transition duration-300 ease-in-out">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={coding3} alt="landing-coding" width="w-full" />
              </div>
            </div>
            <div className="mb-12 p-4 md:w-1/2 hover:shadow-lg hover:bg-teal-300 transition duration-300 ease-in-out">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={coding4} alt="landing-coding" width="w-full" />
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="w-full px-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://www.tiktok.com/@ajiramdani_ari";
            }}
            className="text-base font-semibold text-white bg-green-400 py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500"
          >
            Lebih Banyak Code
          </button>
        </div>{" "}
      </section>
    </div>
  );
};
export default Coding;
