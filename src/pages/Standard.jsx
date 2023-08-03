import { useState } from "react"
import { LifeCards } from "../components/LifeCardsComponents/LifeCards.jsx" 
import { DiceTwenty } from "../components/TrayComponents/DiceTwenty";
import { DiceFour } from "../components/TrayComponents/DiceFour";
import { DiceSix } from "../components/TrayComponents/DiceSixr";
import { DiceTwelve } from "../components/TrayComponents/DiceTwelve";
import { Coin } from "../components/TrayComponents/Coin";


export const Standard = ()=>{
    const [diceVisible, setDiceVisible] = useState(false);

    const [hiddenDice4, setHiddenDice4] = useState();
    const [hiddenDice12, setHiddenDice12] = useState();
    const [hiddenDice6, setHiddenDice6] = useState();
    const [hiddenDice20, setHiddenDice20] = useState();
    const [hiddenCoin, setCoinHidden] = useState();

    
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



    return(
        <div className="flex flex-col w-full">
        <div className=" subtract-nav w-full ">
        <div className="flex flex-col items-center justify-center custom-standardBG-image w-full h-full">
            
        <div className="h-full w-full">

        

            <div className="flex mr-20  flex-row space-x-10 justify-center mt-32  items-center">
            <div className=" flex ">

              <div className="flex justify-center  items-center bg-verdigris flex-col rounded-md sticky top-32 z-0">
                <h1 className=" text-3xl text-white bg-blue-500 p-2 rounded-top-md">
                  Options
                </h1>
                <hr className="border-black"/>

                <div className=" bg-verdigris text-white ">
                    <h1 className="text-1xl hover:cursor-pointer p-1 hover:text-orange-200" onClick={diceVisibleHandle6}> Roll a D6</h1>
                  <h1
                  className="text-1xl hover:cursor-pointer p-1 hover:text-orange-200"
                  onClick={diceVisibleHandle4}> 
                  Roll a D4
                </h1>

                <h1
                  className="text-1xl hover:cursor-pointer p-1 hover:text-orange-200"
                  onClick={diceVisibleHandle12}>         
                  Roll a D12
                </h1>

                <h1
                  className="text-1xl hover:cursor-pointer p-1 hover:text-orange-200"
                  onClick={diceVisibleHandle20}>  
                  Roll a D20
                </h1>

                <h1 className="text-1xl hover:cursor-pointer p-1 hover:text-orange-200"
                  onClick={coinVisibleHandle}>
                  Flip a coin
                </h1>

                </div>
                
                
              </div>

            </div>

                <LifeCards hp= {20} playerName={"Player1"}/>

                <div className="flex custom-dicetraybg-image justify-center items-center pt-5 w-[280px] h-[255px] bg-red-500 flex flex-col text-snow  w-80 rounded-lg shadow-lg m-3 overflow-hidden border-2 border-redViolet">
                
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


                <LifeCards hp= {20} playerName={"Player 2"}/>
            </div>

        </div>
    
            </div>
            </div>    
        </div>
    )
}
