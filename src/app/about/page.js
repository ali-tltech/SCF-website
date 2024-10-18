import TeamCarousel from '@/components/TeamCarousal'
import Image from 'next/image'

export default function About() {
  return (
    <>
    <div className='h-[50vh] w-full relative flex justify-center items-center text-white bg-white' style={{ backgroundImage: "url('/images/LandingPage/bg-14.jpg')"} }>
    <h1 className='font-bold text-[40px] top-10'>About Us</h1>
     </div>
    <div className=" bg-white mx-auto py-12">
      {/* Section with image and text */}
      
      <div className="flex flex-col md:flex-row items-center justify-start space-y-8 md:space-y-0">
        
        {/* Left: Image section */}
        <div className="relative w-full md:w-1/2 h-[70vh]  ">

          <Image
            src="/images/agency-about-img.0d3d0b65.jpg"  // Replace with your image path
            alt="Team"
            layout="fill"
            objectFit="contain"
            className="rounded-lg "
          />
          {/* Overlay with design */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent"></div>
        </div>

        {/* Right: Text content */}
        <div className="w-full text-base md:w-1/2">
          <div className="mb-4">
            <span className="bg-purple-100 text-pink-400 text-xs font-semibold mr-2 px-2.5 py-2 rounded">
              About Us
            </span>
          </div>
          <h2 className="text-5xl text-black font-bold mb-4">
            Engaging New Audiences Through Smart Approach
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-gray-600 ">
            Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.
          </p>
          <p className="text-gray-600">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
          </p>
        </div>
      </div>
      <TeamCarousel/>
    </div>
    </>
  )
}
