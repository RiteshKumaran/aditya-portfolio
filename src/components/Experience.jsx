"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import IIIT_KOTA from "../assets/IIIT_Kota.png";

import {
  Hackthechain,
  GSSOC,
  IITB,
  Sports,
  IIITians,
  GDSC,
  KDE,
  Oppia,
} from "../constants/Constant";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="experience"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 ">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
            EXPERIENCE
          </h1>

          <div
            className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-3"
            data-aos="zoom-in-up"
          >
            <Exp_prop
              title="Archery Academy"
              subtitle="Coach"
              date="Jan 2023 - present"
              para="- Working as a head coach in vill archery academy. I coach for both archery and air rifle shooting. I work on the weekends. I have been in this sport for about 15 years. 13 years as a sportsman and 2 years as a coach."
            />
            <Exp_prop
              title="Tech company"
              subtitle="Intern"
              date="Mar 2023 - Aug 2023"
              para="- Worked in helping the firm build their personal portfolio and helped them build their brand. I also helped them create a product list and also learnt a thing or few about tax filing. I also got hands on experience in the sales department."
            />

            <Exp_prop
              title="Garage"
              subtitle="Intern"
              date="Mar 2016 - Aug 2016"
              para="- Worked as an intern in a mechanic garage in the role of a junior staff and gained hands-on experience in automotive maintainence tasks"
            />
          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience;
