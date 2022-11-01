import React, { useState } from "react";
import {motion} from 'framer-motion'

const tabs = [
  {
    id: "1",
    title: "Obig-Technology",
    date: "August 2020 - present",
    desp1: "Write Readable, Maintainable, Performant codes.",
    desp2:
      "Work with different technology: Javascript, Typescript, Reactjs, Nextjs, Tailwind, Storybook and Framer-Motion",
    desp3: "Work hand in hand with backend team and design team",
  },
  {
    id: "2",

    title: "Spottr",
    date: "April 2022 - May 2022",
    desp1: "Redesigned the User Interface.",
    
    desp3: "Implemented usage of JSON Map and a Globe in the UI.",
  },
];

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState("1");
  const handleSetTab = (e) => {
    setCurrentTab(e.target.value);
  };
  return (
    <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
      <div className="flex md:justify-start md:flex-col md:w-[30%]  ">
        {tabs.map((tab, i) => (
          <button key={i}
            className={`flex-1 md:flex-grow-0 :text-lg font-semibold px-3 py-2 border-b-4 md:border-b-0 md:border-l-4 border-[#6fdcbfe6] text-[#333333] ${
              currentTab === tab.id ? "bg-[#6fdcbfe6]  border-[#FAF4B7] " : " "
            }`}
            value={tab.id}
            onClick={handleSetTab}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <motion.div initial={{ x: 350 }}
        animate={{ x: 0 }}
        className=" md:w-[60%]">
        {tabs.map((tab, i) => (
          <div key={i}>
            {currentTab === `${tab.id}` && (
              <div className="">
                <p className=" text-lg sm:text-xl font-black md:text-2xl md:font-bold">
                  Frontend Developer @{" "}
                  <span className="text-[#6fdcbfe6]">{tab.title}</span>{" "}
                </p>
                <p className=" text-sm md:text-base font-semibold mt-1">{tab.date}</p>
                <ul>
                <li className="before:content-['▹'] before:absolute before:left-0 before:text-[#6fdcbfe6] before:text-2xl text-base md:text-xl pl-8 relative font-semibold  text-[#333333] font-mosk mt-5 ">
                    {tab.desp1}
                    </li>
                    <li className="before:content-['▹'] before:absolute before:left-0 before:text-[#6fdcbfe6] before:text-2xl text-base md:text-xl pl-8 relative font-semibold  text-[#333333] font-mosk mt-5 ">
                    {tab.desp2}
                    </li>
                    <li className="before:content-['▹'] before:absolute before:left-0 before:text-[#6fdcbfe6] before:text-2xl text-base md:text-xl pl-8 relative font-semibold  text-[#333333] font-mosk mt-5 ">
                    {tab.desp3}
                    </li>
                </ul>
                

              </div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tabs;
