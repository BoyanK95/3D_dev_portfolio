import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../style';
import { SectionWrapper } from './hoc';
import { slideIn } from './utils/motion';
import EarthCanvas from './canvas/Earth';

const Contact = () => {
    const newForm = { name: '', email: '', message: '' };

    const formRef = useRef();
    const [form, setForm] = useState(newForm);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                'service_sa3mb38',
                'template_ncie0tq',
                {
                    from_name: form.name,
                    to_name: 'BoyanK95',
                    from_email: form.email,
                    to_email: 'b.koychev95@gmail.com',
                    message: form.message
                },
                'Vh9oqoycywI9z6790'
            )
            .then(
                () => {
                    setLoading(false);
                    alert('Thank you, I will get back to you as soon as posible!');
                    setForm(newForm);
                },
                (error) => {
                    setLoading(false);

                    console.log(error);

                    alert('Something went wrong!');
                }
            );
    };

    //Vh9oqoycywI9z6790
    //template_ncie0tq
    //service_sa3mb38

    return (
        <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
            <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
                className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
                    <label htmlFor='name' className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Name</span>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className='py-4 bg-tertiary px-6 rounded-lg outline-none placeholder:text-secondary text-white border-none font-medium'
                        />
                    </label>

                    <label htmlFor='email' className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Email</span>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your e-mail?"
                            className='py-4 bg-tertiary px-6 rounded-lg outline-none placeholder:text-secondary text-white border-none font-medium'
                        />
                    </label>

                    <label htmlFor='message' className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Message</span>
                        <textarea
                            rows='7'
                            name='message'
                            id='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='What do you want to say?'
                            className='py-4 bg-tertiary px-6 rounded-lg outline-none placeholder:text-secondary text-white border-none font-medium'
                        />
                    </label>

                    <button
                        className='py-3 px-3 bg-tertiary outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
                        type='submit'
                    >
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, 'contact');
