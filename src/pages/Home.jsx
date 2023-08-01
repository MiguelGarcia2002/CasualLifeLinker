import { useState } from "react";
import { useEffect } from "react";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  const [card, setCard] = useState();
  const setCode = "M21";

  const commanderRoute = () =>{
    window.location.pathname = "/Commander";
  }

  const standardRoute = () =>{
    window.location.pathname = "/Standard";
  }

  return (
    <div className="flex flex-col w-full">
      <div className="text-white subtract-nav w-full subtract-nav">
        <div className="flex flex-col items-center pb-20 justify-center custom-bg-image w-full h-full">
          
          <h1 className="text-white custom-size-225">Casual Life Linker</h1>
          <h1> A web based personal life linker app </h1>
          <div className="px-44 mt-6 text-center">
            <p> LifeLinker is a web app designed to enhance the gaming experience 
            for players of the popular card game Magic: The Gathering. Specifically tailored for 
            Commander and 2v2 Standard formats, LifeLinker serves as a convenient and efficient life tracking tool. This app 
            also has an array of features that are used in normal play such as dice rolling and coin flipping.</p>
          </div>

          <div className="pt-5">
            <h1 className="text-2xl mb-10 flex justify-center"> Choose a format and start</h1>
            <div className="flex justify-between space-x-10">
              <div className="hover:bg-white hover:bg-opacity-20 hover:cursor-pointer" onClick={commanderRoute}>
                <h1 className="text-2xl p-3 border border-white border-[1px] "> Commander </h1>
              </div>
              <div className="hover:bg-white hover:bg-opacity-20 hover:cursor-pointer" onClick={standardRoute}>
                <h1 className="text-2xl p-3 border border-white border-[1px] "> 2v2/Standard </h1>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
