import React, { useEffect } from "react"; 
import Venue from "../components/Team/Feedback";
import Feedback from "../components/Team/Feedback";

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return < Feedback/>;
};

export default Team;
