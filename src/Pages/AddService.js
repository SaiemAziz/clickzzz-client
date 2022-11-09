import { info } from "daisyui/src/colors/colorNames";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useTitle } from "../routes/useTitle";

const AddService = () => {
  useTitle("Add Service");

  let navigate = useNavigate();

  let formChecked = (e) => {
    e.preventDefault();
    let service = {
      title: e.target.title.value,
      img: e.target.img.value,
      description: e.target.description.value,
      price: e.target.price.value,
    };
    fetch("https://service-review-three.vercel.app/add-service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authtoken: localStorage.getItem("token"),
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success")
          toast.success("Successfully added a new service");
        navigate("/services");
      });
    e.target.reset();
  };
  return (
    <div>
      <h1 className="my-10 text-6xl">Please Add A new Service</h1>
      <form
        onSubmit={formChecked}
        className="grid grid-cols-2 w-1/2 mx-auto text-left gap-5"
      >
        <h1 className="text-2xl">Title: </h1>
        <input
          placeholder="Service Name"
          required
          type="text"
          className="input input-primary"
          name="title"
        />
        <h1 className="text-2xl">Image URL: </h1>
        <input
          placeholder="Image Link"
          required
          type="text"
          className="input input-primary"
          name="img"
        />
        <h1 className="text-2xl">Price: </h1>
        <input
          placeholder="Cost in $"
          required
          type="number"
          className="input input-primary"
          name="price"
        />
        <h1 className="text-2xl">Description: </h1>
        <textarea
          placeholder="Detailed Description"
          required
          type="text"
          className="textarea textarea-primary h-[150px]"
          name="description"
        />
        <input
          className="btn btn-accent col-span-2 my-5"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddService;
