import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import React, { useState, useEffect } from 'react';

import elBattery from "../assets/images/el-laikon-battery.png";
import clBattery from "../assets/images/cl-laikon-battery.png";
import slBattery from "../assets/images/sl-laikon-battery.png";
import batteryManufacture from "../assets/images/image-2-84.jpg";

import { FaBolt, FaRecycle, FaThermometerHalf } from 'react-icons/fa';

const batterySeries = [
    {
        name: 'CL BATTERY',
        image: clBattery,
        details: [
            {
                type: 'IT 160',
                capacity: '160 AH',
                dimensions: '505 x 188 x 415',
                warranty: '36+24',
            },
            {
                type: 'IT 210',
                capacity: '210 AH',
                dimensions: '505 x 188 x 415',
                warranty: '36+24',
            },
        ],
        isC20: true
    },
    {
        name: 'EL BATTERY',
        image: elBattery,
        details: [
            {
                type: 'IT 160',
                capacity: '160 AH',
                dimensions: '505 x 168 x 415',
                warranty: '48+12',
            },
            {
                type: 'IT 210',
                capacity: '210 AH',
                dimensions: '505 x 188 x 415',
                warranty: '48+12',
            },
        ],
        isC20: true
    },
    {
        name: 'SL BATTERY',
        image: slBattery,
        details: [
            {
                type: 'IT 160',
                capacity: '160 AH',
                dimensions: '505 x 188 x 415',
                warranty: '60',
            },
            {
                type: 'IT 210',
                capacity: '210 AH',
                dimensions: '505 x 188 x 415',
                warranty: '60',
            },
        ],
        isC20: false
    },
];

const BatteryProductPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [selectedSeries, setSelectedSeries] = useState(batterySeries[0]);

    const features = [
        {
            title: "High pressured spine designed positive plates",
            description: "For deep cycling capability & battery long life."
        },
        {
            title: "Specially designed negative plates",
            description: "For better active material utilization."
        },
        {
            title: "Advanced low maintenance design",
            description: "Selenium lead alloy technology for low maintenance uniqueness."
        },
        {
            title: "Precise active material ratio",
            description: "For battery long service life."
        },
        {
            title: "Specially formulated paste/active material",
            description: "For more capacity & better charge acceptance."
        },
        {
            title: "Advanced PE type separator",
            description: "To eliminate internal short circuits."
        },
        {
            title: "Good charge acceptance & vibration resistant performance",
            description: "Ensuring reliability in operation."
        },
        {
            title: "Heavier PPCP container",
            description: "With good appearance, best mechanical strength & better heat dissipation."
        },
        {
            title: "High power at different rates of discharge",
            description: "Meeting diverse operational needs."
        },
        {
            title: "High capacity and low maintenance-cost",
            description: "Providing economic and efficient solutions."
        },
        {
            title: "Low impurity level",
            description: "Ensures long battery life and low self-discharge."
        },
        {
            title: "Ceramic float vent-plug",
            description: "Designed for easy acid level monitoring & to prevent the escape of acid fumes."
        }
    ];

    const specs = [
        { icon: <FaBolt />, label: "Voltage", value: "12V" },
        { icon: <FaThermometerHalf />, label: "Operating Temperature", value: "-20°C to 60°C" },
        { icon: <FaRecycle />, label: "Cycle Life", value: "500+ cycles" },
    ];

    return (
        <>
            <Navbar scrolled={false} />
            <section className="bg-red-600 text-white py-12 pt-40 relative">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${batteryManufacture})` }}>
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#821013] via-[#AD100B] to-[#B7110F] opacity-90"></div>
                </div>
                <div className="relative z-10 container mx-auto px-6 lg:px-20 text-center">
                    <h1 className="text-4xl font-bold mb-4">Batteries</h1>
                </div>
            </section>

            <div className="min-h-screen bg-gray-50 pt-12">
                <main className="max-w-7xl mx-auto p-4">
                    <div className="flex justify-center items-center mx-auto overflow-auto w-fit h-fit">
                        {batterySeries.map((series) => (
                            <button
                                key={series.name}
                                onClick={() => setSelectedSeries(series)}
                                className={`px-4 py-2 border shadow-md text-sm font-semibold ${selectedSeries.name === series.name
                                    ? 'bg-red-600 text-white'
                                    : 'bg-transparent text-red-600 border-red-600'
                                    } hover:bg-red-500 hover:text-white`}
                            >
                                {series.name}
                            </button>
                        ))}
                    </div>

                    <section className="mt-6 p-6 flex flex-col items-center md:flex-row gap-12">
                        <div className='flex justify-center items-center mb-6 md:w-1/2'>
                            <img
                                src={selectedSeries.image}
                                alt={selectedSeries.name}
                                className="w-full max-w-md mb-4 rounded-lg object-contain"
                            />
                        </div>

                        <div className='md:w-1/2 w-full'>
                            <h2 className="text-3xl font-bold text-gray-800 text-center md:text-start mb-4">{selectedSeries.name}</h2>
                            <h2 className="text-xl font-bold text-gray-800 text-start mb-4">C10 Rate</h2>

                            <div className="relative overflow-x-auto">
                                <table className="min-w-full table-auto border-collapse border border-gray-300 mb-6">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border border-gray-300 px-4 py-2">Type</th>
                                            <th className="border border-gray-300 px-4 py-2">Capacity</th>
                                            <th className="border border-gray-300 px-4 py-2">Dimensions (mm)</th>
                                            <th className="border border-gray-300 px-4 py-2">Warranty (Months)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selectedSeries.details.map((battery) => (
                                            <tr key={battery.type} className="hover:bg-gray-50">
                                                <td className="border border-gray-300 px-4 py-2 text-center">{battery.type}</td>
                                                <td className="border border-gray-300 px-4 py-2 text-center">{battery.capacity}</td>
                                                <td className="border border-gray-300 px-4 py-2 text-center">{battery.dimensions}</td>
                                                <td className="border border-gray-300 px-4 py-2 text-center">{battery.warranty}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {selectedSeries.isC20 && (
                                <>
                                    <h2 className="text-xl font-bold text-gray-800 text-start mb-4">C20 Rate</h2>
                                    <div className="relative overflow-x-auto">
                                        <table className="min-w-full table-auto border-collapse border border-gray-300 mb-6">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="border border-gray-300 px-4 py-2">Type</th>
                                                    <th className="border border-gray-300 px-4 py-2">Capacity</th>
                                                    <th className="border border-gray-300 px-4 py-2">Dimensions (mm)</th>
                                                    <th className="border border-gray-300 px-4 py-2">Warranty (Months)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {selectedSeries.details.map((battery) => (
                                                    <tr key={battery.type} className="hover:bg-gray-50">
                                                        <td className="border border-gray-300 px-4 py-2 text-center">{battery.type}</td>
                                                        <td className="border border-gray-300 px-4 py-2 text-center">{battery.capacity}</td>
                                                        <td className="border border-gray-300 px-4 py-2 text-center">{battery.dimensions}</td>
                                                        <td className="border border-gray-300 px-4 py-2 text-center">{battery.warranty}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </>
                            )}
                        </div>
                    </section>

                    <div className="bg-gray-50 text-gray-800 md:p-8">
                        <h1 className="text-3xl font-bold text-center mb-6 text-red-600">General Features</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="border border-gray-300 shadow-sm p-5 rounded-lg">
                                    <h2 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h2>
                                    <p className="text-sm text-gray-700">{feature.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Specifications</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {specs.map((spec, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center p-4 rounded-lg border border-gray-300"
                                    >
                                        <div className="text-red-600 text-2xl mr-4">{spec.icon}</div>
                                        <div>
                                            <h4 className="text-lg font-medium text-gray-800">{spec.label}</h4>
                                            <p className="text-gray-600">{spec.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default BatteryProductPage;
