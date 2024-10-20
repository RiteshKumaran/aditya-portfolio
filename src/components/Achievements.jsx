"use client";

import Ach_prop from "./Ach_prop";
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

const Achievement = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="achievements"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 ">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
            Achievements
          </h1>

          <div
            className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-3"
            data-aos="zoom-in-up"
          >
            <Ach_prop
              title="Kaladeioscope"
              para="- On-spot topic speech award for best presenter"
            />
            <Ach_prop
              title="National level archer"
              para="- I have 4 silver medals and 1 gold medal in national level archery"
            />

            <Ach_prop
              title="National level airrifle shooting"
              para="- I have 3 gold medals and 1 silver medal in national level shooting"
            />
            <Ach_prop
              title="Extra"
              para="- Apart from these i have a combined of 45 gold medals 22 silver medals and 27 bronze medals in various competition levels in archery and air rifle making it a total of 94 medals."
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Achievement;
