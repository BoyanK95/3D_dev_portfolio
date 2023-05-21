import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { navLinks } from '../constants';
import { logo, menu, close, boyanlogo } from '../assets';
import { styles } from '../style';

const Navbar = () => {
    const [active, setActive] = useState('');

    return (
        <nav className={`${styles.paddingX} w-full flex-items-center py-5 fixed top-0 z-20 bg-primary`}>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link
                    to='/'
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive();
                        window.scrollTo(0, 0);
                    }}
                >
                    <img style={{ maxWidth: '20rem' }} src={boyanlogo} className='w-10 h-10 object-contain' />
                    <p className='text-white text-[17px] font-bold object-contain'>
                        Web <span className='sm:block hidden text-red-200'>| Portfolio</span>
                    </p>
                </Link>
                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${
                                active === nav.title ? 'text-white' : 'text-secondary'
                            } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
