import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/Auth";

const MyReviews = () => {

    let [reviews, setReviews] = useState([])
    let {user} = useContext(AuthContext)
    
    useEffect(()=>{
        fetch(`http://localhost:5000/my-reviews?email=${user.email}`,{
            headers: {
                authtoken: localStorage.getItem("token")
            }
        }).then(res => res.json())
        .then(data=> setReviews(data.data))
    },[])

  return <div>{reviews.length}</div>;
};

export default MyReviews;
