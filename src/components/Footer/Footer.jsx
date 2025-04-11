import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="main">
        <div className="footer">
          <div className="bubbles">
            {Array.from({ length: 128 }, (_, i) => (
              <div
                className="bubble"
                style={{
                  '--size': `${2 + Math.random() * 4}rem`,
                  '--distance': `${6 + Math.random() * 4}rem`,
                  '--position': `${-5 + Math.random() * 110}%`,
                  '--time': `${2 + Math.random() * 2}s`,
                  '--delay': `${-1 * (2 + Math.random() * 2)}s`,
                }}
              />
            ))}
          </div>
          <div className="footer_content flex flex-col md:flex-row justify-between items-center gap-4">
            <div className='flex flex-col gap-2 w-full items-center md:items-start md:w-[300px]'>
              <h1>ENVYUS</h1>
              <div className='poppins text-[13px] leading-4 hidden md:block'>Innovate to Elivate...</div>
            </div>
            <div className="footer__contact poppins text-[13px] leading-4 font-medium flex flex-col gap-1 text-center md:text-right">
            <div className="footer__contact poppins text-[13px] leading-4 font-medium flex flex-col gap-1 text-center md:text-right">
  <ul className='flex flex-col gap-1'>
    <li>
      <Link to="#" className="a-link">Mrs. Kumudha M: +91 9994255076</Link>
    </li>
    <li>
      <Link to="#" className="a-link">Anuroopa Shankar: +91 8904973663</Link>
    </li>
    <li>
      <Link to="#" className="a-link">Yuvaraj K: +91 7411035095</Link> 
    </li>
  </ul>
</div>
<div className="footer_bottom poppins text-[12px] text-center w-full pt-4 border-t border-gray-300 mt-6">
  &copy; 2025 Envyus. All rights reserved. <br />
  Managed by <span className="font-semibold">Avinash Abbigeri</span>
</div>
            </div>
          </div>
        </div>
      </div>
      
      <svg style={{ position: 'fixed', top: '100vh' }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
          </filter>
        </defs>
      </svg>
      
    </>
  )
}

export default Footer;