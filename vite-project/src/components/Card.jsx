import React, { useEffect, useState } from 'react';
import data from '../assets/data.json';

const Card = () => {
  let [events, setEvents] = useState([]);
  console.log(data.eventsList);

  useEffect(() => {
    setEvents(data.eventsList);
  }, []);
  console.log(events);

  return (
    <div className="flex justify-center flex-wrap">
      {events.map((item, index) => {
        return (
          <div
            key={item.eventId}
            className="border border-black rounded-lg w-96 m-4 bg-purple-200 bg-opacity-75"
          >
            <div className="p-1">
              <img
                className="h-40 w-full object-cover rounded-lg"
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="p-2">
              <div className="text-2xl font-bold text-black-800">
                {item.title}
                <hr />
              </div>
              <div className="flex justify-between mt-2">
                <div>{item.DateAndTime}</div>
                <div className="flex items-center">
                  <img src="/pin.png" alt="" className="h-4" />
                  <span className="ml-1">{item.location}</span>
                </div>
              </div>
              <div className="mt-2 text-gray-700 font-medium">{item.mentorName}</div>
              <div className="flex justify-between items-center mt-2">
                <div>{item.category}</div>
                <div>
                  <button className="border-4 border-transparent bg-blue-700 border-opacity-75 rounded-md text-white px-4 py-2">
                    {item.Button}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
