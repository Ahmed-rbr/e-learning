import React from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonialData } from "../../CoursesData";

const Testimonials = () => {
  return (
    <section className="p-4 space-y-12">
      <h1 className="md:text-6xl mb-18 text-3xl w-full  lg:w-2/5 tracking-wide font-semibold text-black/80">
        What Our Learners Say
      </h1>
      <div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 px-2 py-4 items-center rounded-2xl gap-16 lg:gap-4">
        {testimonialData?.length > 0 &&
          testimonialData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
      </div>
    </section>
  );
};

export default Testimonials;
