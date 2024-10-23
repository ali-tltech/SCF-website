import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo';
import ConsultingServiceContent from '@/components/services/ConsultingServicesContent';

const ConsultingServices = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <AuroraBackgroundDemo  title={'Consulting Services'} description={'Elevate Your Supply Chain Finance Strategy'} link={'Learn More'}/>

      {/* Main Content */}
      <ConsultingServiceContent />
    </div>
  );
};

export default ConsultingServices;