import { useEffect, useState } from "react"
import { CommanderDamageText } from "./CommanderDamageText"

export const LifeCards = ({hp, playerName}) =>{
    const [life,setLife] = useState(hp)
    const [cardColor, setCardColor] = useState("bg-gray")
    const [plusVisible, plusSetVisible] = useState("invisible")
    const [minusVisible, minusSetVisible] = useState("invisible")
    const [switch1, setSwitch1] = useState(true)
    const [switch2, setSwtich2] = useState(false)

    const death = () =>{
        if(life<= 0){
            setCardColor("bg-black")
        }
        else{
            setCardColor("bg-gray-600")
        }
    }

    const lifeDown = () =>{
        setLife(life-1);
        minusSetVisible("visible")
        setTimeout(() => {
            minusSetVisible("invisible")
        }, 2000);
    }

    const lifeUp = () => {
        setLife(life + 1);
        plusSetVisible("visible")
        setTimeout(() => {
            plusSetVisible("invisible");
        }, 2000);
    };

    useEffect(() => {
        death();
      }, [life]);
  
    const switchCardFace = () =>{
        if(switch1 === true){
            setSwitch1(false)
            setSwtich2(true)
        }
        else{
            setSwitch1(true)
            setSwtich2(false)
        }
    }


    return(
        <>
         <div className={` ${cardColor} flex flex-col text-snow custom-playerBG-image w-[364px] h-[370px] rounded-lg shadow-lg border-2 border-redViolet`}>
            <span className="text-3xl flex justify-center pt-1 hover:cursor-pointer " onClick={switchCardFace}> {playerName}</span>
            <hr  className="mt-2 pt-2 border-white"/>
            
            {switch1 && 
            <div className="">
                <div className=" w-full flex justify-center items-center">
                    <h1 onClick={lifeUp} className=" inline-block text-center hover:text-green-500 cursor-pointer text-3xl "> Life up</h1>
                </div>
                

                <div className="flex  items-center flex-col"> 
                    <div className="flex flex-row items-center justify-center gap-x-8">
                        <h1 className={`text-7xl  text-green-500 ${plusVisible}`}> +1 </h1>
                        <h1 className="text-7xl my-20"> {life} </h1>
                        <h1 className={`text-7xl  text-red-500 ${minusVisible}`}> -1</h1>  
                    </div> 
                </div>

                <div className="w-full flex items-center justify-center">
                    <span onClick={lifeDown} className=" inline-block text-center hover:text-red-500 cursor-pointer text-3xl"> Life down</span> 
                </div>
                 
            </div>
            }   

            {switch2 &&
            <div className="flex justify-center items-center">
                <div>
                    <CommanderDamageText setSymbol={"NPH"} trigger = {1} name = {"Poison"}/>
                    <CommanderDamageText setSymbol={"NPH"} trigger = {2}  name = {"Ticekts"}/>
                    <CommanderDamageText setSymbol={"NPH"} trigger = {3}  name = {"Energy"}/>
                </div>
            </div>
            }
 

            
        </div>
    </>)
}