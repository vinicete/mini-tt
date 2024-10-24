import { jwtDecode } from "jwt-decode";
import { Header } from "./Header"
import { useForm } from 'react-hook-form'
import { Mite } from "./Mite";



export const Feed = ()=>{
  const { register, handleSubmit, formState: { errors } } = useForm();
  const user = jwtDecode(localStorage.getItem("access-token"))
  
  const handleClick=(e,user)=>{
    e.preventDefault()
    console.log(user)
  }

  return(
    <div className="h-screen ">
      <Header email={user.email}/> 
      <div className="h-[calc(100vh-56px)] bg-[#E5E7EB] flex justify-center">
        <div className="w-[80%]">
          <form action="">
            <div className="flex flex-col mt-14 gap-2">
              <span>Mite agora mesmo...</span>
              <textarea className="h-36 border border-zinc-300 p-3 rounded resize-none" type="" {...register('mitada', {required: 'Você precisa digitar ao menos um caractere', maxLength: 255})} />
              <span className="text-green-500 text-sm">Você ainda pode digitar 255 caracteres</span>
            </div>
            <div className="flex justify-center sm:justify-end">
              <button onSubmit={()=>{handleClick(event,user)}} className="bg-sky-500 mt-3 sm:mt-0 px-2 py-1 text-white rounded">mitar (mini-twittar)</button>
            </div>
          </form>
          {/*<h2>Seus mites (mini-twittes):</h2>*/}
          <Mite email={user.email}/>
          
        </div>

        
        
      </div>

      
    </div>
    
  )
}