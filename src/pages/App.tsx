import React from 'react'
import Header from './Header'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Register from './Register'
import Signin from './Signin'
import Hero from './Hero'
import Marketplace from './Marketplace';
import Card from './Card';
import Team from './Team';
import Contact from './Contact';
import Mesagge from './Mesagge';
const App = () => {
  return (
     <div>
      <Header  />
<Routes>
<Route path="/Mesagge" element={<Mesagge/>} />
<Route path="/Contact" element={<Contact/>} />
<Route path="/Team" element={<Team/>} />
<Route path="/Card" element={<Card/>} />
<Route path="/Marketplace" element={<Marketplace/>} />
 <Route path="/Signin" element={<Signin/>} />
 <Route path="/Register" element={<Register/>} />
 <Route  index  element={<Hero/>} />

</Routes>

     </div>


  )
}

export default App