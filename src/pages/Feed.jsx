import { Header } from "./Header"


export const Feed = ()=>{

  return(
    <div className="h-screen ">
      <Header/> 
      <div className="h-[calc(100vh-56px)] bg-[#E5E7EB] flex justify-center">
        <div className="w-[80%]">
          <span>Mite agora mesmo...</span>
        </div>
        
      </div>
    </div>
    
  )
}