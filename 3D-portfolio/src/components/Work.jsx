import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { github } from '../assets';
import { SectionWrapper } from './hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from './utils/motion';

const Work = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>My Work</p>
                <h2 className={styles.sectionHeadText}>Projects.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn('', '', 0.1, 1)}
                    className='mt-3 max-w-3xl text-secondary text-[17px] leading-[30px]'
                >
                    Following projects showcases my skills and experiance through real-world examples of my work. Each
                    project is briefly described with links to the code repositories.
                </motion.p>
            </div>
        </>
    );
};

export default SectionWrapper(Work, '');
