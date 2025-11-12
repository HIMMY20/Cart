import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Data from "./Context";

const Payment = () => {
  const { demos, count, setDemos, setCount } = useContext(Data);
  const location = useLocation()
  const username = location.state?.username

  // Calculate total price
  const totalprice = demos
    .reduce((tot, item) => tot + item.price * (count[item.id] || 1), 0)
    .toFixed(2);

  // Store order total for display
  const [orderTotal] = useState(totalprice);

  // Clear cart after payment
  useEffect(() => {
    setDemos([]);
    setCount({});
  }, [setDemos, setCount]);

  return (
    <div className="payment-success" style={styles.container}>
      <h2 style={styles.title}>Payment Successful ✅</h2>
      <h3 style={styles.name}>Thank you, {username}!</h3>
      <h2 style={styles.amount}>₹{orderTotal}</h2>
      <p style={styles.text}>Your order has been placed successfully!</p>
      <Link to="/" style={styles.link}>
        Back to Home
      </Link>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    padding: "20px",
    background: "#f8f9fa",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    width: "400px",
    margin: "80px auto",
  },
  title: {
    color: "#28a745",
    marginBottom: "15px",
  },
  amount: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  text: {
    color: "#555",
    marginBottom: "25px",
  },
  link: {
    textDecoration: "none",
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px 20px",
    borderRadius: "8px",
  },
};

export default Payment;
