import logo from "../images/logo.png"

export const Navbar = () =>{

    const standardClick = () =>{
        window.location.pathname = '/Standard'
    }

    const commanderClick = () =>{
        window.location.pathname = '/Commander'
    }

    const homeClick = () =>{
        window.location.pathname = '/Home'
    }

    return(
        <div className=" bg-yinMnBlue p-2 flex flex-row space-x-5">
            
            <img onClick={homeClick} src={logo} className="h-24 object-contain hover:cursor-pointer"/> 
            <h1 onClick={homeClick} className="text-3xl hover:cursor-pointer"> Casual Life Linker</h1>
           
            
            <button onClick={commanderClick} href='/Commander' className="p-3 border-2 rounded-md outline-offset-2 hover:bg-snow"> Commander </button>
            <button onClick={standardClick} href='/Standard'  className="p-3 border-2 rounded-md hover:bg-snow"> Standard</button> 
            
        </div>
    )
}