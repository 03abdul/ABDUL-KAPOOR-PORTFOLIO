import React from "react";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";

const Tasks = () => {
  return (
    <section className="bg-gray-900 pb-5" id="tasks">
      <div className="text-[#06e3f5] mb-5 bg-black mt-2 p-4 text-center text-2xl border-2 lg:text-4xl">
        My Tasks
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 lg:mt-8 lg:gap-5">
        <a href="https://03abdul.github.io/COUNTER-APP/" target="_blank">
          <img
            src={img1}
            alt=""
            className="w-[130px] h-[100px] flex m-auto mt-4 rounded-2xl lg:w-[200px] lg:h-[150px]"
          />
          <p className="text-white text-center mt-2 lg:text-[110%]">Counter App</p>
        </a>

        <a href="https://addition-of-2numbers.onrender.com" target="_blank">
          <img
            src={img2}
            alt=""
            className="w-[130px] h-[100px] flex m-auto mt-4 rounded-2xl lg:w-[200px] lg:h-[150px]"
          />
          <p className="text-white text-center mt-2 leading-4 lg:text-[110%] lg:leading-5">
            Addition of 2 <br />
            numbers
          </p>
        </a>

        <a href="https://03abdul.github.io/CLICKER-APP/" target="_blank">
          <img
            src={img3}
            alt=""
            className="w-[130px] h-[100px] flex m-auto mt-4 rounded-2xl lg:w-[200px] lg:h-[150px]"
          />
          <p className="text-white text-center mt-2 lg:text-[110%]">Clicker App</p>
        </a>

        <a href="https://03abdul.github.io/YOUTUBE-CLONE/" target="_blank">
          <img
            src={img4}
            alt=""
            className="w-[130px] h-[100px] flex m-auto mt-4 rounded-2xl object-cover lg:w-[200px] lg:h-[150px] lg:object-fill"
          />
          <p className="text-white text-center mt-2 lg:text-[110%]">Youtube Clone</p>
        </a>

        <a href="https://03abdul.github.io/QR-CODE-GENERATOR/" target="_blank">
          <img
            src={img5}
            alt=""
            className="w-[130px] h-[100px] flex m-auto mt-4 rounded-2xl object-cover lg:w-[200px] lg:h-[150px]"
          />
          <p className="text-white text-center mt-2 leading-4 lg:text-[110%] lg:leading-5">
            QR Code <br />
            Generator
          </p>
        </a>

        <a href="https://03abdul.github.io/TOURIST-APP/" target="_blank">
          <img
            src={img6}
            alt=""
            className="w-[130px] h-[100px] flex m-auto mt-4 rounded-2xl object-cover lg:w-[200px] lg:h-[150px] lg:object-fill"
          />
          <p className="text-white text-center mt-2 lg:text-[110%]">Tourist App</p>
        </a>

        <a href="https://03abdul.github.io/CUSTOM_CARDS/" target="_blank">
          <img
            src={img7}
            alt=""
            className="w-[130px] h-[100px] flex m-auto mt-4 rounded-2xl object-cover lg:w-[200px] lg:h-[150px]"
          />
          <p className="text-white text-center mt-2 lg:text-[110%]">Custom Cards</p>
        </a>

        <a href="https://footer-section.onrender.com" target="_blank">
          <img
            src={img8}
            alt=""
            className="w-[130px] h-[100px] flex m-auto mt-4 rounded-2xl object-cover lg:w-[200px] lg:h-[150px] lg:object-fill"
          />
          <p className="text-white text-center mt-2 lg:text-[110%]">Footer Section</p>
        </a>
      </div>
      <div>
        <div className="text-[#06e3f5] text-[22px] text-center mt-[8%] lg:text-3xl lg:mt-[5%]">
          Client Projects :
        </div>

        <div className="mt-[5%] lg:pb-7">
          <div className="text-white text-[18px] ml-5 lg:text-2xl lg:ml-[9%]">Vikieme Project <a href="https://www.vikieme.in/" className="text-gray-900 float-end mr-[20px] bg-slate-500 pl-3 pr-3 rounded-2xl hover:scale-105 hover:bg-gray-200 lg:mr-[15%] lg:px-5 lg:py-2 lg:rounded-3xl">Click</a></div>
          <div className="text-white text-[18px] ml-5 mt-5 pb-5 lg:text-2xl lg:ml-[9%] lg:mt-11">Moon Interior Project <a href="https://www.mooninteriors.in/" className="text-gray-900 float-end mr-[20px] bg-slate-500 pl-3 pr-3 rounded-2xl hover:scale-105 hover:bg-gray-200 lg:mr-[15%] lg:px-5 lg:py-2 lg:rounded-3xl">Click</a></div>

        </div>
      </div>
    </section>
  );
};

export default Tasks;
