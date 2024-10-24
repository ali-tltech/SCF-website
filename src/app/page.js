import HomeContent from "@/components/Home/HomeContent";

export const metadata = {
  title: 'Home',
  description: 'Welcome to SCF Strategies - Your trusted partner in financial solutions',
  openGraph: {
    title: 'Home | SCF Strategies',
    description: 'Welcome to SCF Strategies - Your trusted partner in financial solutions',
  },
};

export default function HomePage() {
  return <HomeContent />;
}