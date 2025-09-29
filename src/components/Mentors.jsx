import MentorCard from "./MentorCard";
import { Mentors as MentorData } from "../../CoursesData";
const Mentores = () => {
  return (
    <section className=" space-y-6 py-12 px-6 bg-mentor ">
      <h1 className="text-6xl text-left w-2/5 tracking-wide font-bold">
        Meet Our Expert Mentors
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {MentorData.length > 0 &&
          MentorData.map((mentor, index) => (
            <MentorCard key={index} mentor={mentor} />
          ))}
      </div>
    </section>
  );
};

export default Mentores;
