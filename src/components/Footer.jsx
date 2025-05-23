import React from "react";

const Footer = () => {
  return (
    <div className=" bg-[#0b8591] pb-6 lg:flex lg:justify-around lg:h-25 lg:items-center">
      <div className="text-[14px] pt-4 text-center text-black lg:text-[17px] font-bold">© 2025 Abdul Kapoor. All rights reserved.</div>

        <div className="text-center mt-1 text-black text-[13px] lg:text-[17px] lg:mt-3 font-bold">
          <a href="mailto:kapoorlocs@gmail.com" target="_blank" className="mr-1" >
            kapoorlocs@gmail.com
          </a>
          |
          <a href="https://github.com/03abdul/" target="_blank" className="mr-1 ml-1">
            GitHub
          </a>
          |
          <a href="https://www.linkedin.com/in/abdul-kapoor/" target="_blank" className="ml-1">
            LinkedIn
          </a>
        </div>
      </div>
  );
};

export default Footer;
