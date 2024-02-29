import { useContext } from "react"
import React from 'react'
import UserContext from "../context/UserContext"

function Profile() {
    const {user} = useContext(UserContext)
    if(!user) return <h1>Please Login</h1>
  return (
    <div> Welcome {user.username} {user.password}</div>
  )
}

export default Profile