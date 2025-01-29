import React from 'react'
import Header from './Header'
import {Routes, Route ,Router } from "react-router";
import Register from './Register'
import Signin from './Signin'
import Hero from './Hero'

const App = () => {
  return (
     <div>
<Routes>
 <Route index element={<Header/> } />
 <Route path="/Signin" element={<Signin/>} />
 <Route path="/Register" element={<Register/>} />
 <Route path="/App" element={<App/>} />
 <Route  element={<Hero/>} />
</Routes>
     </div>


  )
}

export default App