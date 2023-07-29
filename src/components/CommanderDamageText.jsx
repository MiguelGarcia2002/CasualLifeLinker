import { useState, useEffect } from "react"
import { Symbol } from "./Symbol"
import { BlobSvg } from "./BlobSvg.jsx" 

export const CommanderDamageText = ({name, setSymbol, trigger}) =>{

    const [commanderDamage, setCommanderDamage] = useState(0)

    let t1 = false
    let t2 = false
    let t3 = false

    if(trigger ===1){
        t1 = true
        t2 = false
        t3 = false
    }
    if(trigger ===2){
        t1 = false
        t2 = true
        t3 = false
    }
    if(trigger ===3){
        t1 = false
        t2 = false
        t3 = true
    }
    const damage = () =>{
        setCommanderDamage(commanderDamage+1)
    }
    const remove = () =>{
        setCommanderDamage(commanderDamage-1)
    }

    return(
        <div className="flex items-center ">
            { t1 &&  <Symbol set={setSymbol}/>}
            { t2 &&  <BlobSvg trigger={1} set={setSymbol}/>}
            { t3 &&  <BlobSvg trigger={2} set={setSymbol}/>}
            <h1 className=" "> {name}  </h1>
            <h1 className="text-3xl">  {commanderDamage} </h1>
            <h1 className="text-3xl text-green-500 hover:cursor-pointer" onClick={damage}> + </h1>
            
            <h1 className="text-3xl text-red-500 hover:cursor-pointer" onClick={remove}> - </h1>
        </div>
    )
}