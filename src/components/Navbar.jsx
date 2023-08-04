import logo from "../images/logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const standardClick = () => {
    window.location.pathname = "/Standard";
  };

  const commanderClick = () => {
    window.location.pathname = "/Commander";
  };

  const homeClick = () => {
    window.location.pathname = "/Home";
  };

  return (
    <div className="w-full sticky top-0 z-10 left-0  bg-verdigris font-sans ">
      <div className="flex text-white flex-row p-1 items-center justify-between">
        <div className="flex hover:cursor-pointer">
        <Link to="/Home" className="hover:cursor-pointer">
            <img src={logo} className="h-20 object-contain hover:cursor-pointer" alt="Logo" />
          </Link>
          <h1
            className="text-3xl hover:cursor-pointer flex justify-center items-center "
            style={{ marginLeft: "0" }}
            onClick={homeClick}
          >
            <Link to="/Home" className="hover:cursor-pointer">
              Casual Life Linker
            </Link>
          </h1>
        </div>
        <div className="flex justify-center items-center space-x-4 mr-8">
          <button
            onClick={commanderClick}
            href="/Commander"
            className="text-2xl hover:text-orange-300"
          >
            Commander
          </button>
          <button
            onClick={standardClick}
            href="/Standard"
            className=" text-2xl  hover:text-orange-300"
          >
            Standard
          </button>
        </div>
      </div>
    </div>
  );
};
