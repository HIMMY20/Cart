import React, { useContext, useState } from 'react'
import Data from './Context'
import { Link } from 'react-router-dom'
import Billingpage from './Billingpage'

const Cart = () => {
    let {demos,REMOVEFROMCART,count,setCount} = useContext(Data)
    let [show,setShow] = useState(false)

    let Inc = (id) => {
        setCount((Prev) =>({
            ...Prev,[id] : (Prev[id] || 1) < 6 ? (Prev[id] || 1) + 1 : 6, 
        }))
    }

    let Dec = (id) => {
        setCount((Prev) =>({
            ...Prev,[id] : (Prev[id] || 1) - 1 ,
        }))
    }
    let handleChangeBuynow = () =>{
        const token = localStorage.getItem("token");
        if(!token){
            alert("Please login before ordering");
            window.location.href = "/login"
        }else{
            setShow(true)
        }
    }
  return (
    <>
        <div className='Home-page'>
            {/* <h1>Products </h1> */}
            <div className='all-products'>
                {
                    demos.map((item) =>{
                        return(
                            <>
                            <div className='product'>
                                <p>{item.id}</p>
                                <div>
                                    <img src={item.image} height={"100px"} />
                                </div>
                                <h3>{item.price} Rs.</h3>
                                <h4>{item.title.slice(0,30)}</h4>
                                <p>{item.description.slice(0,200)}</p>
                                <h3>{item.price * (count[item.id] || 1)} Rs.</h3>
                                <div className='Inc-dec'>
                                    <button onClick={() => Inc(item.id)}>+</button>
                                    <h3>{count[item.id] || 1}</h3>
                                    <button onClick={() => Dec(item.id)}>-</button>
                                </div>
                                <button onClick={() => REMOVEFROMCART(item.id)}>Remove from Cart</button>
                            </div>
                            </>
                        )
                    })
                }
            </div>
            <div className='cart-empty'>
                
                {
                    demos.length == 0 ? <h1>Your Cart is Empth</h1> : 
                    <button className='buy-now' onClick={handleChangeBuynow}>Buy Now</button>  
                }
                </div>
                {
                    show &&(
                        <>
                        <div className='Billing-overlay'>
                            <Billingpage onclose={() => setShow(false)}/>
                            </div>    
                        </>
                    )
                }
        </div>   

    </>
  )
}

export default Cart