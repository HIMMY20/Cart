import React, { useContext, useState } from "react";
import Data from "./Context";
import { Link } from "react-router-dom";

const Billingpage = ({ onclose }) => {
  let { demos, count } = useContext(Data);

  let [submit, setSubmit] = useState(false);

  let Submit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };
  let totalprice = demos.reduce(
    (total, item) => total + item.price * (count[item.id] || 1),
    0
  );
  let totalqty = demos.reduce(
    (total, item) => total + (count[item.id] || 1),
    0
  );


  let [paynow,setPayNow] = useState(false)
  


  return (
    <>
      <div className="billing-page">
        {submit == false && (
          <>
            <form onSubmit={Submit}>
              <div className="form-billing">
                <label htmlFor="name">
                  Name :
                  <input type="text" placeholder="Enter your Name" />
                </label>
                <label htmlFor="number">
                  Ph. :
                  <input type="number" placeholder="Enter your Number" />
                </label>
                <label htmlFor="pincode">
                  Pincode :
                  <input type="number" placeholder="Enter your pincode" />
                </label>
                <label htmlFor="Address">
                  Addres :
                  <input type="text" placeholder=" Enter your Full address" />
                </label>
                <input type="submit" value="submit" />
              </div>
            </form>
          </>
        )}
        {submit == true && (
          <>
            <div className="table-billing">
              <table>
                <thead>
                  <button onClick={onclose}>❌</button>
                  <tr>
                    <th>Id</th>
                    <th>Order</th>
                    <th>Title</th>
                    <th>Qty</th>
                    <th>Price</th>
                  </tr>
                </thead>
                {demos.map((item) => {
                  return (
                    <>
                      <tbody>
                        <tr>
                          <td>{item.id}</td>
                          <td>
                            <img src={item.image} height={"100px"} alt="" />
                          </td>
                          <td>{item.title.slice(0, 20)}</td>
                          <td>{count[item.id] || 1}</td>
                          <td>{item.price * (count[item.id] || 1)} Rs.</td>
                        </tr>
                      </tbody>
                    </>
                  );
                })}
                <tr>
                  <td colSpan={"3"}>Total </td>
                  <td>{totalqty} qty.</td>
                  <td>{totalprice} Rs.</td>
                </tr>
                <td style={{ border: "none", textAlign: "center" }} colSpan="5">
                  <button className="pay-now" onClick={() => setPayNow(true)}>Pay now</button>
                </td>

                {paynow && (
                  <tr>

                  <td style={{ border: "none", textAlign: "center" }} colSpan={"5"}>
                    <div className="button-pay" style={{display:"flex", gap:"10px", alignItems:"center", justifyContent:"center"}}>
                    <Link to="/payment" className="payment">GPay</Link>
                    <Link to="/payment" className="payment">COD</Link>
                    <Link to="/payment" className="payment">PhonePay</Link>
                    </div>
                  </td>
                  </tr>
                )}
              </table>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Billingpage;
