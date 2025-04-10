import React, { useEffect } from "react"; 
import Venue from "../components/Team/Venue";

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Venue />;
};

export default Team;
