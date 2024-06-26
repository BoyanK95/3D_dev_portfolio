import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Hero from './components/Hero';
import Loader from './components/Loader';
import Teck from './components/Teck';
import Work from './components/Work';
import Contact from './components/Contact';
import Feedback from './components/Feedback';
import Experiance from './components/Experiance';
import Footer from './components/Footer';

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
                <Teck />
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
