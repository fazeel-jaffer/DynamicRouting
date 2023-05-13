import React from 'react'
import { useParams } from 'react-router'
const Users = () => {
    const {id}=useParams();
  return (
    <div>User {id}</div>
  )
}

export default Users