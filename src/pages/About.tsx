import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import batteryManufacture from "../assets/images/image-2-84.jpg";
import { FaBullseye, FaEye, FaHeart, FaCheckCircle, FaLeaf } from "react-icons/fa";
import { useEffect } from "react";

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (<>
        <Navbar scrolled={false}></Navbar>
        <div className="bg-white text-gray-900 ">
            <section className="bg-red-600 text-white py-12 pt-40 relative">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${batteryManufacture})` }}>
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#821013] via-[#AD100B] to-[#B7110F]  opacity-90"></div>
                </div>
                <div className="relative z-10 container mx-auto px-6 lg:px-20 text-center">
                    <h1 className="text-4xl font-bold mb-4">About Us</h1>

                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6 lg:px-20 flex w-full justify-between flex-col md:flex-row">
                    <h2 className="text-5xl font-bold text-black mb-6 md:w-2/4 leading-normal">Empowering Futures with  <span className="text-red-600"> Sustainable Energy</span> </h2>
                    <p className="text-lg mb-4 leading-loose md:w-2/4">
                        Laikon Batteries, headquartered in Palakkad, Kerala, is a pioneer in
                        manufacturing high-quality batteries, inverters, UPS systems, solar
                        solutions, and water purifiers. Our commitment to adopting cutting-edge
                        technology has empowered us to create products that not only meet but
                        exceed global standards of reliability and performance.
                    </p>
                </div>
            </section>


            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Our Mission */}
                        <div className="flex flex-col items-center">
                            <div className="flex items-center justify-center w-20 h-20 bg-red-100 text-red-600 rounded-full text-5xl mb-6">
                                <FaBullseye />
                            </div>
                            <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h2>
                            <p className="text-center text-lg text-gray-600 leading-relaxed">
                                We aim to deliver exceptional results by optimizing the way we plan and manage our projects. Our goal is to uphold global standards in quality, safety, and environmental sustainability, while educating others on the importance of renewable energy.
                            </p>
                        </div>
                        {/* Our Vision */}
                        <div className="flex flex-col items-center">
                            <div className="flex items-center justify-center w-20 h-20 bg-red-100 text-red-600 rounded-full text-5xl mb-6">
                                <FaEye />
                            </div>
                            <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h2>
                            <p className="text-center text-lg text-gray-600 leading-relaxed">
                                Our vision is to establish ourselves as a global leader in sustainable energy solutions. We are committed to creating long-term value for our customers and stakeholders while making a positive impact on the environment and society.
                            </p>
                        </div>
                        {/* Our Values */}
                        <div className="flex flex-col items-center">
                            <div className="flex items-center justify-center w-20 h-20 bg-red-100 text-red-600 rounded-full text-5xl mb-6">
                                <FaLeaf />
                            </div>
                            <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Values</h2>
                            <p className="text-center text-lg text-gray-600 leading-relaxed">
                                We prioritize quality, innovation, and sustainability in all we do. By constantly improving our practices, embracing creativity, and promoting eco-friendly initiatives, we strive to leave a lasting positive impact for future generations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* What Sets Us Apart Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-20">
                    <h2 className="text-4xl font-extrabold text-red-600 mb-8 text-center">
                        What Sets Us Apart
                    </h2>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center max-w-2xl mx-auto">
                        Our advanced manufacturing processes and stringent quality control
                        ensure every product is reliable, durable, and efficient. Discover
                        what makes us stand out:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex items-start">
                            <FaCheckCircle className="text-red-600 text-3xl mr-4" />
                            <p className="text-lg text-gray-700 leading-relaxed">
                                High-pressure spine-designed positive plates for long battery life.
                            </p>
                        </div>
                        <div className="flex items-start">
                            <FaCheckCircle className="text-red-600 text-3xl mr-4" />
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Advanced selenium lead alloy technology for low maintenance.
                            </p>
                        </div>
                        <div className="flex items-start">
                            <FaCheckCircle className="text-red-600 text-3xl mr-4" />
                            <p className="text-lg text-gray-700 leading-relaxed">
                                PE-type separators to eliminate internal short circuits.
                            </p>
                        </div>
                        <div className="flex items-start">
                            <FaCheckCircle className="text-red-600 text-3xl mr-4" />
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Enhanced charge acceptance and vibration resistance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Us on Our Journey Section */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-6 lg:px-20 text-center">
                    <h2 className="text-4xl font-extrabold text-red-600 mb-8">
                        Join Us on Our Journey
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                        At Laikon Batteries, we believe in creating a sustainable future powered by
                        innovative energy solutions. Partner with us as we continue to lead the way in
                        clean, green, and reliable energy solutions.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mt-4 max-w-2xl mx-auto">
                        Want to learn more? Connect with us and explore how Laikon Batteries
                        can empower your energy needs.
                    </p>
                    <button
                        className="relative inline-block mt-8 py-3 px-6 font-medium text-lg text-black border-2 border-black  group hover:bg-red-600 hover:text-white transition-all duration-300"
                    >
                        <span className="absolute inset-0 bg-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 "></span>
                        <span className="relative">Contact Us</span>
                    </button>
                </div>
            </section>
        </div>
        <Footer></Footer>
    </>
    );
};

export default AboutUs;