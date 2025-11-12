import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Pages/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Data from './Pages/Context'
import Cart from './Pages/Cart'
import Billingpage from './Pages/Billingpage'
import Favourite from './Pages/Favourite'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Payment from './Pages/Paymentdone'

function App() {
  let [demos,setDemos] = useState([]);
  let [count,setCount] = useState({});
  let [liked,setLiked] = useState([]);


  let ADDTOLIKE = (prod) => {
    let add = liked.find((d) => d.id == prod.id)
    if(!add){
      setLiked([...liked,prod])
    }
    else{
      alert("Product added")
    }
  }
  let REMOVEFROMLIKE = (prod) => {
    let rmv = liked.filter((a)=> a.id !== prod)
    setLiked(rmv)
  }

  let ADDTOCART = (val) => {
      let add= demos.find((bb) => bb.id == val.id)
      if(!add){
        setDemos([...demos,val])
      }
      else{
        alert("Product is alredy add in cart ")
      }
  }
  let REMOVEFROMCART = (val) => {
  let rmv = demos.filter((a)=> a.id !== val);
  setDemos(rmv);
  setCount((prev) => {
    let update={...prev}
    delete update[val]
    return update
  }

  )
  }



  return(
    <>
    <Data.Provider value={{demos,setDemos,ADDTOCART,REMOVEFROMCART,count,setCount,ADDTOLIKE,liked,setLiked,REMOVEFROMLIKE}}>

    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='about' element={<About/>}></Route>
          <Route path='contact' element={<Contact/>}></Route>
          <Route path='cart' element={<Cart/>}></Route>
          <Route path='favt' element={<Favourite/>}></Route>
          <Route path='login' element={<Login/>}></Route>
          <Route path='register' element={<Register/>}></Route>
          <Route path='payment' element={<Payment/>}></Route>

        </Routes>
    </BrowserRouter>
    </Data.Provider>
    </>

  )
}

export default App
