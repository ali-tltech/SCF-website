
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaGlobe, FaSearch, FaHandshake, FaMoneyBillWave, FaChartLine } from 'react-icons/fa';

const AccordionItem = ({ title, icon: Icon, content, isActive, onClick }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <button
            className="flex justify-between items-center w-full p-6 text-left transition-colors duration-200"
            onClick={onClick}
        >
            <div className="flex items-center">
                <Icon className="w-8 h-8 text-cyan-600 mr-4" />
                <span className="text-xl font-semibold text-gray-800">{title}</span>
            </div>
            {isActive ?
                <ChevronUp className="w-6 h-6 text-gray-500" /> :
                <ChevronDown className="w-6 h-6 text-gray-500" />
            }
        </button>
        {isActive && (
            <div className="p-6 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-700">{content}</p>
            </div>
        )}
    </div>
);

const ConsultingServiceContent = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const servicesData = [
        {
            icon: FaGlobe,
            title: "Go-to-Market Strategy for Supply Chain Finance",
            content: "Break into the SCF market with confidence. Our go-to-market strategies are tailored to position you effectively, leveraging data-driven insights and industry best practices. Identify your target audience, refine your value proposition, and create a plan for competitive differentiation and market success."
        },
        {
            icon: FaSearch,
            title: "Supply Chain Finance Solution Audit",
            content: "Ensure your SCF platform and services are performing at their peak. Our comprehensive solution audit delves into every aspect of your current SCF setup, identifying gaps, inefficiencies, and untapped opportunities. We provide actionable recommendations to enhance performance, scalability, and supplier relationships."
        },
        {
            icon: FaHandshake,
            title: "SCF Platform & Partner Selection",
            content: "Selecting the right SCF platform and partners is crucial for a successful strategy. We offer an objective evaluation process to guide you through the complexities of choosing the most suitable technology and strategic partners. This ensures seamless integration with your business goals, driving sustainable growth and maximizing your supply chain finance."
        },
        {
            icon: FaMoneyBillWave,
            title: "SCF Accounting Treatment",
            content: "Navigate the financial intricacies of supply chain finance with our expert support. We offer comprehensive guidance on accounting treatments, ensuring compliance with the latest regulations and industry standards. Manage financial risk, improve reporting accuracy, and maintain transparency in your financial operations with our specialized SCF accounting services."
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Unlock the Full Potential of Your Supply Chain Finance (SCF) Programs</h2>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                        At SCF Strategies, our supply chain finance consulting services go beyond standard advisory. We provide <strong>insightful and innovative solutions</strong> that address the unique challenges of your SCF programs. By focusing on strategic optimization and practical implementation, we transform your supply chain finance into a powerful driver of growth, <strong>improving cash flow</strong>, and <strong>enhancing working capital efficiency</strong>.
                    </p>
                </div>

                <div className="bg-gray-100 rounded-lg p-8 mb-16">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Our Advisory Services</h3>

                    {/* Accordion */}
                    <div className="space-y-6">
                        {servicesData.map((item, index) => (
                            <AccordionItem
                                key={index}
                                {...item}
                                isActive={activeAccordion === index}
                                onClick={() => toggleAccordion(index)}
                            />
                        ))}
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="mb-16">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                        Transformative Supply Chain Finance Strategies for Sustainable Success
                    </h3>
                    <div className="bg-cyan-50 rounded-lg p-8">
                        <FaChartLine className="w-16 h-16 text-cyan-600 mx-auto mb-6" />
                        <p className="text-lg text-gray-700 text-center">
                            Our consulting services provide a <strong>roadmap to tangible results</strong>. By optimizing your SCF programs, we help you enhance cash flow, improve working capital, and strengthen supplier relationships. Our <strong>data-driven strategies</strong> and expert insights enable you to make informed decisions, fostering long-term success and <strong>competitive advantage</strong> in the supply chain finance marketplace.
                        </p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center bg-blue-600 text-white rounded-lg p-12">
                    <h4 className="text-2xl md:text-3xl font-bold mb-4">Ready to elevate your SCF strategy?</h4>
                    <p className="text-lg md:text-xl mb-8">Let's connect and explore how our Consultory Services can help you achieve your goals.</p>
                    <button className="bg-white text-blue-600 hover:bg-blue-100 font-bold py-3 px-8 rounded-full transition-colors duration-200 text-lg">
                        Contact Us Today
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConsultingServiceContent;