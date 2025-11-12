import React, { useContext, useState } from "react";
import Data from "./Context";
import { useNavigate } from "react-router-dom";

const Billingpage = ({ onclose }) => {
  const { demos, count } = useContext(Data);
  const navigate = useNavigate();

  const [submit, setSubmit] = useState(false);
  const [paynow, setPayNow] = useState(false);

  const [form, setForm] = useState({
    name: "",
    number: "",
    pincode: "",
    address: "",
  });

  // handle change for all inputs
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  const handlePayment = () => {
    navigate("/payment", { state: { username: form.name } });
  };

  const totalprice = demos.reduce(
    (total, item) => total + item.price * (count[item.id] || 1),
    0
  );
  const totalqty = demos.reduce(
    (total, item) => total + (count[item.id] || 1),
    0
  );

  return (
    <div className="billing-page">
      {!submit ? (
        <form onSubmit={handleSubmit}>
          <div className="form-billing">
            <label>
              Name :
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your Name"
                required
              />
            </label>

            <label>
              Ph. :
              <input
                type="number"
                name="number"
                value={form.number}
                onChange={handleChange}
                placeholder="Enter your Number"
                required
              />
            </label>

            <label>
              Pincode :
              <input
                type="number"
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                placeholder="Enter your pincode"
                required
              />
            </label>

            <label>
              Address :
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Enter your full address"
                required
              />
            </label>

            <input type="submit" value="Submit" />
          </div>
        </form>
      ) : (
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
            <tbody>
              {demos.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    <img src={item.image} height={"100px"} alt="" />
                  </td>
                  <td>{item.title.slice(0, 20)}</td>
                  <td>{count[item.id] || 1}</td>
                  <td>{item.price * (count[item.id] || 1)} Rs.</td>
                </tr>
              ))}
              <tr>
                <td colSpan="3">Total</td>
                <td>{totalqty} qty</td>
                <td>{totalprice} Rs.</td>
              </tr>
              <tr>
                <td style={{ border: "none", textAlign: "center" }} colSpan="5">
                  <button className="pay-now" onClick={() => setPayNow(true)}>
                    Pay now
                  </button>
                </td>
              </tr>

              {paynow && (
                <tr>
                  <td style={{ border: "none", textAlign: "center" }} colSpan="5">
                    <div
                      className="button-pay"
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <button onClick={handlePayment} className="payment">
                        GPay
                      </button>
                      <button onClick={handlePayment} className="payment">
                        COD
                      </button>
                      <button onClick={handlePayment} className="payment">
                        PhonePe
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Billingpage;
