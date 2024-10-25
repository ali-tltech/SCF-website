'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Globe, Search, Handshake, DollarSign, TrendingUp, ArrowUpCircle, Wallet, HandshakeIcon } from 'lucide-react';
import { AnimatePresence ,motion} from 'framer-motion';

const ConsultingServicesContent = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const accordionData = [
        {
            title: "Go-to-Market Strategy for Supply Chain Finance",
            icon: <Globe className="w-8 h-8 text-blue-500" />,
            content: [
                "Break into the SCF market with confidence. Our go-to-market strategies are tailored to position you effectively, leveraging data-driven insights and industry best practices.",
                "Identify your target audience, refine your value proposition, and create a plan for competitive differentiation and market success."
            ]
        },
        {
            title: "Supply Chain Finance Solution Audit",
            icon: <Search className="w-8 h-8 text-green-500" />,
            content: [
                "Ensure your SCF platform and services are performing at their peak. Our comprehensive solution audit delves into every aspect of your current SCF setup, identifying gaps, inefficiencies, and untapped opportunities.",
                "We provide actionable recommendations to enhance performance, scalability, and supplier relationships."
            ]
        },
        {
            title: "SCF Platform & Partner Selection",
            icon: <Handshake className="w-8 h-8 text-purple-500" />,
            content: [
                "Selecting the right SCF platform and partners is crucial for a successful strategy. We offer an objective evaluation process to guide you through the complexities of choosing the most suitable technology and strategic partners.",
                "This ensures seamless integration with your business goals, driving sustainable growth and maximizing your supply chain finance."
            ]
        },
        {
            title: "SCF Accounting Treatment",
            icon: <DollarSign className="w-8 h-8 text-red-500" />,
            content: [
                "Navigate the financial intricacies of supply chain finance with our expert support. We offer comprehensive guidance on accounting treatments, ensuring compliance with the latest regulations and industry standards.",
                "Manage financial risk, improve reporting accuracy, and maintain transparency in your financial operations with our specialized SCF accounting services."
            ]
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4  lg:px-8 py-16 ">
            <div className="text-center mb-16">
                <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-6">Expert Supply Chain Finance Consulting Services for Optimal SCF Strategies</h2>
                <p className="text-lg md:text-xl text-gray-700 text-start md:text-center ">
                    💡 Unlock the Full Potential of Your Supply Chain Finance (SCF) Programs with Expert Advisory Services. At SCF Strategies, our supply chain finance consulting services go beyond standard advisory. We provide <strong>insightful and innovative solutions</strong> that address the unique challenges of your SCF programs. By focusing on strategic optimization and practical implementation, we transform your supply chain finance into a powerful driver of growth, <strong>improving cash flow</strong>, and <strong>enhancing working capital efficiency</strong>.
                </p>
            </div>

            <div className="rounded-lg py-8 px-2 mb-16">
                <h3 className=" text-xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Our Consulting Services</h3>

                {/* Accordion */}
                <div className="space-y-6">
                    {accordionData.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <button
                                className="flex justify-between items-center w-full  p-6 text-left transition-colors duration-200"
                                onClick={() => toggleAccordion(index)}
                            >
                                <div className="flex items-center">
                                    <div className="mr-4">{item.icon}</div>
                                    <span className="text-xl font-semibold text-gray-800">{item.title}</span>
                                </div>
                                {activeAccordion === index ?
                                    <ChevronUp className="w-6 h-6 text-gray-500" /> :
                                    <ChevronDown className="w-6 h-6 text-gray-500" />
                                }
                            </button>
                            <AnimatePresence>
                            {activeAccordion === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-6 bg-gray-50 border-t border-gray-200">
                                        {item.content.map((paragraph, pIndex) => (
                                            <motion.p
                                                key={pIndex}
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ delay: pIndex * 0.1, duration: 0.3 }}
                                                className="text-gray-700 text-lg mb-4 last:mb-0"
                                            >
                                                {paragraph}
                                            </motion.p>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mb-16">
                <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                    Transformative Supply Chain Finance Strategies for Sustainable Success
                </h3>

                <div className="bg-indigo-200 rounded-lg px-4 py-8">
                    <p className="text-2xl font-semibold text-gray-700 text-center">
                        Our consulting services provide a roadmap to tangible results.
                    </p>
                    <p className="text-lg text-gray-700 text-center mb-8">
                        By optimizing your SCF programs, we help you
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
                        <div className="flex items-center bg-white px-6 py-4 rounded-lg shadow-sm  w-full md:w-[350px]">
                            <ArrowUpCircle className="w-12 h-12 text-blue-600 mr-4" />
                            <h4 className="font-semibold md:text-lg text-gray-900">Enhance Cash Flow</h4>
                        </div>

                        <div className="flex items-center bg-white px-6 py-4 rounded-lg shadow-sm  w-full md:w-[350px]">
                            <Wallet className="w-12 h-12 text-blue-600 mr-4" />
                            <h4 className="font-semibold md:text-lg text-gray-900">Improve Working Capital</h4>
                        </div>

                        <div className="flex items-center bg-white px-6 py-4 rounded-lg shadow-sm   w-full md:w-[350px]">
                            <HandshakeIcon className="w-12 h-12 text-blue-600 mr-4" />
                            <h4 className="font-semibold md:text-lg text-gray-900">Strengthen Relationships</h4>
                        </div>
                    </div>

                    <p className="text-lg text-gray-700 text-center">
                        Our data-driven strategies and expert insights enable you to make informed decisions,
                        fostering long-term success and competitive advantage in the supply chain finance marketplace.
                    </p>
                </div>
            </div>

            {/* CTA Section */}
            {/* <div className="text-center bg-blue-600 text-white rounded-lg p-12">
                <h4 className="text-3xl font-bold mb-4">Explore Our Supply Chain Finance Consulting Services</h4>
                <p className="text-xl mb-8">Take the first step toward elevating your supply chain finance strategy. Our team of experts is here to guide you through every stage of your SCF journey, from strategic planning to execution. Explore our consulting services to discover how we can help you achieve exceptional results and unlock new opportunities for your business.</p>
                <button className="bg-white text-blue-600 hover:bg-blue-100 font-bold py-3 px-8 rounded-full transition-colors duration-200 text-lg">
                    Get Started Today
                </button>
            </div> */}
        </div>
    );
};

export default ConsultingServicesContent;