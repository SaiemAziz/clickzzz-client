import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/Auth";
import ReviewRow from "./components/ReviewRow";
import { toast } from 'react-toastify'
import { Link } from "react-router-dom";

const MyReviews = () => {

    let [reviews, setReviews] = useState([])
    let {user} = useContext(AuthContext)
    
    
    useEffect(()=>{
        fetch(`http://localhost:5000/my-reviews?email=${user?.email}`,{
            headers: {
                authtoken: localStorage.getItem("token")
            }
        }).then(res => res.json())
        .then(data=> setReviews(data.data))
    },[user, localStorage.getItem("token")])


    // delete a review 
    let deleteClicked = (id) => {
        let sure = window.confirm("Are you sure you want to delete")
        if(!sure)
            return;
        let url = `http://localhost:5000/my-reviews?id=${id}&email=${user.email}`

        fetch(url,{
            method: 'DELETE',
            headers: {
                authtoken: localStorage.getItem('token'),
            }
        })
        .then(res => res.json())
        .then(data => {
            toast.success("Deleted Successfully")
            let remaining = reviews.filter(r=> r._id !== id)
            setReviews(remaining)
        })
    }


    // delete a review 
    let updateClicked = (id, text) => {
        let sure = window.confirm("Are you sure you want to update")
        if(!sure)
            return;
        let url = `http://localhost:5000/my-reviews?id=${id}&email=${user.email}`

        fetch(url,{
            method: 'PUT',
            headers: {
                "content-type": "application/json",
                authtoken: localStorage.getItem('token'),
            },
            body: JSON.stringify({text})
        })
        .then(res => res.json())
        .then(data => {
            toast.success("Updated Successfully")
            let remaining = reviews.filter(r=> r._id !== id)
            let selected = reviews.find(r => r._id === id)
            selected.details = text
            let updated = [...remaining, selected]
            updated.sort((a,b) => (a.time > b.time ? -1 : 1))
            setReviews(updated)
        })
    }
    
  return <div>
    <h1 className="text-4xl my-10 font-medium">Total reviews: {reviews?.length}</h1>
    <div className="overflow-x-auto">
 {
    reviews?.length > 0 ? 
    <table className="table table-compact mx-auto my-5 ">
    <thead>
      <tr>
        <th></th> 
        <th>Service Name</th> 
        <th>Date</th>
        <th>Time</th>
        <th>Description</th> 
        <th>Options</th> 
      </tr>
    </thead> 
    <tbody>

        {
            reviews?.map((r,idx) => <ReviewRow 
            r={r} 
            idx={idx} 
            deleteClicked={deleteClicked} 
            updateClicked={updateClicked}
            /> )
        }
      
      
    </tbody> 
    <tfoot>
        <tr>
            <th></th> 
            <th>Service Name</th> 
            <th>Date</th>
            <th>Time</th>
            <th>Description</th> 
            <th>Options</th> 
        </tr>
    </tfoot>
  </table> :
  <h1 className="text-xl italic">Please Add Some Reviews in <Link to='/services' className="link link-primary">Services</Link></h1>
 }
</div>

        
    </div>;
};

export default MyReviews;
