import React from "react";
import pht from "../assets/pht.jpg";
import resume from "../assets/Abdul_resume.pdf";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { GoDownload } from "react-icons/go";

const Landingpage = () => {

  return (
    <>
      <div className="bg-gray-900 lg:h-[90vh] relative" id="home">
        
        <section className="flex justify-center">
          <div className="mt-7">
            <img
              src={pht}
              alt="Image"
              className="rounded-full w-[230px] h-[230px] border-4 border-[#06e3f5] border-double p-1
               lg:border-5 lg:border-[#06e3f5] lg:border-double
               lg:absolute lg:left-20 lg:w-[30%] lg:h-[70%] lg:mt-13 lg:p-1"
            />
          </div>
        </section>
        <section className="pb-5">
          <div className="text-white ml-6 mt-2 lg:absolute lg:right-70 lg:mt-40">
            <span className="text-2xl lg:text-4xl">
              Hi it's <span className="text-[#06e3f5]">Abdul kapoor.</span>
            </span>
            <br />
            <span className="text-1xl lg:text-[22px] lg:leading-10">
              I'm a <span className="text-[#06e3f5]">Frontend </span> Web
              Developer.
            </span>
            <br />
            <span className="block mr-1 text-[14px] lg:text-[19px] lg:hidden">
              I Believe my Skills and Knowledge as much I can. I believe that continuous learning is a 
              fundamental principle that I consistently follow in my life.
              I believe that great web development isn’t just about writing code, it’s about telling a story, building trust, and creating real impact through seamless design and functionality.
            </span>
            <span className="hidden text-[14px] lg:text-[17px] lg:block lg:leading-6">
              I Believe my Skills and Knowledge as much I can. <br /> I believe that continuous learning is a
               fundamental principle  <br />that I consistently follow in my life.
            </span>
            <br />
            <span className="flex mt-1 justify-around lg:absolute lg:left-0">
              <a
                href={resume}
                download="Resume_Of_Abdul"
                className="flex text-[11px] border-1 border-[#06e3f5] text-[#06e3f5] p-2 rounded-3xl hover:bg-[#06e1f585] hover:text-white lg:p-2.5"
              >
                DOWNLOAD CV <GoDownload className="text-[15px] ml-2" />
              </a>
              <span className="flex items-center ml-10 lg:absolute lg:left-70">
                <a
                  href="https://www.linkedin.com/in/abdul-kapoor"
                  className="border-1 rounded-full p-1.5 mr-3 text-[#06e3f5] lg:p-2 hover:bg-[#06e1f5b4] hover:text-black hover:border-1 border-[#06e3f5]"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/03abdul/"
                  className="border-1 rounded-full p-1.5 mr-3 text-[#06e3f5] lg:p-2 lg:ml-1 hover:bg-[#06e1f5b4] hover:text-black hover:border-1 border-[#06e3f5]"
                >
                  <IoLogoGithub />
                </a>
                <a
                  href="mailto:kapoorlocs@gmail.com"
                  className="border-1 rounded-full p-1.5 mr-3 text-[#06e3f5] lg:p-2 lg:ml-1 hover:bg-[#06e1f5b4] hover:text-black hover:border-1 border-[#06e3f5]"
                >
                  <IoIosMail />
                </a>
              </span>
            </span>
          </div>
        </section>
      </div>
    </>
  );
};

export default Landingpage;
