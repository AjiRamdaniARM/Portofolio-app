import React from "react";
import ui1 from "../assets/image/ui1.png";
import ui2 from "../assets/image/ui2.png";
import ui3 from "../assets/image/ui3.png";
import ui4 from "../assets/image/ui4.png";

const Uiux = () => {
  return (
    <div className="Uiux">
      <section className="pt-36 pb-32 bg-white" id="clients">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16"></div>
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center">
            <div className="mb-12 p-4 md:w-1/2 hover:shadow-lg hover:bg-teal-300 transition duration-300 ease-in-out">
              <a href="https://www.figma.com/file/jLiLW2T9AXPOZ0xzV2tLUN/Untitled?node-id=0%3A1">
                <div className="rounded-md shadow-md overflow-hidden">
                  <img src={ui1} alt="landing-coding" width="w-full " />
                </div>
              </a>
            </div>
            <div className="mb-12 p-4 md:w-1/2 hover:shadow-lg hover:bg-teal-300 transition duration-300 ease-in-out">
              <a href="https://www.figma.com/file/hRNwdm0DOONJZaKa2FxfVK/Untitled?node-id=0%3A1">
                <div className="rounded-md shadow-md overflow-hidden">
                  <img src={ui3} alt="landing-coding" width="w-full" />
                </div>
              </a>
            </div>
            <div className="mb-12 p-4 md:w-1/2 hover:shadow-lg hover:bg-teal-300 transition duration-300 ease-in-out">
              <a href="https://www.figma.com/file/UGYgznRbQsJCVFq6Zt4mcD/Untitled?node-id=0%3A1">
                <div className="rounded-md shadow-md overflow-hidden">
                  <img src={ui2} alt="landing-coding" width="w-full" />
                </div>
              </a>
            </div>

            <div className="mb-12 p-4 md:w-1/2 hover:shadow-lg hover:bg-teal-300 transition duration-300 ease-in-out">
              <a href="https://www.figma.com/file/N0L1oYsccnh4RZDOzKuf5Z/Untitled?node-id=2%3A2">
                <div className="rounded-md shadow-md overflow-hidden">
                  <img src={ui4} alt="landing-coding" width="w-full" />
                </div>
              </a>
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
export default Uiux;
