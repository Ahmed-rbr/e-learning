import React from "react";

const Card = ({ couseData }) => {
  return (
    <div className="flex border relative border-primary flex-col  shadow-2xl space-y-6 rounded-2xl px-6 py-4 bg-primary">
      <img className="rounded-2xl" src={couseData.course_banner} alt="" />
      <h1 className="font-semibold w-full md:w-4/5 leading-10 text-3xl tracking-wide">
        {couseData.title}{" "}
      </h1>
      <p>{couseData.mentor}</p>

      <div className="flex justify-between   ">
        <div className="flex gap-2.5">
          <p className="text-red-700 font-semibold text-xl">
            {couseData.rating}
          </p>
          <div className="flex justify-center items-center">
            <img className="h-4 w-4" src="/images/strr.png" alt="" />
            <img className="h-4 w-4" src="/images/strr.png" alt="" />
            <img className="h-4 w-4" src="/images/strr.png" alt="" />
            <img className="h-4 w-4" src="/images/strr.png" alt="" />
            <img className="h-3.5 w-3.5" src="/images/str.png" alt="" />
          </div>
        </div>
        <h2 className="font-bold text-2xl">{couseData.price}</h2>
      </div>
      <hr className="border-t border-gray-300 my-4" />
      <div className="flex font-medium  pb-12 justify-between">
        <div className="flex text-secondary gap-4 justify-between">
          <img src="/images/courses/book-open.svg" alt="" />
          <p>{couseData.classes} Classes</p>
        </div>
        <div className="flex text-secondary  gap-4 justify-between">
          <img src="/images/courses/users.svg" alt="" />
          <p>{couseData.students} Students</p>
        </div>
      </div>
      <p className=" absolute top-2/6 right-4 px-6 py-3  bg-accent uppercase  text-primary font-medium tracking-wide rounded-4xl ">
        {" "}
        Best Seller
      </p>
    </div>
  );
};

export default Card;
