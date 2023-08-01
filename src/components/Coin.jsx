import { useState, useEffect } from "react" 

export const Coin = ({visible}) =>{
    const [coinFace, setCoinFace] = useState()
    const [coinArray, setCoinArray] = useState([1])
    const [displayResult, setDisplayResult] = useState(false)
    
    useEffect(() =>{
        if(visible){
            setDisplayResult(false)
  
            const coinFlip = () => { 
              const randomNum = Math.floor(Math.random() * 2) + 1;
              if (randomNum === 1){
                setCoinFace("H")
              }
              else{
                setCoinFace("T")
              }
              setCoinArray((prevCoinFace) => [...prevCoinFace, randomNum]);
            };
            
            if (coinArray.length < 6) {
              const interval = setInterval(coinFlip, 400);
              return () => clearInterval(interval);
            }
            setDisplayResult(true)
        }

    }, [coinFace, displayResult, coinArray])

    const tossCoin = () =>{
        setCoinArray([])
    }

    return(
    <>
        {visible && (
        <div className=" w-44 flex-wrap h-44 flex flex-col justify-center items-center">
            <div className="w-24 h-24 rounded-full bg-white flex justify-center items-center rounded-md">        
                <h1 className="text-3xl flex justify-center items-center"> {coinFace} </h1>
            </div>

            {displayResult && <h1 className="flex flex-row text-white text-2xl">You Flipped a {coinArray[coinArray.length-1]} </h1>}
            {displayResult && <button onClick={tossCoin} className="text-white"> Re-Flip! </button>  }
        </div> 
        )}   
    </>)
}