import { Link } from "react-router-dom";


const HomeAbout = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8 md:p-12 w-full max-w-6xl animation-appear-scroll-right ">
            {/* Text Section */}
            <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 !leading-tight text-center md:text-start">
                    A Legacy of <span className="text-red-600">Excellence</span> in <br className="hidden md:block" /> <span className="text-red-600">Energy Solutions</span>
                </h1>
            </div>

            {/* Description Section */}
            <div className="md:w-1/2 mt-6 md:mt-0 text-center md:text-start">
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    Based in Palakkad, LAIKON Batteries creates top-quality batteries. Using advanced technology, we focus on innovation, sustainability, and customer satisfaction, delivering reliable energy solutions.
                </p>
                <Link to="/about">
                <button

                    className="relative border border-black text-black overflow-hidden py-2 px-4 font-medium text-sm group hover:text-white mt-4"
                >
                    <span className="absolute inset-0 bg-red-600 group-hover:w-full transition-all duration-300 w-0"></span>
                    <span className="relative">
                        Know More About Us
                    </span>
                </button></Link>
            </div>
        </div>

    );
};

export default HomeAbout;
