import React, { useState } from 'react'

const ContionalRen = () => {
    const [loggedIn , isLoggedIn] = useState()
  return (
    <div style={{height:"100vh"}}>
        { loggedIn==1 ?  <h1>Loggin</h1>
        :loggedIn==2 ?  <h2>Sign In</h2>
        :<h2>Welcome</h2>
        }
    </div>
  )
}

export default ContionalRen