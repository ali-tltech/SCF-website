import Image from 'next/image';
import AdvisoryServicesContent from '../../components/services/AdvisoryServicesContent';
import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo';

const AdvisoryServices = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <AuroraBackgroundDemo  title={'Advisory Services'} link={'Learn More'}/>

      {/* Main Content */}
      <AdvisoryServicesContent />
    </div>
  );
};

export default AdvisoryServices;