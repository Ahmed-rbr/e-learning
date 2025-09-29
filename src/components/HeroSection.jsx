import React from "react";

const HeroSection = () => {
  return (
    <article className=" flex-col md:flex-row items-center  flex min-w-full px-6  justify-between bg-primary">
      <section className="md:w-2/4 w-full">
        <div className="flex  mb-8 items-center gap-4">
          <img src="../../public/images/banner/check.svg" alt="" />
          <h3 className="font-semibold text-center tracking-wider text-green-500">
            Get 30% off on first enroll
          </h3>
        </div>
        <h1 className=" tracking-wide  mb-8 leading-snug text-3xl md:text-6xl font-bold">
          Learn Engineering From Top Experts
        </h1>
        <p className="text-xl mb-8 text-secondary tracking-wide font-normal ">
          Build skills with our courses and mentor from world-class companies.
        </p>
        <div className="mb-8 w-full md:w-11/12 relative ">
          <input
            className="px-6 md:px-12 py-4 focus:outline-none border focus:border-accent border-gray-300 rounded-4xl w-full  shadow-lg"
            type="text"
            placeholder="Search engineering courses..."
          />
          <img
            className="absolute  hover:bg-accent-hover border border-accent bg-accent top-1.5 right-2 rounded-4xl p-1.5 "
            src="../../public/images/banner/search.svg"
          />
        </div>
        <ul className="grid gap-4 grid-cols-1 text-sm  md:text-xl md:grid-cols-2">
          <li className="flex gap-2 items-center">
            <img src="../../public/images/banner/check-circle.svg" />
            <p>Flexible Schedules</p>
          </li>
          <li className="flex gap-2 items-center">
            {" "}
            <img src="../../public/images/banner/check-circle.svg" />
            <p>Guided Learning Paths</p>
          </li>
          <li className="flex gap-2 items-center">
            <img src="../../public/images/banner/check-circle.svg" />
            <p>Peer Support Community</p>
          </li>
        </ul>
      </section>

      <img
        className="md:w-2/4 w-full"
        src="../../public/images/banner/mahila.png"
        alt=""
      />
    </article>
  );
};

export default HeroSection;
