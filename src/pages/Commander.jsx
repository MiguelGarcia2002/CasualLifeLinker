import { useState } from "react";
import { CommanderLifeCards } from "../components/CommanderLifeCards";
import { useEffect } from "react";
import { DiceTwenty } from "../components/DiceTwenty";
import { DiceFour } from "../components/DiceFour";
import { DiceSix } from "../components/DiceSixr";
import { DiceTwelve } from "../components/DiceTwelve";

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
  /*fetch("https://api.magicthegathering.io/v1/cards")
    .then((res) => res.json())
    .then((data) =>{
        console.log(data.cards[0].name)
        setCard(data.cards[0].name)
    })
    */

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
    return playerCount !== "" && life !== "";
  };
  const ifDisabled = isDisabled() ? "bg-blue-500" : "bg-red-500";

  const restart = () => {
    setLife(lifeTrack);
  };

  const diceVisibleHandle6 = () => {
    setDiceVisible(true);
    setHiddenDice6(true);

    setHiddenDice12(false);
    setHiddenDice4(false);
    setHiddenDice20(false);
  };

  const diceVisibleHandle4 = () => {
    setDiceVisible(true);
    setHiddenDice4(true);

    setHiddenDice12(false);
    setHiddenDice6(false);
    setHiddenDice20(false);
  };
  const diceVisibleHandle12 = () => {
    setDiceVisible(true);
    setHiddenDice12(true);

    setHiddenDice4(false);
    setHiddenDice6(false);
    setHiddenDice20(false);
  };
  const diceVisibleHandle20 = () => {
    setDiceVisible(true);
    setHiddenDice20(true);

    setHiddenDice12(false);
    setHiddenDice4(false);
    setHiddenDice6(false);
  };

  const diceInvisibleHandle = () => {
    console.log("Dice visible was lcicked");
    setDiceVisible(false);
    setHiddenDice12(false);
    setHiddenDice4(false);
    setHiddenDice20(false);
  };

  return (
    <div className="flex flex-wrap justify-center items-center">
      {displayOptions && (
        <div className="bg-gray-500 w-96 flex flex-col p-6 rounded-md">
          <h1 className="text-white-500 text-3xl">Welcome to Commander</h1>

          <form className="flex flex-col ">
            <label className="bg-gray-500 text-2xl mt-4"> Player Count </label>
            <input
              className="focus: outline-none focus:ring-0 focus:border-gray-600 pl-1"
              type="text"
              id="userCount"
              onChange={handlePlayerChange}
              value={playerCount}
            />

            <label className="text-2xl mt-4"> Starting Life: </label>
            <input
              className="focus: outline-none focus:ring-0 focus:border-gray-600 p-1"
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
      )}

      <div className="">{card}</div>

      {display && (
        <div className=" flex flex-wrap">
          <div className="flex subtract-nav ">
            <div className="">
              <div className="flex space-x-2 flex-col bg-white rounded-md sticky top-32 z-0">
                <h1 className=" text-3xl bg-blue-500 rounded-md">
                  {" "}
                  Features!{" "}
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
                  Restart games
                </h1>
              </div>
            </div>

            <div className="flex flex-wrap justify-center">
              {Object.keys(players).map((player, index) => (
                <div>
                  <CommanderLifeCards
                    hp={life}
                    playerName={"Jogoingo"}
                    damageCount={playerCount}
                  />{" "}
                </div>
              ))}{" "}
              {hiddenDice12 && (
                <div className="flex flex-col items-center">
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
                <div className="flex flex-col items-center">
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
                <div className="flex flex-col items-center">
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
                <div className="flex flex-col items-center">
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
