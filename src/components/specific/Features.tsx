import { FaBolt, FaShieldAlt, FaTachometerAlt } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaBolt className="text-red-700 text-lg" />,
      title: "Long-lasting Performance",
      description: "Deep cycling, low maintenance, and superior capacity."
    },
    {
      icon: <FaShieldAlt className="text-red-700 text-lg" />,
      title: "Enhanced Durability",
      description: "Vibration-resistant with high mechanical strength."
    },
    {
      icon: <FaTachometerAlt className="text-red-700 text-lg" />,
      title: "Efficient Operation",
      description: "Low self-discharge and easy acid level monitoring."
    },
  ];

  return (
    <div className="flex  flex-col md:flex-row md:justify-center items-center md:items-start space-y-2 md:space-y-0 md:space-x-10 w-full max-w-5xl ">
      {features.map((feature, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex justify-center items-center border border-red-700 text-black rounded-full md:w-14 w-12 h-12 md:mx-auto mb-4 ">
            {feature.icon}
          </div>
          <div>
            <h3 className="text-md font-semibold">{feature.title}</h3>
            <p className="text-gray-600 text-xs">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
