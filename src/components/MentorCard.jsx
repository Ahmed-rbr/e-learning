import React from "react";

const MentorCard = ({ mentor }) => {
  return (
    <div className="flex relative text-center items-center  flex-col shadow-2xl rounded-2xl px-12 py-18 bg-primary">
      <img
        className="border mb-12 border-secondary rounded-full shadow w-fit"
        src={mentor.pic}
      />
      <h1 className="text-2xl mb-2 font-bold">{mentor.name}</h1>
      <p className="text-secondary text-xl font-normal">{mentor.title}</p>
      <img
        className="absolute  right-22 top-3/6 "
        src="/images/mentor/linkedin.svg"
        alt=""
      />
    </div>
  );
};

export default MentorCard;
