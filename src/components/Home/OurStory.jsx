import Image from 'next/image';
import { motion } from 'framer-motion';

const OurStory = () => {
  const milestones = [
    {
      year: "2015",
      title: "Foundation",
      content: "Founded with a vision to revolutionize Supply Chain Finance by integrating both funding and technology solutions.",
      image: "/images/Blog/5.png"
    },
    {
      year: "2015-2020",
      title: "$150B+ Impact",
      content: "Achieved over $150 billion in trading volume and $2 billion in outstanding results through our integrated approach.",
      image: "/images/Blog/3.png"
    },
    {
      year: "Today",
      title: "Global Leader",
      content: "Recognized as an industry leader with 100+ SCF programs implemented globally, serving corporates, financial institutions, and Fintechs.",
      image: "/images/Blog/4.png"
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-primary to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-title mb-4 sm:mb-6">Our Journey of Innovation</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base px-4">
            Transforming Supply Chain Finance through integrated solutions, expertise, and innovation since 2015.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-8 sm:mb-12 lg:mb-16">
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl">
            <Image
              src="/images/team-image.jpeg"
              alt="SCF Strategies Headquarters"
              layout="fill"
              objectFit="cover"
              className="rounded-xl sm:rounded-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl font-semibold text-title">Pioneering Integrated Solutions</h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-lg">
              Founded in 2015, SCF Strategies emerged from the recognition that traditional Supply Chain Finance providers typically offer either funding or technology, but rarely both in an integrated manner. With over 15 years of experience, we've revolutionized the industry by combining best practice processes with cutting-edge technology and robust funding capacity.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
              <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg">
                <h4 className="text-2xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">$150B+</h4>
                <p className="text-gray-600 text-sm sm:text-base">Trading Volume</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg">
                <h4 className="text-2xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">100+</h4>
                <p className="text-gray-600 text-sm sm:text-base">Global Programs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="space-y-8 sm:space-y-12">
          {milestones.map((milestone, index) => (
            <div key={index} 
                 className={`flex flex-col md:flex-row gap-6 sm:gap-8 items-center 
                            ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
             <div className="w-full md:w-1/2 relative h-[250px] sm:h-[300px] rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg">
  <Image
    src={milestone.image}
    alt={milestone.title}
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    priority
    className="rounded-lg sm:rounded-xl hover:scale-105 transition-transform duration-500 object-cover"
  />
</div>
              <div className="w-full md:w-1/2 space-y-3 sm:space-y-4">
                <div className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-blue-100 rounded-full text-blue-600 font-semibold text-sm sm:text-base">
                  {milestone.year}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-title">{milestone.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-lg">{milestone.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-12 lg:mt-16 bg-blue-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-title mb-3 sm:mb-4">Our Commitment to Excellence</h3>
          <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base">
            Today, SCF Strategies is recognized as an industry leader in SCF consulting. Our proven approach and methodology have successfully assessed markets and implemented programs, unlocking billions in working capital and free cash flow for leading companies worldwide.
          </p>
          <button className="mt-4 sm:mt-6 px-6 sm:px-8 py-2 sm:py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base">
            Learn More About Our Impact
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurStory;