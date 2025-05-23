import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";

const Skills = () => {
  return (
    <div>
      <section className="pb-7 bg-gray-900" id="skills">
        <div className="text-[#06e3f5] bg-black mt-2 p-4 text-center text-2xl border-2 lg:text-4xl">
          Skills
        </div>

        <section className="flex flex-col gap-4 ml-4 mt-8 lg:ml-[15%]">
            
          <div className="flex items-center">
            <div className="flex flex-col lg:mr-5">
              <FaHtml5 className="text-[#06e3f5] text-[25px] lg:text-[40px]" />
              <p className="text-[8px] text-white lg:text-[9px] lg:ml-1.5">HTML5</p>
            </div>
            <div className="w-[70%] h-1 bg-white ml-3 rounded-full lg:h-1.5">
              <div className="w-[85%] h-1 bg-red-500 rounded-full lg:h-1.5"></div>
            </div>
            <h6 className="ml-3 text-[11px] text-white px-2.5 py-1.5 rounded-[8px] font-bold bg-red-500 lg:text-[16px] lg:ml-6">85</h6>
          </div>

          <div className="flex items-center">
            <div className="flex flex-col items-center lg:mr-5">
              <IoLogoCss3 className="text-[#06e3f5] text-[25px] lg:text-[40px]" />
              <p className="text-[8px] text-white lg:text-[9px] lg:ml-1">CSS3</p>
            </div>
            <div className="w-[70%] h-1 bg-white ml-3 rounded-full lg:h-1.5">
              <div className="w-[75%] h-1 bg-pink-500 rounded-full lg:h-1.5"></div>
            </div>
            <h6 className="ml-3 text-[11px] text-white px-2.5 py-1.5 rounded-[8px] font-bold bg-pink-500 lg:text-[16px] lg:ml-6">75</h6>
          </div>

          <div className="flex items-center">
            <div className="flex flex-col items-center lg:mr-5">
              <BiLogoTailwindCss className="text-[#06e3f5] text-[25px] lg:text-[40px]" />
              <p className="text-[6px] text-white lg:text-[9px] lg:ml-0.5">TAILWIND</p>
            </div>
            <div className="w-[70%] h-1 bg-white ml-2.5 rounded-full lg:h-1.5">
              <div className="w-[75%] h-1 bg-blue-500 rounded-full lg:h-1.5"></div>
            </div>
            <h6 className="ml-3 text-[11px] text-white px-2.5 py-1.5 rounded-[8px] font-bold bg-blue-500 lg:text-[16px] lg:ml-6">75</h6>
          </div>

          <div className="flex items-center">
            <div className="flex flex-col items-center lg:mr-5">
              <IoLogoJavascript className="text-[#06e3f5] text-[25px] lg:text-[40px]" />
              <p className="text-[8px] text-white lg:text-[9px] lg:ml-1">JS</p>
            </div>
            <div className="w-[70%] h-1 bg-white ml-3 rounded-full lg:h-1.5">
              <div className="w-[70%] h-1 bg-emerald-500 rounded-full lg:h-1.5"></div>
            </div>
            <h6 className="ml-3 text-[11px] text-white px-2.5 py-1.5 rounded-[8px] font-bold bg-emerald-500 lg:text-[16px] lg:ml-6">70</h6>
          </div>

          <div className="flex items-center">
            <div className="flex flex-col items-center lg:mr-5">
              <FaReact className="text-[#06e3f5] text-[25px] lg:text-[40px]" />
              <p className="text-[8px] text-white lg:text-[9px] lg:ml-1.5">REACT</p>
            </div>
            <div className="w-[70%] h-1 bg-white ml-3 rounded-full lg:h-1.5">
              <div className="w-[70%] h-1 bg-purple-500 rounded-full lg:h-1.5"></div>
            </div>
            <h6 className="ml-3 text-[11px] text-white px-2.5 py-1.5 rounded-[8px] font-bold bg-purple-500 lg:text-[16px] lg:ml-6">70</h6>
          </div>

          <div className="flex items-center">
            <div className="flex flex-col items-center lg:mr-5">
              <FaGitAlt className="text-[#06e3f5] text-[25px] lg:text-[40px]" />
              <p className="text-[8px] text-white lg:text-[9px] lg:ml-1">GIT</p>
            </div>
            <div className="w-[70%] h-1 bg-white ml-3.5 rounded-full lg:h-1.5">
              <div className="w-[80%] h-1 bg-amber-500 rounded-full lg:h-1.5"></div>
            </div>
            <h6 className="ml-3 text-[11px] text-white px-2.5 py-1.5 rounded-[8px] font-bold bg-amber-500 lg:text-[16px] lg:ml-6">80</h6>
          </div>
        </section>

        <section className="grid grid-cols-3 gap-1 m-4 mt-8">
            <div className="border-2 border-[#06e3f5] flex">
                <span className="border-l-2 ml-1.5 text-[#59c4b7]"></span>
                <span className="text-white text-[15px] ml-1">Creative Thinking</span>
            </div>

            <div className="border-2 border-[#06e3f5] mt-5 flex">
            <span className="border-l-2 ml-1.5 text-[#59c4b7]"></span>
            <span className="text-white text-[15px] ml-1">Leadership Quality</span>
            </div>

            <div className="border-2 border-[#06e3f5] mt-10 flex">
            <span className="border-l-2 ml-1.5 text-[#59c4b7]"></span>
            <span className="text-white text-[15px] ml-1">Team Work</span>
            </div>
        </section>
      </section>
    </div>
  );
};

export default Skills;
