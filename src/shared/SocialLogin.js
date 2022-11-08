import React, { useContext } from "react";
import { AuthContext } from "../context/Auth";
import { toast } from "react-toastify";
const SocialLogin = () => {
  let { setUser, setLoading, googleLogin, githubLogin } =
    useContext(AuthContext);

  let gglLoginClicked = () => {
    googleLogin()
      .then((res) => {
        setUser(res.user);
        toast.success("Successfully logged in");
      })
      .catch((err) =>
        toast.error(
          err.code.toUpperCase().replace("AUTH/", "").replaceAll("-", " ")
        )
      );
    setLoading(false);
  };

  let gitLoginClicked = () => {
    githubLogin()
      .then((res) => {
        setUser(res.user);
        toast.success("Successfully logged in");
      })
      .catch((err) =>
        toast.error(
          err.code.toUpperCase().replace("AUTH/", "").replaceAll("-", " ")
        )
      );
    setLoading(false);
  };

  return (
    <div>
      <button onClick={gglLoginClicked} className="btn btn-info">
        Google
      </button>
      <button onClick={gitLoginClicked} className="btn btn-info">
        Github
      </button>
    </div>
  );
};

export default SocialLogin;
