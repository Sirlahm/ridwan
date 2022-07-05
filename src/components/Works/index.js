import React from "react";

import Spottr from "../../assets/images/spottr.jfif";
import weather from "../../assets/images/WEATHER.jfif";
import obig from "../../assets/images/shopabox.jfif";
import forkify from "../../assets/images/forkify.jfif";
import real from "../../assets/images/realEstate.jfif";
import link from '../../assets/images/new-tab.svg'


const Works = () => {
  return (
    <div className="bg-[#D3EBCD] hidden">
      <div className="max-w-5xl mx-auto py-24 md:py-32 lg:px-0 md:px-6 px-3 ">
        <div className="flex justify-between space-x-4 items-center mb-14">
          <p className="xs:text-xl sm:text-2xl md:text-3xl font-black md:tracking-[5px]  font-mosk text-[#333333]">
            03. Project I've Featured{" "}
          </p>
          <span className="h-[3px] md:h-[5px] bg-[#333333] flex-1 "></span>
        </div>
        <div className="space-y-20">
        <div className="grid grid-cols-12 ">
            <div className="col-[1_/_span_7] row-[1_/-1] ">
              <a className=" cursor-pointer" href="https://spottr.app/">
                <div className="bg-[#6fdcbfe6] hover:bg-transparent f">
                  <img
                    src={Spottr}
                    alt=""
                    className="mix-blend-multiply hover:mix-blend-normal filter rounded-md"
                  />
                </div>
              </a>
            </div>

            <div className="col-[7_/_span_11] row-[1_/-1]  z-[5] space-y-2 flex flex-col ">
              <p className="text-2xl font-bold text-right">Spottr</p>
              <div className="bg-[#6fdcbfe6] p-7 rounded-md">
                <p className="text-lg">
                  The SpottR app projects to connect millions of households and
                  businesses in Africa with seamless economic opportunity
                  spotlighting and matching. I redesigned some part of the User Interface.
                </p>
              </div>
              <ul className="flex justify-end space-x-3 text-base">
                <li>Reactjs</li>
                <li>React-Globe-Gl</li>
                <li>React-simple-Maps</li>
              </ul>
              <a className=" cursor-pointer self-end" href="https://spottr.app/">
                <img src={link} alt="Ridwan's Portfolio" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-12 ">
            <div className="col-[6_/_span_11] row-[1_/-1]">
              <a className=" cursor-pointer" href="https://spottr.app/">
                <div className="bg-[#6fdcbfe6] hover:bg-transparent f">
                  <img
                    src={weather}
                    alt=""
                    className="mix-blend-multiply hover:mix-blend-normal filter rounded-md"
                  />
                </div>
              </a>
            </div>

            <div className="col-[1_/_span_6]  row-[1_/-1] text-left z-[5] space-y-2 flex flex-col ">
              <p className="text-2xl font-bold ">Weather App</p>
              <div className="bg-[#6fdcbfe6] p-7 rounded-md">
                <p className="text-lg">
                  A web application that forecasts weather and give prediction
                  on whether for the next few days.
                </p>
              </div>
              <ul className="flex justify-start space-x-3 text-base">
                <li>Reactjs</li>
                <li>Redux</li>
                <li>Redux-Thunk</li>
                <li>Sass</li>
                <li>Axios</li>
                <li>Openweathermap-Api</li>
              </ul>
              <a className=" cursor-pointer self-start" href="https://spottr.app/">
                <img src={link} alt="Ridwan's Portfolio" />
              </a>
              <div>

              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 ">
            <div className="col-[1_/_span_7] row-[1_/-1] rounded-md">
              <a className=" cursor-pointer rounded-md" href="https://forkify-application.herokuapp.com//">
                <div className="bg-[#6fdcbfe6] hover:bg-transparent f rounded-md">
                  <img
                      src={forkify}
                    alt=""
                    className="mix-blend-multiply hover:mix-blend-normal filter rounded-md"
                  />
                </div>
              </a>
            </div>

            <div className="col-[7_/_span_11] row-[1_/-1]  z-[5] space-y-3 flex flex-col ">
            <p className="text-2xl font-bold text-right">Forkify App</p>
              <div className="bg-[#6fdcbfe6] p-7 rounded-md">
                <p className="text-lg">
                A web application that gives in details on how to prepare a
                  recipe.
                </p>
              </div>
              <ul className="flex justify-end space-x-3 text-base">
              <li>Reactjs</li>
                <li>Redux</li>
                <li>Redux-Thunk</li>
                <li>Sass</li>
                <li>Axios</li>
              </ul>
              <a className=" cursor-pointer self-end" href="https://forkify-application.herokuapp.com/">
                <img src={link} alt="Ridwan's Portfolio" />
              </a>
            </div>
          </div>


         

         

          <div className="grid grid-cols-12 ">
            <div className="col-[6_/_span_11] row-[1_/-1]">
              <a className=" cursor-pointer" href="https://spottr.app/">
                <div className="bg-[#6fdcbfe6] hover:bg-transparent f">
                  <img
                    src={obig}
                    alt=""
                    className="mix-blend-multiply hover:mix-blend-normal filter rounded-md"
                  />
                </div>
              </a>
            </div>

            <div className="col-[1_/_span_6]  row-[1_/-1] text-left z-[5] space-y-3 flex flex-col ">
              <p className="text-2xl font-bold ">Shopabox</p>
              <div className="bg-[#6fdcbfe6] p-7 rounded-md">
                <p className="text-lg">
                  A E-commerce web application with a fast checkout.
                </p>
              </div>
              <ul className="flex justify-start space-x-3 text-base">
                <li>Nexjsjs</li>
                <li>Typescript</li>
                <li>Tailwind</li>
                <li>Framer Motion</li>

              </ul>
              <a className=" cursor-pointer self-start" href="https://spottr.app/">
                <img src={link} alt="Ridwan's Portfolio" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-12 ">
            <div className="col-[1_/_span_7] row-[1_/-1]">
              <a className=" cursor-pointer" href="https://real-estate-zeta-dun.vercel.app">
                <div className="bg-[#6fdcbfe6] hover:bg-transparent f">
                  <img
                    src={real}
                    alt=""
                    className="mix-blend-multiply hover:mix-blend-normal filter rounded-md"
                  />
                </div>
              </a>
            </div>

            <div className="col-[7_/_span_11] row-[1_/-1]  z-[5] space-y-3 flex flex-col">
              <p className="text-2xl font-bold text-right">Realtor</p>
              <div className="bg-[#6fdcbfe6] p-7 rounded-md">
                <p className="text-lg">
                  A Real Estate web application. 
                </p>
              </div>
              <ul className="flex justify-end space-x-3 text-base">
                <li>Nextjs</li>
                <li>Chakra UI</li>
                <li>Axios</li>
                <li>RapidApi</li>
              </ul>
              <a className=" cursor-pointer self-end" href="https://real-estate-zeta-dun.vercel.app">
                <img src={link} alt="Ridwan's Portfolio" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
