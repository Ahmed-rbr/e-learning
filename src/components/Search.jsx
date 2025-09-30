import React from "react";
const STYLE =
  "px-6 md:px-12 py-4 bg-white focus:outline-none border focus:border-accent border-gray-300 rounded-4xl w-full  shadow-lg";
const Search = ({
  img,
  placeholder,
  styleAdd = STYLE,
  imgSize = "w-10 h-10 top-2 right-2",
}) => {
  return (
    <div className="mb-8 w-full md:w-11/12 relative ">
      <input className={styleAdd} type="text" placeholder={placeholder} />
      <img
        className={`absolute  hover:bg-accent-hover ${imgSize}  border border-accent bg-accent  rounded-4xl p-1.5 `}
        src={img}
      />
    </div>
  );
};

export default Search;
