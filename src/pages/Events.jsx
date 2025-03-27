import "./Events.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Cards } from "../data/data";

const Events = () => {
  const [category, setCategory] = useState("Technical");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleChangeCategory = (item) => {
    setCategory(item);
  }
  return (
    <div className="events-conntainer p-10 mt-10 md:mt-2">
      <h1 className="events-h1">Events</h1>
      <main className="page-content">
        {Cards.filter((item) => item.category === category).map((card, index) => (
          <div
            key={index}
            className="card"
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: 'no-repeat',
              backgroundColor: card.color
            }}
          >
            <div className="content">
              <h2 className="title">{card.event_name}</h2>
              <p className="copy">{card.description.slice(0, 200)}...</p>
              {/* <Link to={`/events/${category}/${index}`} className="btn rounded-md">
                View Event
              </Link> */}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

// Render the PageContent component
export default Events;
