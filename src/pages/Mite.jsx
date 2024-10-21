

export const Mite = ({email})=>{

  return(

    <div className="bg-white border border-zinc-300 mt-10 p-3 flex flex-col gap-6 rounded">
            
            <p className="text-lg text-zinc-500">7Days of Codeee faz o L</p>
            <div className="flex flex-col sm:justify-between sm:flex-row">
              <span className="text-sky-500">{email}</span>
              <span className="text-sm text-zinc-500">16/10/2024, 8:50:32 AM</span>
            </div>

    </div>
  )

}