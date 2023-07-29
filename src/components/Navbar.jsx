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
        <div className="w-full sticky top-0 z-10 left-0  bg-verdigris font-sans ">
            <div className="flex flex-row p-1 items-center justify-between">
                <div className="flex hover:cursor-pointer">
                    <img  src={logo} className="h-20 object-contain hover:cursor-pointer" onClick={homeClick}/> 
                    <h1  className="text-3xl hover:cursor-pointer flex justify-center items-center " style={{ marginLeft: '0' }} onClick={homeClick}> Casual Life Linker</h1>  
                </div>
                <div className="flex justify-center items-center space-x-4 mr-8">
                    <button onClick={commanderClick} href='/Commander' className=" hover:bg-snow"> Commander </button>
                    <button onClick={standardClick} href='/Standard'  className="p-3 border-2 rounded-md hover:bg-snow h-12 "> Standard</button>  
                </div>

            </div>
             
            
            
            
        </div>
    )
}