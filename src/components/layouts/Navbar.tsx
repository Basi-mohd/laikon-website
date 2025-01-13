import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import navLogo from '../../assets/images/nav-logo.svg';
import colorednavLogo from '../../assets/images/nav-logo-color.svg';
import { Link } from 'react-router-dom';

const navLinks = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
  { title: 'Products', url: '/products' },
  { title: 'Contact', url: '/contact' },
];

const Navbar = ({ scrolled }: { scrolled: boolean }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const [showModal, setShowModal] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // Function to force scrolling state to true
  const forceScrollingTrue = () => {
    if (scrolled) {
      setScrolling(true);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    const handleScroll = () => {
      if (!scrolled) {
        setScrolling(window.scrollY > 50);
      }
    };

    // Add event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    // Force scrolling state to true (example usage)
    forceScrollingTrue();

    // Cleanup event listeners
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleBarsIconClick = () => {
    toggleModal();
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolling ? 'bg-white shadow-sm' : 'bg-transparent pt-4'
        }`}
    >
      <div className="flex justify-between mx-auto items-center px-6 py-4 max-w-6xl">
        <img
          src={scrolling ? colorednavLogo : navLogo}
          alt="Company Logo"
          className={`h-12 transition-all duration-300 ${scrolling ? 'text-black' : 'text-white'
            }`}
        />

        {!isMobile ? (
          <>
            <ul className="flex gap-8 items-center">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className={`cursor-pointer transition-colors ${scrolling
                    ? 'text-black hover:text-red-600'
                    : 'text-white hover:text-red-400'
                    }`}
                >
                  <Link to={link.url}>{link.title}</Link>
                </li>
              ))}
            </ul>
            <Link to="/contact">
              <button
                className={`relative border overflow-hidden py-2 px-4 font-medium text-sm group transition-all duration-300 ${scrolling
                  ? 'border-black text-black hover:text-white'
                  : 'border-white text-white hover:text-black'
                  }`}
              >
                <span
                  className={`absolute inset-0 transition-all duration-300 ${scrolling
                    ? 'bg-red-600 group-hover:w-full'
                    : 'bg-white group-hover:w-full'
                    } w-0`}
                ></span>

                <span className="relative">Request For Quote</span>
              </button></Link>
          </>
        ) : (
          <div className="flex items-center gap-4">

            <FaBars
              onClick={handleBarsIconClick}
              className={`cursor-pointer ${scrolling ? 'text-black' : 'text-white'
                }`}
            />
          </div>
        )}
      </div>

      {isMobile && showModal && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-900 bg-opacity-95">
          <FaTimes
            onClick={toggleModal}
            className="absolute top-6 right-6 text-white text-2xl cursor-pointer"
          />
          <div className="flex flex-col items-center gap-6">
            {navLinks.map((link, index) => (
              <span
                key={index}
                className="text-white font-light text-2xl cursor-pointer"
              >
                <Link to={link.url}>{link.title}</Link>

              </span>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
