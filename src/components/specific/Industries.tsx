import elBattery from "../../assets/images/el-laikon-battery.png";
import clBattery from "../../assets/images/cl-laikon-battery.png";
import slBattery from "../../assets/images/sl-laikon-battery.png";
import { Link } from "react-router-dom";

const Industries = () => {
    const industries = [
        {
            title: "One of the leading manufactures for",
            description: " Home &  Industrial Batteries.",
        },
        {
            title: "CL Series",
            image: clBattery,
            description: "Affordable and reliable with extended warranty",
            buttons: ["Explore More"],
        },
        {
            title: "EL Series",
            image: elBattery,
            description: "Durable design suitable for heavy-duty usage",
            buttons: ["Explore More"],
        },
        {
            title: "SL Series",
            image: slBattery,
            description: "Top-tier performance with longest backup warranty",
            buttons: ["Explore More"],
        },
    ]


    return (
        <div>
            <h2 className="text-3xl font-bold text-center  h-full mb-9 ">Explore Our Products</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl px-4 md:px-0 h-full">
                {industries.map((industry, index) => (
                    <div>
                        <div
                            key={index}
                            className={`relative rounded-lg px-6 pt-9 transition-transform transform hover:scale-105 h-full ${index === 0 ? "bg-gradient-to-tr from-[#821013] via-[#ae0a04] to-[#d10b08]" : "bg-gray-100/50"
                                }`}
                        >
                            {/* Title */}
                            <h2
                                className={`text-xl mb-2 ${index === 0 ? "text-white text-xs md:text-sm  font-medium mt-4" : "text-gray-800 font-semibold text-center"
                                    }`}
                            >
                                {industry.title}
                            </h2>

                            {/* Description */}
                            {industry.description && (
                                <p className={`  ${index === 0 ? "text-white text-3xl md:text-4xl font-semibold w-44 -ml-0.5" : "text-gray-800 text-sm text-center mb-12 "}`}>{industry.description}</p>
                            )}

                            {
                                index === 0 &&
                                <p className=" text-white text-sm font-medium ">In India</p>

                            }

                            {/* Image */}
                            {industry.image &&
                                <div className="w-full flex items-center justify-center bottom-0">
                                    <img
                                        src={industry.image}
                                        alt={industry.title}
                                        className="object-contain max-h-full w-full"
                                    />
                                </div>
                            }

                            {/* Hover Buttons */}
                            {industry.buttons &&
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-white/90 opacity-0 hover:opacity-100 transition-opacity">
                                    {industry.buttons.map((button, i) => (
                                        <Link to="/products">
                                            <button key={i} className="relative border border-black text-black overflow-hidden py-2 px-4 font-medium text-sm  group hover:text-white mt-4">
                                                <span className="absolute inset-0 bg-red-600  group-hover:w-full transition-all duration-300 w-0"></span>
                                                <span className="relative">{button}</span>
                                            </button>
                                        </Link>

                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Industries;
