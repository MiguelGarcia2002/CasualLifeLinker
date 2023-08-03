import { useRef, useState } from "react"
import { useEffect } from "react"

export const DiceSix = ({ visible}) =>{

  const[diceNum, setDiceNum] = useState([1])
  const[displayResult, setDisplayResult] = useState(false)

  useEffect(()=>{
      if(visible){
          setDisplayResult(false)
          const rollDice = () => { 
          const randomNum = Math.floor(Math.random() * 6) + 1;
          setDiceNum((prevDiceNum) => [...prevDiceNum, randomNum]);
          };
          
          if (diceNum.length < 6) {
          const interval = setInterval(rollDice, 400);
          return () => clearInterval(interval);
          }
          setDisplayResult(true)
      }
  }, [visible, diceNum])
  
  const handleRoll = () => {
    setDiceNum([])
  };


  return(
  <>
  {visible && (<div className=" w-44 flex-wrap h-44 flex flex-col justify-center items-center">

      <div className="w-24 h-24 bg-white flex justify-center items-center rounded-md">
          <h1 className="text-3xl flex justify-center items-center"> {diceNum[diceNum.length-1]} </h1>
          
                     
      </div>
      {displayResult && <h1 className="flex flex-row text-white text-2xl">You rolled a {diceNum[diceNum.length-1]}!</h1>}
      {displayResult && <button onClick={handleRoll} className="text-white"> Re-Roll! </button>  }
  </div> ) }
  </>
  )
}