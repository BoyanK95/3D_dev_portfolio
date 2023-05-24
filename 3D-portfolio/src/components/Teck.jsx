import React from 'react';
import BallCanvas from './canvas/Ball';
import { SectionWrapper } from './hoc';
import { technologies } from '../constants';
import { styles } from '../style';

const Teck = () => {
    return (
        <>
            <h2 className={`${styles.sectionHeadText} text-center mb-5`}> Technologies:</h2>
            <div className='flex flex-row flex-wrap justify-center gap-10'>
                {technologies.map((tech) => (
                    <div className='w-28 h-28' key={tech.name}>
                        <BallCanvas icon={tech.icon} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Teck, '');
