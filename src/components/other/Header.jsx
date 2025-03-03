import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Header = (props) => {
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser)
      setLoggedInUserData(parsedUser.data)  
    }
  }, [])

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
    window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{loggedInUserData?.firstName || "User"} 👋</span>
      </h1>
      <button onClick={logOutUser} className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>
        Log Out
      </button>
    </div>
  )
}

export default Header
