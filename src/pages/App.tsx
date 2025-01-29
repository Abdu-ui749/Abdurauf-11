import React from 'react'
import Header from './Header'
import { Routes, Route } from "react-router"
import Signin from './Signin'
import Register from './Register'
import Card from './Card'
const App = () => {
  return (
    <div>  

<Routes>
 <Route index element={<Header/>} />
 <Route path="/Signin" element={<Signin/>} />
 <Route path="/Register" element={<Register/>} />
 <Route path="/App" element={<App/>} />
 <Route path="/Card" index element={<Card/>} />
</Routes>



 </div>
  )
}

export default App