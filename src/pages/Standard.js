import { useState } from "react"
import { LifeCards } from "../components/LifeCards";

export const Standard = ()=>{
    return(
        <div >
            <h1 className="text-3xl"> THIS IS THE PAGE FOR STANDARD and general 2v2 formats</h1>
            
            <div className="flex flex-row space-x-80 justify-center items-center">
                <LifeCards hp= {20} playerName={"BagelsOstrich"}/>
                <LifeCards hp= {20} playerName={"Metalsonic102"}/>
            </div>
            
        </div>
    )
}
