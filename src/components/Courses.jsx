import { CoursesData } from "../../CoursesData";
import Card from "./Card";

const Courses = () => {
  return (
    <section className="flex flex-col space-y-6 p-4">
      <h2 className="text-3xl md:text-5xl font-bold">Popular courses</h2>
      <div className="grid px-6 grid-cols-1 md:grid-cols-3 items-center gap-6">
        {CoursesData?.length > 0 &&
          CoursesData.map((cours) => <Card key={cours.id} couseData={cours} />)}
      </div>
    </section>
  );
};

export default Courses;
