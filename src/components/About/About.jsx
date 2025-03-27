import React from "react";
import { About_Image } from "../../assets";

const About = () => {
    return (
        <div id="about">
            <div className="flex flex-row justify-between items-center">
                <div className="hidden md:block xl:w-[550px] xl:ml-[100px]">
                    <img src={About_Image} alt="" />
                </div>
                <div className="flex flex-col items-center xl:w-[650px] m-10 md:m-0 lg:mr-[20px] xl:mr-[80px] gap-5">
                    <h1 className="poppins font-extrabold xl:text-[100px] lg:text-[80px] md:text-[70px] text-[60px] leading-[6rem]">
                        About
                    </h1>
                    <p className="poppins-regular text-[#000000] lg:text-[16px] md:text-[14px] text-[14px] xl:w-full lg:w-[450px] md:[350px] w-[350px] tracking-wide leading-7 font-medium text-center">
                    Get ready to envy the tech world at EnvyUS, our college's spectacular tech fest! Join us on a journey of innovation, inspiration, and limitless possibilities. Unlock your tech potential and witness the future firsthand as we unleash a world of thriller events, collaboration, and endless possibilities. Save the date and be a part of our legacy as we continue to flourish and rewind the tech fest magic! We look forward to seeing you there!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
