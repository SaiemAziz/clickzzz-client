import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth";
import SocialLogin from "../shared/SocialLogin";
import { toast } from "react-toastify";
import { useTitle } from "../routes/useTitle";
import { jwtFetch } from "../routes/jwtFetch";

const LogIn = () => {
  useTitle("Login");
  let { user, setLoading, logIn, updateUser, setUser, redirect, setRedirect} =
    useContext(AuthContext);
  let [show, setShow] = useState(false);
  let navigate = useNavigate();
  let from = redirect || "/";
  
  useEffect(()=>{
    if(user)
    {
        navigate(from, { replace: true });
    }
  },[user])

  let formChecked = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;

    logIn(email, password)
      .then((res) => {
        setUser(res.user);
        toast.success("Login Successful");
        
        jwtFetch(res.user.email);
      })
      .catch((err) =>
        toast.error(
          err.code.toUpperCase().replace("AUTH/", "").replaceAll("-", " ")
        )
      );
    
    setLoading(false);
    e.target.reset();
  };

  return (
    <div>
      <h1 className="my-10 text-5xl">Please Login</h1>
      <form
        onSubmit={formChecked}
        className="grid grid-cols-2 w-1/2 mx-auto text-left gap-5"
      >
        <h1 className="text-2xl">Email: </h1>
        <input
          required
          type="email"
          className="input input-primary"
          name="email"
        />
        <h1 className="text-2xl">Password: </h1>
        <input
          required
          type={show ? "text" : "password"}
          className="input input-primary"
          name="password"
        />
        <div className="col-span-2 w-fit ml-auto flex">
          <p className="mr-5 text-warning-content text-xl">Show Password</p>
          <input
            className="checkbox checkbox-warning outline outline-warning-content checkbox-sm"
            type="checkbox"
            onClick={() => setShow(!show)}
          />
        </div>
        <input className="btn btn-success my-5" type="submit" value="Login" />
        <Link className="btn btn-accent my-5 btn-outline" to="/register">
          No Account?
        </Link>
      </form>
      <SocialLogin />
    </div>
  );
};

export default LogIn;
