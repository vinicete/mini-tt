import { Link } from "react-router-dom"


export const Home = ()=>{

  return(
    <div className="flex items-center justify-center h-[100vh] flex-col gap-3">
     <Link to={'/sign-in'}>
        Acesse Agora
     </Link>

     <Link to={'/sign-up'}>
        Registre-se
     </Link>
    </div>
    
  )

}
  



  
