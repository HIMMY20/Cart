import React, { useContext, useState } from "react";
import Allproducts from "./Allproducts";
import Data from "./Context";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  let { ADDTOCART, count, setCount, demos, ADDTOLIKE,liked,REMOVEFROMLIKE } = useContext(Data);

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
        <h1>Products </h1>
        <div className="all-products">
          {Allproducts.map((item) => {
            return (
              <>
                <div className="product">
                  <p>{item.id}</p>
                  <div>
                    <img src={item.image} height={"100px"} />
                  </div>
                  <h3>Rs. {item.price}</h3>
                  <h4>{item.title.slice(0, 30)}</h4>
                  <p>{item.description.slice(0, 200)}</p>
                  <div className="addtocart-like">

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
                  {liked.find((likeitem) => likeitem.id == item.id) ?
                    (
                      <button onClick={() => REMOVEFROMLIKE(item.id)}>
                    <FaHeart />
                  </button>

                    ):(
                  <button onClick={() => ADDTOLIKE(item)}>
                    <FaRegHeart />
                  </button>
                    )
                  }
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

export default Home;
