import { useState, useEffect } from "react";

export const BlobSvg = ({trigger}) =>{
    const [symbol,setSymbol] = useState()

    let url 

    if(trigger ===1){
        url = `https://svgs.scryfall.io/card-symbols/TK.svg`
    }
    else{
        url = `https://svgs.scryfall.io/card-symbols/E.svg`
    }

    useEffect(() =>{
        const fetchData = async () =>{
            try{
                //The two awaits are basically saying the two lines are retrieving the URL and blob, and stop the execution
                //Until the promise has been fulfilled 
                //For example the const result will not fully execute until the url comes back 
                const result = await fetch(url);
                const data = await result.blob()
                const dataUrl = URL.createObjectURL(data)
                setSymbol(dataUrl)  
            }
            catch(error){
                console.log("The Fetch did not work F: \n", error)
            }
        }
        fetchData()
    }, [symbol])
    
    return( 
        <img className='h-10' src={symbol} alt="Set Icon" />
    )
}