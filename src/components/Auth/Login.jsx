import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const submitHnadler=(e)=>{
    // two way bindidng
    e.preventDefault();
    handleLogin(email,password);
    setemail('')
    setpassword('')

  }
  // e.target-> kis tag ke liyen chal raha hai
  // e.target.value->uski value kya hai 
  return (
    <>
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 border-red-600 p-20 rounded-xl'>
                <form className='flex flex-col items-center justify-center' onSubmit={(e)=>{submitHnadler(e)}}>
                    <input 
                    value={email}
                    onChange={(e)=>{
                      setemail(e.target.value)
                    }}
                    required className='border-2 bg-transparent outline-none border-red-600 text-xl text-white py-3 px-5 rounded-full placeholder:text-white'  type="email" placeholder='Enter your email'/>
                    <input 
                    value={password}
                    onChange={(e)=>{
                      setpassword(e.target.value)
                    }}
                    required type="password"  className='border-2 bg-transparent outline-none border-red-600 text-xl text-white mt-3 py-3 px-5 rounded-full placeholder:text-white' placeholder='enter your password'/>
                    <button className='outline-none mt-7 font-semibold py-2 px-8  border-none bg-red-600 text-xl text-white rounded-full placeholder:text-white'>Log in</button>
                </form>
            </div>
        </div>
    </>
    
  )
}

export default Login