import React, { useState } from 'react';


const Home = () => {
const [user]=useState(localStorage.email)
  return (
    <div>Welcome {user}</div>
  )
}

export default Home