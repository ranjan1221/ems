import React from 'react'

const Headers = (props) => {
  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>
            hello <br /> <span className='text-3xl font-semibold'>👋</span>
        </h1>
        <button onClick={logOutUser} className='bg-red-600  text-lg font-medium px-5 py-2 text-white rounded-sm'>Log Out</button>
    </div>
  )
}

export default Headers