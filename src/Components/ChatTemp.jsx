import React from 'react'

const ChatTemp = (props) => {
    const {name, message, time,img} = props.value
  return (
    <>
    <div className="contacts p-2 flex-1 no-scrollbar overflow-y-auto">
        <div className="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg relative">
          <div className="w-16 h-16 relative flex flex-shrink-0">
            <img
              className="shadow-md rounded-full w-full h-full object-cover"
              src={img}
              alt=""
            />
          </div>
          <div className="flex-auto min-w-0 ml-4 mr-6">
            <p className="font-bold">{name}</p>
            <div className="flex items-center text-sm font-light">
              <div className="min-w-0">
                <p className="truncate">{message}</p>
              </div></div>
              <p className="ml-2 whitespace-no-wrap -mt-10 flex font-medium justify-end">{time}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatTemp