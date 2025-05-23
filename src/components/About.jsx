import React from "react";

const About = () => {
  return (
    <>
      <section className=" bg-gray-900 pb-7 text-white lg:pb-10" id="about">
        <div className="text-[#06e3f5] bg-black mt-2 p-4 text-center text-2xl border-2 lg:text-4xl">
          About Me
        </div>
        <div className="m-4 text-center lg:text-[19px] lg:mt-10 lg:px-7">
          Hi, I'm
          <span className="text-[#06e3f5] font-semibold"> Abdul Kapoor, </span>
          a passionate Frontend Web Developer with a creative mindset
          as like as Developer and with very passionate and deticated to my work
          and I have acquired the Skills necessary to build great and premium
          websites.
        </div>
        <div className="hidden lg:m-4 lg:text-center lg:text-[19px] lg:block lg:px-7">
          I have hands-on experience in HTML, CSS, JavaScript, and frameworks like React, along with tools such as Git and VS Code.
           I’m constantly learning and exploring modern development. 
          I value team collaboration, problem-solving, and pay close attention to design and user experience. 
          I’m eager to contribute to a growth-oriented company where I can build impactful web solutions while continuing to 
          develop my skills.
        </div>
        <div className="border-2 m-auto shadow-2xl shadow-[#06e3f5] border-[#06e3f5] h-[47%] w-[90%] rounded-2xl lg:text-[19px] lg:p-2 lg:w-[50%] lg:mt-12">
          <span className="flex flex-col m-4">
            <p className="mb-2">
              <span className="font-semibold">Name :</span> Abdul Kapoor
            </p>
            <p className="mb-2">
              <span className="font-semibold">Age :</span> 21
            </p>
            <p className="mb-2">
              <span className="font-semibold">Phone :</span> +918680858275
            </p>
            <p className="mb-2">
              <span className="font-semibold">Email :</span> kapoorlocs@gmail.com
            </p>
            <p className="mb-2">
              <span className="font-semibold">Experience :</span> Fresher
            </p>
            <p className="mb-2">
              <span className="font-semibold">Country :</span> India
            </p>
            <p className="mb-2 text-center border-2 rounded-full">
              <span className="font-semibold">Availability :</span> Full Time
            </p>
          </span>
        </div>
      </section>
    </>
  );
};

export default About;
