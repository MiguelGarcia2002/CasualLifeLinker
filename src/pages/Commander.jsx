import { useState } from "react";
import { CommanderLifeCards } from "../components/CommanderLifeCards";
import { useEffect } from "react";
import { DiceTwenty } from "../components/DiceTwenty";
import { DiceFour } from "../components/DiceFour";
import { DiceSix } from "../components/DiceSixr";
import { DiceTwelve } from "../components/DiceTwelve";
import { Coin } from "../components/Coin";

export const Commander = () => {
  const [card, setCard] = useState("");
  const [playerCount, setPlayerCount] = useState("");
  const [inputValue, setInputValue] = useState(playerCount);

  const [players, setPlayers] = useState([]);

  const [display, setDisplay] = useState(false);
  const [displayOptions, setDisplayOptions] = useState(true);
  const [life, setLife] = useState("");

  const [diceVisible, setDiceVisible] = useState(false);

  const [hiddenDice4, setHiddenDice4] = useState();
  const [hiddenDice12, setHiddenDice12] = useState();
  const [hiddenDice6, setHiddenDice6] = useState();
  const [hiddenDice20, setHiddenDice20] = useState();
  const [hiddenCoin, setCoinHidden] = useState();

  const handlePlayerChange = (e) => {
    setPlayerCount(e.target.value);
  };

  let lifeTrack = 0;
  const handleLifeChange = (e) => {
    setLife(e.target.value);
    lifeTrack = life;
  };

  const handleClick = (event) => {
    event.preventDefault();
    setInputValue(playerCount);
    const newPlayers = {};
    for (let i = 1; i <= playerCount; i++) {
      newPlayers[`Player ${i}`] = null;
    }
    setPlayers(newPlayers);
    setDisplay(true);
    setDisplayOptions(false);
  };

  const isDisabled = () => {
    return playerCount.trim() !== "" && life.trim() !== "" && !isNaN(playerCount) && !isNaN(life);
  };
  const ifDisabled = isDisabled() ? "bg-blue-500" : "bg-red-500";

  const restart = () => {
    setLife(lifeTrack);
  };

  const coinVisibleHandle= () => {
    setDiceVisible(true);
    setCoinHidden(true)

    setHiddenDice6(false);
    setHiddenDice12(false);
    setHiddenDice4(false);
    setHiddenDice20(false);
  };


  const diceVisibleHandle6 = () => {
    setDiceVisible(true);
    setHiddenDice6(true);

    setCoinHidden(false)
    setHiddenDice12(false);
    setHiddenDice4(false);
    setHiddenDice20(false);
  };

  const diceVisibleHandle4 = () => {
    setDiceVisible(true);
    setHiddenDice4(true);

    setCoinHidden(false)
    setHiddenDice12(false);
    setHiddenDice6(false);
    setHiddenDice20(false);
  };
  const diceVisibleHandle12 = () => {
    setDiceVisible(true);
    setHiddenDice12(true);

    setCoinHidden(false)
    setHiddenDice4(false);
    setHiddenDice6(false);
    setHiddenDice20(false);
  };
  const diceVisibleHandle20 = () => {
    setDiceVisible(true);
    setHiddenDice20(true);

    setCoinHidden(false)
    setHiddenDice12(false);
    setHiddenDice4(false);
    setHiddenDice6(false);
  };

  const diceInvisibleHandle = () => {
    console.log("Dice visible was clicked");
    setCoinHidden(false);
    setHiddenDice12(false);
    setHiddenDice4(false);
    setHiddenDice20(false);
    setHiddenDice6(false);
  };



  

  return ( <>
    
          
      {displayOptions && (
      <div className="flex flex-col w-full">
      <div className="text-white w-full subtract-nav">
      <div className="flex flex-col items-center pb-20 justify-center custom-commanderbg-image w-full h-full">

        <div className=" w-96 text-white flex flex-col justify-center items-center p-6 rounded-md">
          <h1 className="text-white text-3xl custom-size-title mb-4">Commander </h1>
          <p> The most casual and popular format in MTG </p>
          <h1 className="custom-size-190"> Start a pod </h1>
          <form className="flex flex-col ">
            <label className=" text-2xl mt-4"> Player Count </label>
            <input
              className="bg-transparent focus:outline-none border border-white rounded-md focus:ring-0 p-1"
              type="text"
              id="userCount"
              onChange={handlePlayerChange}
              value={playerCount}
            />

            <label className="text-2xl mt-4"> Starting Life </label>
            <input
              className="bg-transparent focus:outline-none border border-white rounded-md focus:ring-0 p-1"
              type="text"
              id="lifeCount"
              onChange={handleLifeChange}
              value={life}
            />
            <button
              className={`${ifDisabled} rounded-md p-2 mt-4 border-2 text-white-500 border-white-500 hover:bg-gray-500 w-56`}
              onClick={handleClick}
              disabled={!isDisabled()}
            >
              Start Game
            </button>
          </form>
          
        </div>

        </div>
        </div>
        </div>
      )}
          
      {display && (
        <div className="flex flex-col w-full">
        <div className=" subtract-nav w-full ">
        <div className="flex flex-col items-center justify-center custom-commanderbattlefield-image w-full h-full">

        <div className="h-full w-full">
        <div className=" ml-5 ">
          <div className="flex  ">
            <div className=" ">
              <div className="flex space-x-2 flex-col bg-white rounded-md sticky top-32 z-0">
                <h1 className=" text-3xl text-white bg-blue-500 rounded-top-md">
                  {" "}
                  Options!{" "}
                </h1>

                <h1
                  className="text-1xl hover:bg-blue-500 hover:cursor-pointer border-2 p-1 rounded-md"
                  onClick={diceVisibleHandle6}
                >
                  {" "}
                  Roll a D6{" "}
                </h1>
                <h1
                  className="text-1xl hover:bg-blue-500 hover:cursor-pointer border-2 p-1 rounded-md"
                  onClick={diceVisibleHandle4}
                >
                  {" "}
                  Roll a D4{" "}
                </h1>
                <h1
                  className="text-1xl hover:bg-blue-500 hover:cursor-pointer border-2 p-1 rounded-md"
                  onClick={diceVisibleHandle12}
                >
                  {" "}
                  Roll a D12{" "}
                </h1>
                <h1
                  className="text-1xl hover:bg-blue-500 hover:cursor-pointer border-2 p-1 rounded-md"
                  onClick={diceVisibleHandle20}
                >
                  {" "}
                  Roll a D20{" "}
                </h1>
                <h1 className="text-1xl hover:bg-blue-500 hover:cursor-pointer border-2 p-1 rounded-md">
                  {" "}
                  Restart game
                </h1>
                <h1 className="text-1xl hover:bg-blue-500 hover:cursor-pointer border-2 p-1 rounded-md"
                onClick={coinVisibleHandle}
                >
                  {" "}
                  Flip a coin
                </h1>
              </div>
            </div>

            <div className="flex pl-7 flex-wrap justify-center">
              {Object.keys(players).map((player, index) => (
                <div>
                  <CommanderLifeCards
                    hp={life}
                    playerName={`Player ` + (index+1)}
                    damageCount={playerCount}
                  />{" "}
                </div>
              ))}{" "}

              <div className=" ">
                <div className="flex custom-dicetraybg-image justify-center items-center pt-5 w-[320px] h-[268px] bg-red-500 flex flex-col text-snow  w-80 rounded-lg shadow-lg m-3 overflow-hidden border-2 border-redViolet">
                <h1 className="text-3xl"> Dice Tray  </h1>

                {hiddenDice12 && (
                <div className="flex flex-col text-black items-center">
                  <DiceTwelve visible={diceVisible} />
                  <h1
                    className="hover:cursor-pointer text-white hover:text-red-500"
                    onClick={diceInvisibleHandle}
                  >
                    {" "}
                    Close{" "}
                  </h1>
                </div>
              )}
              {hiddenDice4 && (
                <div className="flex flex-col text-black items-center">
                  <DiceFour visible={diceVisible} />
                  <h1
                    className="hover:cursor-pointer text-white hover:text-red-500"
                    onClick={diceInvisibleHandle}
                  >
                    {" "}
                    Close{" "}
                  </h1>
                </div>
              )}
              {hiddenDice20 && (
                <div className="flex flex-col text-black items-center">
                  <DiceTwenty visible={diceVisible} />
                  <h1
                    className="hover:cursor-pointer text-white hover:text-red-500"
                    onClick={diceInvisibleHandle}
                  >
                    {" "}
                    Close{" "}
                  </h1>
                </div>
              )}
              {hiddenDice6 && (
                <div className="flex flex-col text-black items-center">
                  <DiceSix visible={diceVisible} />
                  <h1
                    className="hover:cursor-pointer text-white hover:text-red-500"
                    onClick={diceInvisibleHandle}
                  >
                    {" "}
                    Close{" "}
                  </h1>
                </div>
              )}

              {hiddenCoin && (
                <div className="flex flex-col text-black items-center">
                  <Coin visible={diceVisible} />
                  <h1
                    className="hover:cursor-pointer text-white hover:text-red-500"
                    onClick={diceInvisibleHandle}
                  >
                    {" "}
                    Close{" "}
                  </h1>
                </div>
              )}

              </div>
              </div>
              


              
            </div>


          </div>
        </div>
      </div>

      </div>
      </div>
      </div>
      )}

    </>

  );
};
