import { useEffect } from 'react';
import Navbar from '../components/layouts/Navbar';
import Features from '../components/specific/Features';
import Industries from '../components/specific/Industries';
import HomeAbout from '../components/specific/HomeAbout';
import Footer from '../components/layouts/Footer';
import Faq from '@/components/specific/Faqs';
import battery1 from '../assets/images/battery-low-1.png';
import batteryPattern from '../assets/images/logo-pattern.png';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <Navbar scrolled={false} />
      <div className="relative h-[33rem] md:h-[23rem] lg:h-[31rem] flex flex-col items-center bg-gradient-to-tr from-[#821013] via-[#AD100B] to-[#B7110F] md:px-28 pt-20">
        <div className="flex justify-between items-center flex-col md:flex-row flex-grow w-full max-w-6xl">
          <div className="animation-appear-down flex justify-center items-center md:items-start flex-col">
            <h2 className="font-bold text-white text-2xl md:text-3xl lg:text-4xl text-center md:text-start leading-snug md:leading-snug lg:leading-snug mt-10 md:-mt-16">
              Reliable Energy Solutions <br /> for a Sustainable Future
            </h2>
            <p className="font-light text-[10px] lg:text-sm text-white mt-2 text-center md:text-start">
              Power your world with Laikon Batteries' innovative energy <br />
              solutions—reliable, efficient, and built to last <br />
              for homes and businesses alike.
            </p>
            <Link to="/products">
              <button className="relative bg-white text-black overflow-hidden py-2 px-4 font-semibold group hover:text-white mt-4">
                <span className="absolute inset-0 bg-red-600 group-hover:w-full transition-all duration-300 w-0"></span>
                <span className="relative">Explore Now</span>
              </button></Link>
          </div>
          <img src={battery1} alt="" className="z-30 animation-appear-up h-72 md:h-[22rem] lg:h-[32rem] lg:w-[32rem] pt-6" />
        </div>
        <div className="overflow-x-hidden  bottom-0 absolute">
          <div className='  opacity-20 flex animate-marquee md:hidden'>
            <img
              src={batteryPattern}
              alt="Pattern"
              className="h-20 object-cover"
            />
            <img
              src={batteryPattern}
              alt="Pattern"
              className="h-20 object-cover"
            />
            <img
              src={batteryPattern}
              alt="Pattern"
              className="h-20 object-cover"
            />
          </div>
          <div className='  opacity-20  animate-marquee-md hidden md:flex'>
            <img
              src={batteryPattern}
              alt="Pattern"
              className="h-20 object-cover"
            />
            <img
              src={batteryPattern}
              alt="Pattern"
              className="h-20 object-cover"
            />
            <img
              src={batteryPattern}
              alt="Pattern"
              className="h-20 object-cover"
            />
          </div>
        </div>
      </div>
      <div className="bg-white flex items-center mt-28 flex-col gap-10">
        <Features />
        <HomeAbout />
        <Industries />
        <Faq />
      </div>
      <Footer />
    </section>
  );
};

export default Home;
