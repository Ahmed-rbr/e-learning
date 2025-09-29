import React from "react";

const MentorCard = ({ mentor }) => {
  return (
    <div className="flex   text-center items-center  flex-col shadow-2xl rounded-2xl px-4  md:px-12 py-18 bg-primary">
      <div className="relative">
        <img
          className="border mb-12 border-secondary rounded-full shadow w-fit"
          src={mentor.pic}
        />
        <img
          className="absolute  right-0 bottom-1/4 "
          src="/images/mentor/linkedin.svg"
          alt=""
        />
      </div>
      <h1 className="text-2xl mb-2 font-bold">{mentor.name}</h1>
      <p className="text-secondary text-xl font-normal">{mentor.title}</p>
    </div>
  );
};

export default MentorCard;
