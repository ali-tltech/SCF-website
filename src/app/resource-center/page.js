import React from 'react';
import { FileText, BookOpen, PieChart,} from 'lucide-react';
import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo';
import Link from 'next/link';
import WaveComponent from '@/components/ui/WaveComponent';

const ResourceCard = ({ icon: Icon, title, description, iconColor, buttonText, linkPath }) => (
  <div className="bg-white shadow-lg rounded-lg p-8 text-left hover:shadow-xl transition-shadow flex flex-col h-full min-h-[300px]">
    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${iconColor}`}>
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
    <p className="text-gray-600 text-base mb-6 flex-grow">{description}</p>
    <div className="flex justify-center mt-auto">
      <Link href={`${linkPath}`} className="text-blue-600 hover:text-blue-800 transition-colors text-lg font-semibold">
        {buttonText}
      </Link>
    </div>
  </div>
);

const ResourceCenter = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 ">
      <AuroraBackgroundDemo
        title="Resource Center"
        description="Find the best resources for your SCF programs"
        link="Learn More"
      />

      <div className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">
          Your Hub for Supply Chain Finance Insights
        </h2>
        <p className="text-xl md:text-xl mb-16 text-center text-gray-600 max-w-4xl mx-auto">
          Dive into a wealth of knowledge and expertise. Our Resource Center provides valuable information, cutting-edge research, and practical tools to enhance your understanding of Supply Chain Finance strategies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <ResourceCard
            icon={FileText}
            title="Whitepapers & Reports"
            description="Access comprehensive analyses and industry reports on the latest Supply Chain Finance trends and developments. Our whitepapers offer deep insights to help you make informed decisions and stay ahead in the field."
            iconColor="bg-blue-500"
          />
          <ResourceCard
            icon={BookOpen}
            title="Blog & Articles"
            description="Explore expert opinions, practical advice, and thought leadership pieces on optimizing your SCF programs and strategies. Stay updated with the latest industry news and best practices through our regularly updated blog."
            iconColor="bg-green-500"
            buttonText="Explore blogs"
            linkPath='/blog'
          />
          <ResourceCard
            icon={PieChart}
            title="Case Studies"
            description="Learn from real-world examples of successful SCF implementations and transformations. Our case studies showcase how leading companies have leveraged SCF to improve their financial performance and supply chain relationships."
            iconColor="bg-purple-500"
          />
        </div>

        <div className="mt-16 text-center relative z-10">
          <a
            href="#"
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-md font-semibold text-xl hover:bg-blue-700 transition-colors"
          >
            Explore All Resources
          </a>
        </div>
      </div>
      <WaveComponent />
    </div>
  );
};

export default ResourceCenter; 