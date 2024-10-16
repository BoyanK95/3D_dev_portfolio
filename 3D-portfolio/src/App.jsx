import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Sections/Navbar/Navbar';
import About from './components/Sections/About/About';
import Hero from './components/Sections/Intro/Hero';
import Tech from './components/Sections/Tech/Tech';
import Work from './components/Sections/Work/Work';
import Contact from './components/Sections/Contact/Contact';
import Feedback from './components/Sections/Feedback/Feedback';
import Experiance from './components/Sections/Experiance/Experiance';
import Footer from './components/Sections/Footer/Footer';

const App = () => {
    return (
        <BrowserRouter>
            <div className='relative z-0 bg-primary'>
                <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                    <Navbar />
                    <Hero />
                </div>
                <About />
                <Experiance />
                <Tech />
                <Work />
                <Feedback />
                <div className='relative z-0'>
                    <Contact />
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};

export default App;
