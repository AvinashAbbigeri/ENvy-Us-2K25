import React, { useEffect } from "react";
import NonTechnical from "../components/Team/Technical";  

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <NonTechnical />;
};

export default Team;
