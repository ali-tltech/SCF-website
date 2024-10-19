import ConsultingServiceContent from '@/components/services/ConsultingServicesContent';

const ConsultingServices = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="h-[60vh] w-full relative flex justify-center items-center text-white bg-cover bg-center" 
           style={{ backgroundImage: "url('/images/LandingPage/bg-14.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 text-center">
          <h1 className="font-bold text-6xl mb-4">Consulting Services</h1>
          <p className="text-xl">Elevate Your Supply Chain Finance Strategy</p>
        </div>
      </div>

      {/* Main Content */}
      <ConsultingServiceContent />
    </div>
  );
};

export default ConsultingServices;