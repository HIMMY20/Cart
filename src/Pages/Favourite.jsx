    import React, { useContext, useState } from 'react'
    import Data from './Context'
    import { FaRegHeart, FaHeart } from "react-icons/fa";


    const Favourite = () => {
    let { ADDTOCART, count, setCount, demos, REMOVEFROMLIKE,liked } = useContext(Data);

    let Inc = (id) => {
        setCount((Prev) => ({
        ...Prev,
        [id]: (Prev[id] || 1) < 6 ? (Prev[id] || 1) + 1 : 6,
        }));
    };

    let Dec = (id) => {
        setCount((Prev) => ({
        ...Prev,
        [id]: (Prev[id] || 1) - 1,
        }));
    };
    return (
        <>
        <div className="Home-page">
                    {liked.length == 0 ? <h1>No Products in Like</h1> : " " }

            <div className="all-products">
            {liked.map((item) => {
                return (
                <>
                    <div className="product">
                    <p>{item.id}</p>
                    <div>
                        <img src={item.image} height={"100px"} />
                    </div>
                    <h3>{item.price} Rs.</h3>
                    <h4>{item.title.slice(0, 30)}</h4>
                    <p>{item.description.slice(0, 200)}</p>
                    <div className='addtocart-like'>

                    {demos.find((cartitem) => cartitem.id == item.id) ? (
                        <>
                        <div className="Inc-dec">
                            <button onClick={() => Inc(item.id)}>+</button>
                            <h3>{count[item.id] || 1}</h3>
                            <button onClick={() => Dec(item.id)}>-</button>
                        </div>
                        </>
                    ) : (
                        <>
                        <button
                            className="addtocart"
                            onClick={() => ADDTOCART(item)}
                            >
                            Add to Cart
                        </button>
                        </>
                    )}
                    <button onClick={() => REMOVEFROMLIKE(item.id)}>
                        <FaHeart  />
                    </button>
                    </div>
                    </div>
                </>
                );
            })}
            </div>
        </div>
        </>
    );
    };

    export default Favourite