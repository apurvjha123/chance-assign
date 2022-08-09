import React, { useState } from "react";
import Emoji from "../Emoji.json";
import ChatTemp from "./ChatTemp";

const Chats = () => {
  var [searchVal, setsearchVal] = useState("");
  return (
    <>
      <div className="bg-white rounded-t-3xl">
        <div className="text-xl flex justify-between ">
          <div className="p-5 font-sans font-bold">Messages</div>
          <div className="search-box p-4 flex-none">
            <form onsubmit="">
              <div className="relative">
                <input
                  className="rounded-full py-1.5 pr-6 pl-5 w-2/3 bg-white focus:bg-white focus:outline-none text-black focus:shadow-md transition duration-300 ease-in"
                  type="text"
                  placeholder="Search"
                  onChange={(event) => setsearchVal(event.target.value)}
                />
              </div>
            </form>
          </div>
        </div>


        {Emoji.filter((val) => {
          if (searchVal == "") {
            return val;
          } else if (val.name.toLowerCase().includes(searchVal.toLowerCase())) {
            return val;
          }
        }).map((value, index) => (
          <div key={index}>
            <ChatTemp value={value} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Chats;
