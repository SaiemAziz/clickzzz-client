import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/Auth";
import ReviewRow from "./components/ReviewRow";

const MyReviews = () => {

    let [reviews, setReviews] = useState([])
    let {user} = useContext(AuthContext)

    console.log(reviews[0]);
    
    useEffect(()=>{
        fetch(`http://localhost:5000/my-reviews?email=${user.email}`,{
            headers: {
                authtoken: localStorage.getItem("token")
            }
        }).then(res => res.json())
        .then(data=> setReviews(data.data))
    },[])

    
  return <div>
    <h1 className="text-4xl my-10 font-medium">Total reviews: {reviews.length}</h1>
    <div className="overflow-x-auto">
  <table className="table table-compact mx-auto my-5">
    <thead>
      <tr>
        <th></th> 
        <th>Service Name</th> 
        <th>Date</th>
        <th>Time</th>
        <th>Description</th> 
        <th>Options</th> 
        <th>Last Login</th> 
        <th>Favorite Color</th>
      </tr>
    </thead> 
    <tbody>

        {
            reviews.map((r,idx) => <ReviewRow r={r} idx={idx} /> )
        }
      
      
    </tbody> 
    <tfoot>
      
    </tfoot>
  </table>
</div>

        
    </div>;
};

export default MyReviews;
