import { useState, useEffect } from "react"

export const Symbol = ({set}) =>{
    const[symbol, setSymbol] = useState()
    
    let url = `https://api.scryfall.com/sets/${set}`

    useEffect(() =>{
        const fetchData = async ()=>{
            try{
                const result = await fetch(url);
                const data = await result.json()
                setSymbol(data.icon_svg_uri)  
            }
            catch(error){
                console.log("Error bruh F \n", error)
            }
        }
        fetchData()
    }, [symbol])

    return(
        <img className='h-10' src={symbol} alt="Set Icon" />
    )
}