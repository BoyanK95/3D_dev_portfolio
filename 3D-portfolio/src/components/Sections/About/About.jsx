import { motion } from 'framer-motion';
import { styles } from '../../../style';
import { services } from '../../../constants';
import { fadeIn, textVariant } from '../../utils/motion';
import { SectionWrapper } from '../../hoc';
import ServiceCard from '../../ServiceCard';

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview</h2>
            </motion.div>
            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                I'm a skilled web developer with more than{' '}
                <span className='text-purple-400 font-bold'> 4+ years of experience</span> in the field. I've delved
                mainly into the JavaScript/TS ecosystem and its frameworks. Focusing mainly in front-end development with{' '}
                <span className='text-purple-400 font-bold'>React</span> and{' '}
                <span className='text-purple-400 font-bold'>NextJS</span>. I'm a quick learner and collaborate closely
                with client to create efficent, scalable and user-friendly solutions that solve real-world problems.
                Let's work together to bring your ideas to life!
            </motion.p>

            <div className='mt-20 flex flex-wrap gap-10'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, 'about');
