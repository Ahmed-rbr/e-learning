import { useState } from "react";
import { CoursesData } from "../../CoursesData";
import Card from "./Card";
const Courses = () => {
  const [begin, setBegin] = useState(0);
  const [end, setEnd] = useState(3);

  const coursesNum = CoursesData.slice(begin, end);

  const handleRight = () => {
    if (end < CoursesData.length) {
      setBegin((prev) => prev + 1);
      setEnd((prev) => prev + 1);
    } else {
      setBegin(0);
      setEnd(3);
    }
  };

  const handleLeft = () => {
    if (begin > 0) {
      setBegin((prev) => prev - 1);
      setEnd((prev) => prev - 1);
    } else {
      setBegin(CoursesData.length - 3);
      setEnd(CoursesData.length);
    }
  };

  return (
    <section
      id="courses"
      className="z-0 flex flex-col space-y-6 px-2 py-4 md:p-4"
    >
      <div className="flex w-full md:w-11/12 justify-between">
        <h2 className="text-3xl md:text-5xl font-bold">Popular courses</h2>
        <div className="flex  gap-4">
          <button onClick={() => handleRight()} className="   p-2">
            <img
              className="w-6 h-6 hover:scale-105 duration-150  cursor-pointer"
              src="/images/right-arrow.png"
              alt=""
            />
          </button>
          <button onClick={() => handleLeft()} className="   p-2">
            <img
              className="w-6 h-6 hover:scale-105 duration-150  cursor-pointer"
              src="/images/arrow.png"
              alt=""
            />
          </button>
        </div>
      </div>

      <div className="grid px-2 md:px-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6">
        {coursesNum?.length > 0 &&
          coursesNum.map((cours) => <Card key={cours.id} couseData={cours} />)}
      </div>
    </section>
  );
};

export default Courses;
