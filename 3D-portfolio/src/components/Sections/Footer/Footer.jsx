import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SectionWrapper } from '../../hoc';

function Footer() {
    return (
        <footer className=' py-5'>
            <div className='flex justify-center space-x-9 mx-auto'>
                <a
                    href='https://www.facebook.com/boyan.nikolaev.3'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white hover:text-blue-300'
                >
                    <FaFacebook className='h-6 w-6' />
                </a>
                <a
                    href='https://twitter.com/BKoychev95'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white hover:text-blue-300'
                >
                    <FaXTwitter className='h-6 w-6' />
                </a>
                <a
                    href='https://www.instagram.com/boyan_koychev_95/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white hover:text-blue-300'
                >
                    <FaInstagram className='h-6 w-6' />
                </a>
                <a
                    href='https://www.linkedin.com/in/boyan-koychev-1369bb1b8/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white hover:text-blue-300'
                >
                    <FaLinkedin className='h-6 w-6' />
                </a>
            </div>
        </footer>
    );
}
// const FooterSection = SectionWrapper(Footer, "footer");
export default SectionWrapper(Footer, "footer");
