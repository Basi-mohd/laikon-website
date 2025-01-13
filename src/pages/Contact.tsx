import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import batteryManufacture from "../assets/images/image-2-84.jpg";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { useEffect } from "react";


const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Navbar scrolled={false}></Navbar>

            <section className="bg-red-600 text-white py-12 pt-40 relative">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${batteryManufacture})` }}>
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#821013] via-[#AD100B] to-[#B7110F]  opacity-90"></div>
                </div>
                <div className="relative z-10 container mx-auto px-6 lg:px-20 text-center">
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>

                </div>
            </section>
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Phone */}
                        <div className="flex flex-col items-center text-center">
                            <div className="flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full text-3xl mb-6">
                                <FaPhoneAlt />
                            </div>
                            <h2 className="text-xl font-semibold mb-2">Call Us</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                +91 89 2185 5810
                            </p>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col items-center text-center">
                            <div className="flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full text-3xl mb-6">
                                <FaEnvelope />
                            </div>
                            <h2 className="text-xl font-semibold mb-2">Email Us</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                laikonbatteries@gmail.com
                            </p>
                        </div>

                        {/* Location */}
                        <div className="flex flex-col items-center text-center">
                            <div className="flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full text-3xl mb-6">
                                <FaMapMarkerAlt />
                            </div>
                            <h2 className="text-xl font-semibold mb-2">Visit Us</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                4/684 Sidco industrial estate, Olavakkode Palakkad Kerala India
                            </p>
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className="mt-16 text-center">
                        <p className="text-lg text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed">
                            Need assistance? Whether you’re looking for product information,
                            technical support, or partnership opportunities, we’re here to help.
                            Reach out through the channels above, and we’ll respond promptly.
                        </p>
                        <button className="relative inline-block py-3 px-6 font-medium text-lg text-red-600 border-2 border-red-600 rounded-lg group hover:bg-red-600 hover:text-white transition-all duration-300">
                            <span className="absolute inset-0 bg-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-lg"></span>
                            <span className="relative">Get in Touch</span>
                        </button>
                    </div>
                </div>

            </section>
            <Footer></Footer>
        </>
    );
};

export default ContactUs;
