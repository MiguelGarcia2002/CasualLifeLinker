import { useState } from "react"

export const CommanderDamageText = () =>{
    const [commanderDamage, setCommanderDamage] = useState(0)

    const damage = () =>{
        setCommanderDamage(commanderDamage+1)
    }
    const remove = () =>{
        setCommanderDamage(commanderDamage-1)
    }

    return(
        <div className="flex items-center ">
            <h1 className=" "> Commander Damage:  </h1>
            <h1 className="text-3xl">  {commanderDamage} </h1>
            <h1 className="text-3xl text-green-500 hover:cursor-pointer" onClick={damage}> + </h1>
            
            <h1 className="text-3xl text-red-500 hover:cursor-pointer" onClick={remove}> - </h1>
        </div>
    )
}