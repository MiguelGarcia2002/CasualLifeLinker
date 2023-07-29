import { useState } from "react"
import { useEffect } from "react";
import { Navbar } from "../components/Navbar";

export const Home = () =>{
    const [card, setCard] = useState()
    const setCode = 'M21';

    /*fetch("https://api.magicthegathering.io/v1/sets")
    .then((res) => res.json())
    .then((data) =>{
        console.log(data.sets.name)
        setCard(data.sets[0].booster)
    })*/
    
    
    const url = "https://api.scryfall.com/sets"

    useEffect(() =>{
        const fetchData = async () =>{
            try{
              const result = await fetch(`https://svgs.scryfall.io/card-symbols/TK.svg`);
              const data = await result.blob()
              const dataUrl = URL.createObjectURL(data)
              setCard(dataUrl)  
            }
            catch(error){
                console.log("The Fetch did not work F: \n", error)
            }
            
        }
        fetchData()
    }, [])

    /*useEffect(() => {
        // Construct the set symbol URL based on the set code
        const setSymbolURL = `https://gatherer.wizards.com/Handlers/Image.ashx?type=symbol&set=${setCode}&size=large`;
    
        // Set the state variable with the set symbol URL
        setCard(setSymbolURL);
      }, [setCode]);*/

    return(
        <div className="text-white w-full">
          <div className="custom-bg-image"> 
            <Navbar />
            <h1 className="text-3xl"> Casual Life LInker </h1>
          </div>
          
          
        </div>
      );
}