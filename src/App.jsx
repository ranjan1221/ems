
import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import Admin from './components/Dashboard/Admin'
import Employee from './components/Dashboard/Employee'
import { setLocalStorage } from './utils/localStorage'
// import { auth } from './context/AuthContext'
import { AuthContext } from './context/AuthProvider'

function App() {
  // localStorage.clear();
  // const [count, setCount] = useState(0)
  // useEffect(() => {
  //   setLocalStorage()
  // }, [])
  const [user, setuser] = useState(null)

  const [loggedInUser, setloggedInUser] = useState(null)
  const [userData,SetUserData] = useContext(AuthContext)
  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setuser(userData.role)
      setloggedInUser(userData.data)
    }

  },[])
  // useEffect(()=>{
  //   const loggedInUser = localStorage.getItem('loggedInUser')
    
  //   if(loggedInUser){
  //     const userData = JSON.parse(loggedInUser)
  //     setUser(userData.role)
  //     setLoggedInUserData(userData.data)
  //   }

  // },[])
  // jitni baar authdata change hoga utni baar
  
  const handlelogin=(email,password)=>{
    if (email == 'admin@example.com' && password == '123') {
      setuser('admin')
      // setloggedInUser()
      localStorage.setItem('loggedInUser',JSON.stringify({role:"admin"}))
    } else if (userData) {
      const employee =  userData.employees.find((e) => email == e.email && e.password == password)
      if(employee){
        setuser('employee')
        setloggedInUser(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }))
      }
     
      
    }
    else {
      alert("Invalid Credentials")
    }
  }

  
  return (
    
     <>
   {!user ?<Login handleLogin={handlelogin}/>:""}
   {user =='admin'?<Admin changeUser={setuser}/>:(user=='employee'?<Employee   changeUser={setuser} data={loggedInUser}/>:null)}
     {/* <Employee/> */}
     {/* <Admin/> */}
     </>
  )
}

export default App
