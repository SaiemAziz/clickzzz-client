import React, { useContext } from "react";
import { AuthContext } from "../context/Auth";
import { toast } from "react-toastify";
import { BsGoogle, BsGithub} from 'react-icons/bs'
import { useLocation, useNavigate } from "react-router-dom";
import { jwtFetch } from "../routes/jwtFetch";
const SocialLogin = () => {
  let { setUser, setLoading, googleLogin, githubLogin, redirect,setRedirect, user } =
    useContext(AuthContext);
    let navigate = useNavigate()
    // let location = useLocation()
    let from = redirect || '/'


    // log in by google 
  let gglLoginClicked = () => {
    googleLogin()
      .then((res) => {
        setUser(res.user);
        toast.success("Successfully logged in");
        
        jwtFetch(res.user.email)
      })
      .catch((err) =>
        toast.error(
          err.code.toUpperCase().replace("AUTH/", "").replaceAll("-", " ")
        )
      );
    setLoading(false);
  };


// log in by git hub 
  let gitLoginClicked = () => {
    githubLogin()
      .then((res) => {
        setUser(res.user);
        toast.success("Successfully logged in");
        
        jwtFetch(res.user.email)
      })
      .catch((err) =>
        toast.error(
          err.code.toUpperCase().replace("AUTH/", "").replaceAll("-", " ")
        )
      );
    setLoading(false);
  };

  return (
    <div className="my-5">
      <button onClick={gglLoginClicked} className="btn btn-info btn-circle mx-3 text-xl">
        <BsGoogle/>
      </button>
      <button onClick={gitLoginClicked} className="btn btn-info btn-circle mx-3 text-xl">
        <BsGithub/>
      </button>
    </div>
  );
};

export default SocialLogin;
