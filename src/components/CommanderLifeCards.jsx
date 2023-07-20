    import { useEffect, useState } from "react"
    import { CommanderDamageCards } from "./CommanderDamageCards"


    export const CommanderLifeCards = ({hp, playerName, damageCount}) =>{
        const [life, setLife] = useState(hp)
        const [cardColor, setCardColor] = useState("bg-redViolet")
        const [plusVisible, setPlusVisible] = useState("invisible")
        const [minusVisible, setMinusVisible] = useState("invisible")
        const [commanderDamage, setCommanderDamage] = useState([ ])

        const lifeLoss =()=>{
            setLife(life-1)
            setMinusVisible("visible")
            setTimeout(() =>{
                setMinusVisible("invisible")    
            }, 2000)
        }

        const lifeGain = () =>{
            //For two seconds show the +1 in green, then back to invisible
            setLife(life + 1);
            setPlusVisible("visible")
            setTimeout(() => {
                setPlusVisible("invisible");
            }, 2000);
        }

        const changeColor = () =>{
            if(life <=0){
                setCardColor("bg-black")
            }
            else{
                setCardColor("bg-gray-500")
            }
        }

        useEffect(() =>{
            changeColor()
        }, [life])

        const addCommanderDamage = () =>{
            const newDamageCounter = {}
            for(let i=1; i<damageCount; i++){
                newDamageCounter[`commanderDamage ${i}`] = null
            }
            setCommanderDamage(newDamageCounter)
        }

        useEffect(() =>{
            addCommanderDamage()
        }, [damageCount]) //What this dpeendency array means... it's the array that the useEffect depends on. the useEffect() updates based on the changes within in the array

        return(
            <div className={` ${cardColor} flex flex-col text-snow  w-80 rounded-lg shadow-lg m-3 overflow-hidden border-2 border-redViolet`}>
                <span className="text-3xl flex justify-center pt-1 "> {playerName}</span>
                <hr  className="mt-2 pt-2 border-redViolet"/>
                
                <span onClick={lifeGain} className=" inline-block text-center hover:text-green-500 cursor-pointer text-3xl "> Life up</span>

                <div className="flex  items-center flex-col"> 
                    <div className="flex flex-row items-center justify-center gap-x-8">
                        <h1 className={`text-7xl  text-green-500 ${plusVisible}`}> +1 </h1>
                        <h1 className="text-7xl my-7"> {life} </h1>
                        <h1 className={`text-7xl  text-red-500 ${minusVisible}`}> -1</h1>  
                    </div>
                    
                </div>

                <span onClick={lifeLoss} className=" inline-block text-center hover:text-red-500 cursor-pointer text-3xl"> Life down</span>

                <div className="flex flex-row space-x-2 justify-center">
                    {Object.keys(commanderDamage).map ((player, index) =>(
                        <CommanderDamageCards />
                    ))}
    
                </div>
                


            </div>
        )
    }