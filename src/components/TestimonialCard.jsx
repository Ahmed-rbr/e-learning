const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex relative flex-col px-2 w-full md:px-6 py-8 space-y-8  border border-secondary/10 shadow-2xl rounded-2xl">
      <img className="absolute -top-12 left-8" src={testimonial.pic} />
      <p className=" text-center sm:text-left tracking-wide  font-medium">
        {testimonial.text}
      </p>
      <div className="flex md:flex-row flex-col gap-3  justify-between items-center">
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-xl">{testimonial.name}</h2>
          <p className="text-[0.8rem] font-medium text-secondary">
            {testimonial.title}
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <img className="h-6 w-6" src="/images/strr.png" alt="" />
          <img className="h-6 w-6" src="/images/strr.png" alt="" />
          <img className="h-6 w-6" src="/images/strr.png" alt="" />
          <img className="h-6 w-6" src="/images/strr.png" alt="" />
          <img className="h-6 w-6" src="/images/strr.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
