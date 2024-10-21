import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo.jsx';
import DisclaimerPage from '../../components/DisclaimerPage/DisclaimerPage.jsx';

export default function Page() {
  return (
    <>
      <div className="bg-white">
        {/* Hero Section */}
      <AuroraBackgroundDemo  title={'Disclaimer'} description={'Important information about our services'} link={'Learn More'}/>

        {/* Main Content */}
        <DisclaimerPage />
      </div>
    </>
  );
}