import React from 'react';
import { Link } from 'react-router-dom';
import "./Team.css";
import { Icon } from '@iconify/react';
import { TechnicalTeam } from '../../data/data';

const NonTechnical = () => {
    return (
        <div className='relative flex flex-col text-center gap-5 mt-10'>
            <div className='header p-10'>
                <h1>Venue</h1>
            </div>
            <div className="hidden xl:block absolute top-0 left-[12vw] w-[20vw]">
                <img src="/assets/images/nontech.png" alt="" />
            </div>
            <div class="container">
                {TechnicalTeam?.map((item, i) => (
                    <div key={i} class="profilecard cardi" style={{ backgroundImage: `url(${item.image})` }}>
                        <div class="border">
                            <h2 className='card-title'>{item.name}</h2>
                            <div class="icons">
                                <Link to="https://www.instagram.com/envyus_tjit/"><i class="fa" aria-hidden="true"><Icon icon="teenyicons:instagram-outline" /></i></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NonTechnical