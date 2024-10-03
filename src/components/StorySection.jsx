import Image from 'next/image';

const RecentStories = () => {
  const articles = [
    {
      id: 1,
      title: "Making Peace With The Feast Or Famine Of Freelancing",
      date: "August 15, 2022",
      image: "/images/LandingPage/discover.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
    },
    {
      id: 2,
      title: "I Used The Web For A Day On A 50 MB Budget",
      date: "August 18, 2022",
      image: "/images/LandingPage/discover.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
    },
    {
      id: 3,
      title: "Here are the 5 most telling signs of micromanagement",
      date: "August 15, 2022",
      image: "/images/LandingPage/discover.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Recent Story</h2>
          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <div key={article.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-500">Admin / {article.date}</p>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {article.title}
                </h3>
                <p className="mt-2 text-gray-600">{article.description}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-indigo-500 hover:underline"
                >
                  Read Story +
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentStories;
