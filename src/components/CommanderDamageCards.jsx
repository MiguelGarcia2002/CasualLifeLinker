import { useState } from "react"

export const CommanderDamageCards = () =>{
    const[life, lifeChange] = useState(0)

    const lifeLoss = () =>{
        lifeChange(life-1)
    }

    const lifeGain = () =>{
        lifeChange(life+1)
    }

    return(
        <div className="bg-charcoal border-2 border-blue-600 flex flex-col margin-auto p-2 w-20 rounded-md overflow-hidden">
            <h1 onClick={lifeGain} className="hover:cursor-pointer text-center"> up </h1>
            <h1 className="text-center">{life} </h1>
            <h1 onClick={lifeLoss} className="hover:cursor-pointer text-center"> down </h1>
        </div>
    )
}