import { motion } from 'framer-motion';
import { styles } from '../../../style';
import { SectionWrapper } from '../../hoc';
import { projects } from '../../../constants';
import { fadeIn, textVariant } from '../../utils/motion';
import ProjectCard from './ProjectCard';

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
                    project is briefly described with links to the code repositories. I will soon be uploading more projects as I am working on several at the moment!
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {projects.map((project, index) => <ProjectCard key={`project-${index}`} index={index} {...project}/>)}
            </div>
        </>
    );
};

export default SectionWrapper(Work, '');
