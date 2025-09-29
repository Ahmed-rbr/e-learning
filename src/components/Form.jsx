import React, { useState } from "react";

const Form = () => {
  const [formData, SetFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    msg: "",
  });
  const [active, setActive] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const formD = { ...formData, [name]: value };
    SetFormData(formD);
    setActive(
      Object.values(formD).every(
        (value) => value !== "" && value !== null && value !== undefined
      )
    );
  };
  return (
    <section className="flex px-4 md:px-6 mb-20 flex-col">
      <h1 className="md:text-6xl mb-12 text-3xl w-full  lg:w-2/5 tracking-wide font-bold">
        Get in Touch
      </h1>

      <form
        action="#"
        className="md:w-11/12  w-full font-semibold text-secondary m-auto p-6 border border-secondary/30 rounded-xl"
      >
        <div className="flex md:flex-row flex-col w-fll mb-10 m-auto  gap-6 justify-between">
          <label className="flex gap-3 md:w-3/6 w-full  flex-col">
            First Name
            <input
              name="firstName"
              value={formData.firstName}
              onChange={(e) => handleChange(e)}
              className="border  py-4  pl-6 bg-transparent   border-secondary/30 rounded-4xl focus:outline-none focus:border-accent"
              type="text"
              placeholder="Ahmed..."
            />
          </label>
          <label className="flex gap-3 md:w-3/6 w-full  flex-col">
            Last Name
            <input
              value={formData.lastName}
              onChange={(e) => handleChange(e)}
              className="border py-4 pl-6 bg-transparent   border-secondary/30 rounded-4xl focus:outline-none focus:border-accent"
              type="text"
              name="lastName"
              placeholder="El messi..."
            />
          </label>
        </div>

        <div className="flex md:flex-row flex-col w-fll m-auto  mb-10   gap-6 justify-between">
          <label className="flex gap-3 md:w-3/6 w-full flex-col">
            Email Address
            <input
              value={formData.email}
              onChange={(e) => handleChange(e)}
              className="border  py-4 pl-6 bg-transparent   border-secondary/30 rounded-4xl focus:outline-none focus:border-accent"
              type="email"
              name="email"
              placeholder="exmple1@gmail.com"
            />
          </label>
          <label className="flex gap-3 md:w-3/6 w-full  flex-col">
            Phone Number
            <input
              value={formData.number}
              onChange={(e) => handleChange(e)}
              className="border py-4 pl-6 bg-transparent   border-secondary/30 rounded-4xl focus:outline-none focus:border-accent"
              type="tel"
              placeholder="0633445566"
              name="number"
            />
          </label>
        </div>
        <label className="flex gap-3 mb-12   flex-col">
          Message
          <input
            value={formData.msg}
            onChange={(e) => handleChange(e)}
            name="msg"
            className="border py-5 pl-6 bg-transparent   border-secondary/30 rounded-4xl focus:outline-none focus:border-accent"
            type="text"
            placeholder="Anything you want to say..."
          />
        </label>
        <button
          disabled={!active}
          className={`px-6 py-3 rounded-3xl font-semibold text-xl ${
            active
              ? "bg-accent text-primary hover:cursor-pointer"
              : "text-secondary cursor-not-allowed bg-secondary/20"
          }`}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
