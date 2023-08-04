import { Link } from "react-router-dom";

export const Home = () => {

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
              <div className="hover:bg-white hover:bg-opacity-20 hover:cursor-pointer" >
                <Link to="/Standard">
                  <h1 className="text-2xl p-3 border border-white border-[1px] "> Commander </h1>
                </Link>
              </div>
              <div className="hover:bg-white hover:bg-opacity-20 hover:cursor-pointer" >
              <Link to="/Standard">
                  <h1 className="text-2xl p-3 border border-white border-[1px] "> Commander </h1>
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
  
};
