import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../../../style';
import ComputerCanvas from '../../canvas/Computer';
import MotionAncor from '../../MotionAncor';

const Hero = () => {
    return (
        <section className='relative w-full h-screen mx-auto'>
            <div
                className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
            >
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915eff]' />
                    <div className='w-1 sm:h-80 h-40 violet-gradient' />
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, my name is <span className='text-[#915eff]'>Boyan Koychev</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I develop UI and UX,
                        <br className='sm:block hidden' /> Web Applications and Websites
                    </p>
                </div>
            </div>
            <ComputerCanvas />
            <MotionAncor link={'#about'}/>
        </section>
    );
};

export default Hero;
