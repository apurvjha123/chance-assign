import React from "react";
import StoriesTemp from "./StoriesTemp";
import Emoji from "../Emoji.json";

const Stories = () => {
  return (
    <>
      <div className="active-users flex flex-row p-2 no-scrollbar overflow-x-auto w-0 min-w-full">
        {Emoji.map((value, index) => (
          <div key={index}>
            <StoriesTemp value={value} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Stories;
