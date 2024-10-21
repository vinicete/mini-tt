import { useState } from 'react';

import {useForm} from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const FormSignUp = ()=>{

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()
  
  const [requesting, setRequesting] = useState(false)

  const onSubmit = ({email, senha}) => {

    setRequesting(true);
    const auth = getAuth()
    createUserWithEmailAndPassword(auth,email,senha)
      .then((credential) =>{
        localStorage.setItem("access-token",credential.user.accessToken)
        console.log({email,senha}); 
        navigate('/sign-in')
      })
      .catch((error) => console.error(error.message))
      .finally(()=> setRequesting(false))
    
    
  };

  return(
    <div className='flex flex-col items-center gap-1 w-80'>
      <h1 className='text-2xl text-sky-500'>Mini-Twitter</h1>
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 w-full mt-3'>
      <input className='border w-full rounded pb-3 px-2 pt-1 text-md border-zinc-300 text-sm' placeholder='email@exemplo.com' type="email" {...register('email', { required: 'Email é obrigatório' })} />
      {errors.email && <p className='text-sm text-red-600'>{errors.email.message}</p>}
      <input className='border w-full rounded pb-3 px-2 pt-1 text-md border-zinc-300 text-sm' placeholder='Senha' type="password" {...register('senha', { required: 'Senha é obrigatória' })} />
      {errors.senha && <p className='text-sm text-red-600'>{errors.senha.message}</p>}
      <button className='bg-[#10B981] text-white font-light pb-3 px-2 pt-1 rounded text-sm mt-3' type='submit'>Criar uma nova conta</button>
    </form>
    <span className='text-xs text-zinc-500 font-medium'>Já possui uma conta? <Link className='text-[#0EA5E9]' to={'/sign-in'}>Acesse agora! </Link></span> 

    </div>
   
  )
}

export const FormSignIn = ()=>{

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()
  const [requesting, setRequesting] = useState(false)
  
  const onSubmit = ({email, senha}) => {

    setRequesting(true);
    const auth = getAuth()
    signInWithEmailAndPassword(auth,email,senha)
      .then((credential) =>{
        localStorage.setItem("access-token",credential.user.accessToken)
        console.log({email,senha}); 
        navigate('/feed')
      })
      .catch((error) => console.error(error.message))
      .finally(()=> setRequesting(false))
    
    
  };

  return(
    <div className='flex flex-col items-center gap-1 w-80'>
      <h1 className='text-2xl text-sky-500'>Mini-Twitter</h1>
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 w-full mt-3'>
      <input className='border w-full rounded pb-3 px-2 pt-1 text-md border-zinc-300 text-sm' placeholder='email@exemplo.com' type="email" {...register('email', { required: 'Email é obrigatório' })} />
      {errors.email && <p className='text-sm text-red-600'>{errors.email.message}</p>}
      <input className='border w-full rounded pb-3 px-2 pt-1 text-md border-zinc-300 text-sm' placeholder='Senha' type="password" {...register('senha', { required: 'Senha é obrigatória' })} />
      {errors.senha && <p className='text-sm text-red-600'>{errors.senha.message}</p>}
      <button className='bg-[#10B981] text-white font-light pb-3 px-2 pt-1 rounded text-sm mt-3' type='submit'>Acesse Agora</button>
    </form>
    <span className='text-xs text-zinc-500 font-medium'>Não possui uma conta? <Link className='text-[#0EA5E9]' to={'/sign-up'}>Crie uma agora! </Link></span>

    </div>
   
  )
}
