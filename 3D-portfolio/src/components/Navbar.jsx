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
                    className='flex-items-center gap-2'
                    onClick={() => {
                        setActive();
                        window.scrollTo(0, 0);
                    }}
                >
                    <img style={{ maxWidth: '20rem' }} src={boyanlogo} className='w-9 h-9 object-contain' />
                </Link>
                <p className='text-white text-[18px] font-bold cursor-pointer'>
                    Boyan <span className='sm:blo hidden text-red-200'>Koychev</span>
                </p>
            </div>
        </nav>
    );
};

export default Navbar;
