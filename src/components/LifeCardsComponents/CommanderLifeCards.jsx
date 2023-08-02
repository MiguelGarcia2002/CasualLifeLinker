    import { useEffect, useState } from "react"
    import { CommanderDamageText } from "../CommanderDamageText"


    export const CommanderLifeCards = ({hp, playerName, damageCount}) =>{
        const initialLife = parseInt(hp)
        const [life, setLife] = useState(initialLife)
        const [cardColor, setCardColor] = useState("bg-redViolet")
        const [plusVisible, setPlusVisible] = useState("invisible")
        const [minusVisible, setMinusVisible] = useState("invisible")
        const [commanderDamage, setCommanderDamage] = useState([ ])
        const [switch1, setSwitch1] = useState(true)
        const [switch2, setSwtich2] = useState(false)

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

        const knockOut = () =>{
            if(life <=0){
                setCardColor("bg-black")
            }
            else{
                setCardColor("bg-gray-500")
            }
        }

        useEffect(() =>{
            knockOut()
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

        const changeCard = () =>{
            if (switch1 === false) {
                setSwitch1(true)
                setSwtich2(false)
            }
            else{
                setSwitch1(false)
                setSwtich2(true)
            }
        }


        return(
                <div className={` ${cardColor} w-[320px] h-[270px] custom-playerBG-image flex flex-col text-snow  w-80 rounded-lg shadow-lg m-3 overflow-hidden border-2 border-redViolet`}>
                
            <div className="text-3xl flex justify-center pt-1  ">
                <h1 className="hover:cursor-pointer" onClick={changeCard} >{playerName}</h1>
            </div>
             
                <hr  className="mt-2 pt-2 border-redViolet"/>

                {switch1 && <div className={`${switch1} `}>
                    <div className="w-full  flex justify-center items-center">
                        <span onClick={lifeGain} className=" inline-block text-center hover:text-green-500 cursor-pointer text-3xl "> Life up</span>  
                    </div>
                    

                    <div className="flex  items-center flex-col"> 
                        <div className="flex flex-row items-center justify-center gap-x-8">
                            <h1 className={`text-7xl  text-green-500 ${plusVisible}`}> +1 </h1>
                            <h1 className="text-7xl my-7 mr-5"> {life} </h1>
                            <h1 className={`text-7xl  text-red-500 ${minusVisible}`}> -1</h1>  
                        </div>  
                    </div>
                    
                    <div className="w-full flex justify-center items-center">
                        <span onClick={lifeLoss} className=" inline-block text-center hover:text-red-500 cursor-pointer text-3xl"> Life down</span>
                    </div>
                
                </div> }

                {switch2 && <div className="pl-2 ">
                    <div class="overflow-y-auto h-48 ">
                        {Object.keys(commanderDamage).map ((player, index) =>(
                            <CommanderDamageText setSymbol={"CLB"} trigger ={1} name = {`Commander Dmg ${index+1}` }/>
                        ))}
                    <CommanderDamageText setSymbol={"NPH"} trigger = {1} name = {"Poison"}/>
                    <CommanderDamageText setSymbol={"NPH"} trigger = {2}  name = {"Ticekts"}/>
                    <CommanderDamageText setSymbol={"NPH"} trigger = {3}  name = {"Energy"}/>
                       
                        
                    </div>    
                </div>
                }

                

            </div>
        )
    }