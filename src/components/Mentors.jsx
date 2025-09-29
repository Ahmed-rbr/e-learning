import MentorCard from "./MentorCard";
import { Mentors as MentorData } from "../../CoursesData";
const Mentores = () => {
  return (
    <section
      id="mentor"
      className="z-0 space-y-6 py-12 md:px-6 px-2 bg-mentor "
    >
      <h1 className="md:text-6xl text-3xl w-full  lg:w-2/5 tracking-wide font-bold">
        Meet Our Expert Mentors
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:p-6 p-2">
        {MentorData.length > 0 &&
          MentorData.map((mentor, index) => (
            <MentorCard key={index} mentor={mentor} />
          ))}
      </div>
    </section>
  );
};

export default Mentores;
