import React from "react";
import Search from "./Search";

const NewsLetter = () => {
  return (
    <section
      className="flex mb-100 text-center  gap-6  items-center flex-col justify-center
     px-8 w-11/12 m-auto py-8 bg-[url('/images/newsletter/bgFile.webp')] bg-cover bg-center "
    >
      <div className="flex flex-col gap-4 bg-cover bg-center  items-center">
        <h1 className="w-full mt-6 sm:w-8/12 text-4xl md:text-6xl font-bold text-primary">
          Newsletter.
        </h1>{" "}
        <p className="w-full sm:w-8/12   text-primary/60 text-xl">
          Subscrible our newsletter for discounts, promo and many more.
        </p>
      </div>
      <Search
        placeholder={"Enter your Email Address"}
        img={"/images/tele.svg"}
        imgSize="w-12 h-12  top-2.5 right-4"
        styleAdd={
          "px-6 md:px-12 py-6 bg-white focus:outline-none border focus:border-accent border-gray-300 rounded-full  w-full  shadow-lg"
        }
      />
    </section>
  );
};

export default NewsLetter;
