import React from "react";
import {
  BiDownArrow,
  BiDownArrowAlt,
  BiDownArrowCircle,
  BiSortDown,
} from "react-icons/bi";
import { BsMenuDown } from "react-icons/bs";

const Blogs = () => {
  return (
    <div className="flex justify-center items-center flex-col py-10" data-theme = 'coffee'>
      {/* title  */}
      <h1 className="text-4xl text-info font-bold italic mb-5">Blogs</h1>

      {/* all questions  */}
      <div className="mx-auto max-w-4xl"></div>
      <div className="mx-auto max-w-4xl">
        {/* 1st question  */}
        <div className="collapse  card glass shadow-xl m-5">
          <input type="checkbox" />
          <div className="collapse-title text-left text-xl font-medium flex items-center w-full justify-between text-primary">
            Differences between SQL and NoSQL ?? <BiDownArrow className="ml-5" />
          </div>
          <div className="collapse-content bg-base-300">
            <p className="text-justify pt-5 text-accent-content">
            SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMS that are non-relational and generally do not use SQL
            </p>
          </div>
        </div>

        {/* 2nd question */}
        <div className="collapse  card glass shadow-xl m-5">
          <input type="checkbox" />
          <div className="collapse-title text-left text-xl font-medium flex items-center w-full justify-between text-primary">
            What is JWT ?? How does it work ?? <BiDownArrow className="ml-5" />
          </div>
          <div className="collapse-content bg-base-300">
            <p className="text-justify pt-5 text-accent-content">
            JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.

The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.
            </p>
          </div>
        </div>

        {/* 3rd question */}
        <div className="collapse  card glass shadow-xl m-5">
          <input type="checkbox" />
          <div className="collapse-title text-left text-xl font-medium flex items-center w-full justify-between text-primary">
            What is the differences between JavaScript and NodeJS ?? <BiDownArrow className="ml-5" />
          </div>
          <div className="collapse-content bg-base-300">
            <p className="text-justify pt-5 text-accent-content">
            JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.
            </p>
          </div>
        </div>

        {/* 4th question  */}
        <div className="collapse  card glass shadow-xl m-5">
          <input type="checkbox" />
          <div className="collapse-title text-left text-xl font-medium flex items-center w-full justify-between text-primary">
          How does NodeJS handle multiple requests at the same time ?? <BiDownArrow className="ml-5" />
          </div>
          <div className="collapse-content bg-base-300">
            <p className="text-justify pt-5 text-accent-content">
            NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
