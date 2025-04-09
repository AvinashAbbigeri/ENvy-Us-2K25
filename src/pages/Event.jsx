import React, { useEffect } from "react";
import "./Event.css";
import { Cards } from "../data/data";
import { Link, useParams } from "react-router-dom";

const Event = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { category, id } = useParams();
  const data = Cards.filter((item) => item.category === category);
  const cardData = data[id];

  if (!cardData) {
    return <div className="text-center mt-20 text-xl text-red-600">Event not found</div>;
  }

  return (
    <div className="flex flex-col items-center px-[10vw] mt-[12vh] xl:mt-0 pb-20 gap-10">
      {/* Top section with image and title */}
      <div className="flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[4vw] w-full">
        <div className="flex flex-col w-[75vw] lg:w-[60vw] gap-4">
          <h1 className="poppins font-bold xl:text-[80px] lg:text-[80px] md:text-[70px] text-[40px] leading-[3rem] lg:leading-[6rem] text-center lg:text-left" style={{ color: "#210240" }}>
            {cardData.event_name}
          </h1>
          <p className="poppins-regular text-[#000000] lg:text-[16px] md:text-[14px] text-[14px] tracking-wide leading-6 font-medium text-center lg:text-left" style={{ color: "#210240" }}>
            {cardData.description}
          </p>
          <Link to={cardData.url} className="register-btn self-center lg:self-start py-2 px-8 w-fit" style={{ backgroundColor: "#023047", borderRadius: "4px", color: "white", fontSize: "20px" }}>
            Register
          </Link>
        </div>
      </div>

      {/* About Section */}
      {cardData.about && (
        <div className="w-full lg:w-[80%] mt-10">
          <h2 className="text-2xl font-semibold mb-2 text-[#210240]">About</h2>
          <p className="text-[16px] leading-6 text-[#333]">{cardData.about}</p>
        </div>
      )}

      {/* Rules Section */}
      {cardData.rules && cardData.rules.length > 0 && (
        <div className="w-full lg:w-[80%] mt-6">
          <h2 className="text-2xl font-semibold mb-2 text-[#210240]">Rules</h2>
          <ol className="list-decimal list-inside space-y-2 text-[16px] text-[#333]">
            {cardData.rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ol>
        </div>
      )}

      {/* Event Coordinator Section */}
      {cardData.coordinator && cardData.coordinator.length > 0 && (
        <div className="w-full lg:w-[80%] mt-10">
          <h2 className="text-2xl font-semibold mb-2 text-[#210240]">Event Coordinator</h2>
          <ul className="space-y-2 text-[16px] text-[#333]">
            {cardData.coordinator.map((person, index) => (
              <li key={index}>
                <strong>{person.name}</strong> — {person.phone}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Event;
