import React, { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import useFetch from "../../useFetch";


const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setphone] = useState("");
   
  const handleUserLoginForm = async (event) => {
    event.preventDefault();   
    try {
      const response = await fetch(
        "https://backend-shoesanctuary-major-project.vercel.app/api/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            email: email,
            password: password,
            phone: phone,
          }),
        }
      );
      if (!response.ok) {
        throw "Failed add user.";
      }
      const data = await response.json();
      console.log("user added", data);
      setUserLogin(true);
      setUsername("")
      setEmail("")
      setPassword("")
      setphone("")
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  

  return (
    <div>
      <Header />
      <div className="container py-2">
        <h2>User Login</h2>
       <form onSubmit={handleUserLoginForm}>
          <div className="form-floating mb-3  ">
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="Rekha Kumari Bheel"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <label htmlFor="username">Username:</label>
          </div>
          <div className="form-floating mb-3  ">
            <input
              type="text"
              id="email"
              className="form-control"
              placeholder="example@mail.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="email">Email:</label>
          </div>
          <div className="form-floating mb-3 ">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <label htmlFor="password">Password:</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="phone."
              placeholder="phone"
              value={phone}
              onChange={(event) => setphone(event.target.value)}
            />
            <label htmlFor="password">Phone Number:</label>
          </div>
          <div className="notificationContainer">
            <button className="btn btn-primary my-3" type="submit">
              Login
            </button>
          </div>
        </form>  
            
      </div>
      <Footer />
    </div>
  );
};

export default Login;

// const handleEmail = (event) => {
//   const emailInput = event.target.value;
//   const atIndex = emailInput.indexOf("@");
//   const dotIndex = emailInput.indexOf(".");
//   if (atIndex > 0 && dotIndex > atIndex) {
//     setEmail(emailInput);
//   } else {
//     alert("Invalid Email");
//   }

// };
