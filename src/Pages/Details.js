import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth";
import { useTitle } from "../routes/useTitle";
import ReviewCards from "./components/ReviewCards";
import { PhotoView, PhotoProvider } from 'react-photo-view';

const Details = () => {
  useTitle("Details");
  let [reviews, setReviews] = useState([]);
  let [check, setCheck] = useState(true);
  let { user, setRedirect } = useContext(AuthContext);
  let navigate = useNavigate();
  let location = useLocation();
  let { data } = useLoaderData();
  let blankPhoto =
    "https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_960_720.png";

  useEffect(() => {
    fetch(
      `https://service-review-three.vercel.app/service-reviews?id=${data._id}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data.data));
  }, []);

  if (user) setRedirect(null);

  let clickedLogin = () => {
    setRedirect(location.pathname);
    navigate("/login");
  };

  let reviewForm = (e) => {
    e.preventDefault();
    let time = new Date().getTime();
    let review = {
      img: user.photoURL,
      details: e.target.review.value,
      email: user.email,
      displayName: user.displayName,
      service_id: data._id,
      service_name: data.title,
      time: time,
    };
    e.target.reset();
    setCheck(false);
    setReviews([review, ...reviews]);
    fetch(`https://service-review-three.vercel.app/service-reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => console.log(data.data));
  };

  // // toggle disabled
  // let checkReview = e => {
  //     if(e.target.value.length > 20)
  //         setCheck(true)
  //     else
  //         setCheck(false)
  // }

  return (
    <div className="">
      <h1 className="mt-10 pb-10 text-6xl border-b-4">
        Details of: <span className="italic text-accent">{data.title}</span>
      </h1>

      {/* details of a service  */}
      <div className="shadow-2xl p-5 grid grid-cols-3 gap-5 m-5">
      <PhotoProvider>
            <PhotoView src={data.img}>
                <img className='rounded-xl' src={data.img} alt="" />
            </PhotoView>
            </PhotoProvider>
        <div className="card col-span-2 flex flex-col justify-between">
          <h1 className="text-justify text-3xl p-10">
            <span className="font-bold">Description: </span>
            {data.description}
          </h1>
          <h1 className="text-right text-3xl">
            Price: <span className="text-success font-bold">${data.price}</span>
          </h1>
        </div>
      </div>

      {/* all reviews */}
      <div className="my-10 px-5 text-3xl flex justify-between items-center">
        <h1 className=" text-left">All Reviews regarding this service:</h1>
        {!user && (
          <div>
            <h1 className="text-2xl">
              Please{" "}
              <span
                className="btn btn-primary btn-sm btn-outline"
                onClick={clickedLogin}
              >
                LogIn
              </span>{" "}
              to give review
            </h1>
          </div>
        )}
      </div>
      {user && (
        <form
          onSubmit={reviewForm}
          className="flex items-center justify-center mx-auto my-10"
        >
          <div
            className="tooltip tooltip-secondary px-5"
            data-tip={user.displayName || "No Name"}
          >
            <img
              src={user?.photoURL || blankPhoto}
              className="w-[60px] h-[60px] rounded-full"
              alt=""
            />
          </div>
          <textarea
            name="review"
            className="h-[140px] textarea textarea-primary w-1/2"
            placeholder="Please enter your thought about the service."
          />
          <input
            className={`btn ml-5 btn-info`}
            type="submit"
            value="Submit Review"
            disabled={!check}
          />
        </form>
      )}
      <ReviewCards reviews={reviews} />
    </div>
  );
};

export default Details;
