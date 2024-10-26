import React from 'react';
import { FileText, BookOpen, PieChart,} from 'lucide-react';
import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo';
import Link from 'next/link';
import WaveComponent from '@/components/ui/WaveComponent';
import CustomeButton from '@/components/ui/CustomeButton';

const ResourceCard = ({ icon: Icon, title, description, iconColor, buttonText, linkPath }) => (
  <div className="bg-white shadow-lg rounded-lg p-8 text-left hover:shadow-xl transition-shadow flex flex-col h-full min-h-[300px]">
    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${iconColor}`}>
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
    <p className="text-gray-600  text-lg mb-6 flex-grow">{description}</p>
    <div className="flex justify-center mt-auto">
      <Link href={`${linkPath}`} className="text-blue-600 hover:text-blue-800 transition-colors text-lg font-semibold">
        {buttonText}
      </Link>
    </div>
  </div>
);

const ResourceCenter = () => {
  return (
    <div className=" bg-primary">
      <AuroraBackgroundDemo
        title="Resource Center"
        description="Find the best resources for your SCF programs"
        link="Learn More"
      />

      <div className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">
          Your Hub for Supply Chain Finance Insights
        </h2>
        <p className="text-xl md:text-xl mb-16 text-start md:text-center text-gray-600 max-w-4xl mx-auto">
        Dive into a wealth of knowledge and expertise at SCF Strategies. <br/> Our Resource Center is designed to provide you with valuable information, cutting-edge research, and practical tools to enhance your understanding and execution of Supply Chain Finance (SCF) strategies. From comprehensive whitepapers to insightful case studies, we equip you with the resources you need to stay ahead in the dynamic world of SCF.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          <ResourceCard
            icon={FileText}
            title="Whitepapers & Reports"
            description="Access our collection of detailed whitepapers and industry reports. These documents offer thorough analyses and strategic insights into the latest trends and developments in Supply Chain Finance, helping you make informed decisions and stay ahead of the curve."
            iconColor="bg-blue-500"
            buttonText="Explore"
            linkPath='/contact-us'
          />
          <ResourceCard
            icon={BookOpen}
            title="Blog & Articles"
            description="Explore our blog for regular updates, expert opinions, and practical advice on SCF. Our articles cover a wide range of topics, from emerging trends and best practices to practical tips for optimizing your SCF programs."
            iconColor="bg-green-500"
            buttonText="Explore"
            linkPath='/blog'
          />
          <ResourceCard
            icon={PieChart}
            title="Case Studies"
            description="Learn from real-world examples of successful SCF implementations. Our case studies showcase how leading companies have transformed their supply chain finance strategies, offering valuable lessons and inspiration for your own initiatives."
            iconColor="bg-purple-500"
            buttonText="Explore"
            linkPath='/contact-us'
          />
        </div>

        <div className="mt-16 text-center relative z-10">
          <CustomeButton title="Explore Our Resources" link="/catalogues" />
        </div>
      </div>
      <WaveComponent />
    </div>
  );
};

export default ResourceCenter; 