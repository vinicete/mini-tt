import { useNavigate } from "react-router-dom"

export const handleLogout = (navigate)=>{

  localStorage.removeItem('access-token')
  
  navigate('/')

}
export const Header = ({email})=>{
  const navigate = useNavigate()
  return(
    <header className="flex justify-between items-center h-14 px-6  bg-white border-b border-zinc-300">
      <h2 className="text-lg text-sky-500 font-normal">mini-twitter</h2>
      <div className="flex gap-3 items-center">
        <span className="text-zinc-500">{email}</span>
        <button onClick={()=>{handleLogout(navigate)}} className="bg-red-500 px-2 py-1 text-white rounded">sair</button>
      </div>
    </header>

  )
}



