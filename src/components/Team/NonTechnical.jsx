import React from "react";
import "./Team.css"; // Import CSS for styling
import timelineArray from '../../data/data'; // Import timeline data

const EventTimeline = () => {
  return (
    <section className="main">
      <div className="content">
        <h1>
          <b>
            <u>Events Venue List</u>
          </b>
        </h1>
        <br />
        <ul className="timeline">
          {timelineArray.map((event, index) => (
            <li key={index} className={index % 2 === 0 ? "left" : "right"}>
              <div className={`dot ${index % 2 === 0 ? "left" : "right"}`}>
                <div className="card">
                  <h3>{event.time}</h3>
                  <p>{event.event}</p>
                </div>  
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EventTimeline;
