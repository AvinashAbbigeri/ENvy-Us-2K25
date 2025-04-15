import React from 'react';
import { Link } from 'react-router-dom';
import "./Venue.css";
import { Icon } from '@iconify/react';
import { TechnicalTeam } from '../../data/data';

const Venue = () => {
    const venueData = [
      { event: "Visual Upgrade", room: "Room 214" },
      { event: "Iconic IQ", room: "Room 214" },
      { event: "Code Sprint", room: "Room 319" },
      { event: "Clash of Minds", room: "Room 319" },
      { event: "Brainstorm", room: "Room 323" },
      { event: "The Future Foundry", room: "Room 323" },
    ];
  
    return (
      <div className='venue-container'>
        <div className='venue-header'>
          <h1>Venue</h1>
        </div>
        <h3>Group Events: 12:00 p.m. - 2:00 p.m.</h3>
        <h3>Solo Events: 2:00 p.m. - 3:00 p.m.</h3>
        <div className="venue-table-container">
          <table className="venue-table">
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Room Number</th>
              </tr>
            </thead>
            <tbody>
              {venueData.map((item, index) => (
                <tr key={index}>
                  <td>{item.event}</td>
                  <td>{item.room}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  

export default Venue
