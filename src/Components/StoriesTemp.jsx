import React from "react";

const StoriesTemp = (props) => {
  const { name, img } = props.value;
  return (
    <>

        <div className="text-sm text-center mr-4">
          <div className="p-1 border-4 border-transparent rounded-full">
            <div className="w-16 h-16 relative flex flex-shrink-0">
              <img
                className="shadow-md rounded-full w-full h-full object-cover"
                src={img}
                alt=""
              />
            </div>
          </div>
          <p>{name}</p>
        </div>

    </>
  );
};

export default StoriesTemp;
