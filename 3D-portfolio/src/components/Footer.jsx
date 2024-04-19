import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Footer() {
    return (
        <footer className='bg-indigo-900 py-5'>
            <div className='flex justify-center space-x-5 max-w-7xl mx-auto'>
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
                    className='text-white hover:text-black-100'
                >
                    <FaXTwitter className='h-6 w-6' />
                </a>
                <a
                    href='https://www.instagram.com/boyan_koychev_95/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white hover:text-purple-300'
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

export default Footer;
