import { useEffect, useState } from "react"

export const LifeCards = ({hp, playerName}) =>{
    const [life,setLife] = useState(hp)
    const [cardColor, setCardColor] = useState("bg-gray")
    const [plusVisible, plusSetVisible] = useState("invisible")
    const [minusVisible, minusSetVisible] = useState("invisible")

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
  
    

    return(
        <div className={` ${cardColor} flex flex-col text-snow h-96 w-96 rounded-lg shadow-lg border-2 border-redViolet`}>
            <span className="text-3xl flex justify-center pt-1 "> {playerName}</span>
            <hr  className="mt-2 pt-2 border-redViolet"/>
            
            <h1 onClick={lifeUp} className=" inline-block text-center hover:text-green-500 cursor-pointer text-3xl "> Life up</h1>

            <div className="flex  items-center flex-col"> 
                <div className="flex flex-row items-center justify-center gap-x-8">
                    <h1 className={`text-7xl  text-green-500 ${plusVisible}`}> +1 </h1>
                    <h1 className="text-7xl my-20"> {life} </h1>
                    <h1 className={`text-7xl  text-red-500 ${minusVisible}`}> -1</h1>  
                </div> 
                
            </div>

            <span onClick={lifeDown} className=" inline-block text-center hover:text-red-500 cursor-pointer text-3xl"> Life down</span>
        </div>
    )
}