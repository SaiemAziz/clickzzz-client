import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../context/Auth";
import { jwtFetch } from "../routes/jwtFetch";
import { useTitle } from "../routes/useTitle";
import SocialLogin from "../shared/SocialLogin";

const Register = () => {

    useTitle("Register")

  let { user, setLoading, createUser, updateUser, setUser, redirect, setRedirect } =
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

  // input form for new user 
  let formChecked = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let name = e.target.name.value;
    let img = e.target.img.value;
    let password = e.target.password.value;
    let confirm = e.target.confirm.value;
    let user = { name, email, img, password, confirm };
    console.log(user);
    if (password !== confirm) {
      toast.error("Password & Confirm dont match");
      e.target.reset();
      return;
    }


    // create new account
    createUser(email, password)
      .then((res) => {
        setUser(res.user);
        jwtFetch(res.user.email)
        toast.success("Registration Successful");
        
        updateUser({ displayName: name, photoURL: img })
          .then((res) => setUser(res.user))
          .catch((err) =>
            toast.error(
              err.code.toUpperCase().replace("AUTH/", "").replaceAll("-", " ")
              )
              );
        navigate(from, { replace: true });
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
      <h1 className="my-10 text-5xl">Please Register</h1>
      <form
        onSubmit={formChecked}
        className="grid grid-cols-2 w-1/2 mx-auto text-left gap-5"
      >
        <h1 className="text-2xl">Name: </h1>
        <input
          required
          type="text"
          className="input input-primary"
          placeholder="Full Name"
          name="name"
        />
        <h1 className="text-2xl">Image URL: </h1>
        <input type="text" className="input input-primary"
        placeholder="Photo Link" name="img" />
        <h1 className="text-2xl">Email: </h1>
        <input
          required
          type="email"
          className="input input-primary"
          placeholder="Email"
          name="email"
        />
        <h1 className="text-2xl">Password: </h1>
        <input
          required
          type={show ? "text" : "password"}
          className="input input-primary"
          placeholder="Password"
          name="password"
        />
        <h1 className="text-2xl">Confirm: </h1>
        <input
          required
          type={show ? "text" : "password"}
          className="input input-primary"
          placeholder="Confirm Password"
          name="confirm"
        />
        <div className="col-span-2 w-fit ml-auto flex">
          <p className="mr-5 text-warning-content text-xl">Show Password</p>
          <input
            className="checkbox checkbox-warning outline outline-warning-content checkbox-sm"
            type="checkbox"
            onClick={() => setShow(!show)}
          />
        </div>
        <input
          className="btn btn-success my-5"
          type="submit"
          value="Register"
        />
        <Link className="btn btn-accent my-5 btn-outline" to="/login">
          Already Have Account?
        </Link>
      </form>
      <SocialLogin />
    </div>
  );
};

export default Register;
