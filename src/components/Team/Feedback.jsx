import React from 'react';
import { Link } from 'react-router-dom';
import "./Venue.css";
import { Icon } from '@iconify/react';
import { TechnicalTeam } from '../../data/data';

const Feedback = () => {
    return (
      <div className='venue-container'>
        <div className='venue-header'>
          <h1>Feedback</h1>
        </div>
         <Link to="https://forms.gle/6KZR8LALjazaG9Ho6" className='lg:text-[26px] md:text-[20px] text-[14px] text-[#F5C98A] bg-[#023047] w-max px-3 py-1 rounded-md mt-4 '>Give Feedback</Link>
      </div>
    );
  };
  

export default Feedback