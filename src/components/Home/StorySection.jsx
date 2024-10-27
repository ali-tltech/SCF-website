import Image from 'next/image';
import { BsCalendar2Date } from 'react-icons/bs';
import CustomeButton from '../ui/CustomeButton';

const RecentStories = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Roundtable on Supply Chain Finance at TXF in New York',
      author: 'SCF Strategies',
      date: 'September 17, 2018',
      image: '/images/blog/5.png',
      excerpt: 'SCF Strategies participated in the TXF Conference in New York, discussing emerging trends and the impact of trade dynamics.',
    },
    {
      id: 2,
      title: 'SCF Strategies at the BAFT Supply Chain Finance Bootcamp',
      author: 'SCF Strategies',
      date: 'September 17, 2018',
      image: '/images/blog/2.png',
      excerpt: 'SCF Strategies attended the BAFT Bootcamp, focusing on technological innovations and best practices in SCF programs.',
    },
    {
      id: 3,
      title: '4 Key Success Factors for Effective Supply Chain Finance',
      author: 'SCF Strategies',
      date: 'October 30, 2018',
      image: '/images/blog/3.png',
      excerpt: 'This post outlines four essential success factors for SCF programs, including setting clear targets and selecting the right structure.',
    }
  ];

  return (
    <section className="py-12 bg-primary leading-tight">
      <div className="max-w-7xl flex flex-col items-center justify-start mx-auto px-4 space-y-5">
        <div className="text-start w-full">
          <h2 className="text-4xl font-bold text-title">Industry Insights & Updates</h2>
          <p className="mt-4 text-gray-500">
            Explore our latest thought leadership, market analyses, and expert perspectives on Supply Chain Finance. <br /> 
            Stay informed about industry trends and innovative solutions.
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white relative p-4 shadow-lg rounded-2xl overflow-hidden">
              <div className="relative h-72 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full rounded-2xl"
                />
              </div>
              <div className="p-3">
                <p className="text-gray-600 flex gap-2 text-xs">
                  <BsCalendar2Date className='text-black'/> 
                  {post.author} / {post.date}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-title line-clamp-2">
                  {post.title}
                </h3>
                <p className="mt-1 text-gray-700 line-clamp-3">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
        <CustomeButton title={"Explore Financial Insights"}/>
      </div>
    </section>
  );
};

export default RecentStories;