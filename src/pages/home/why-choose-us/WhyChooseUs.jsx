import ChooseUsBanner from '../../../assets/why-choose-us.jpg';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { GiArchiveRegister } from 'react-icons/gi';
import { MdRealEstateAgent } from 'react-icons/md';
import { MdOutlineSupportAgent } from 'react-icons/md';
const WhyChooseUs = () => {
  return (
    <div
      style={{ backgroundImage: `url(${ChooseUsBanner})` }}
      className="lg:h-[70vh]  "
    >
      <div className=" h-full grid  md:grid-cols-2 lg:grid-cols-4 max-w-[1440px] mx-auto  gap-5 items-center justify-center p-2 ">
        <div className="w-80 h-80 bg-base-300 rounded-full mx-auto">
          <div className=" flex items-center rounded-full justify-center h-20 w-20 m-5 mx-auto hover:bg-main hover:text-[#fff] bg-[#fff] text-main cursor-pointer">
            <HiOutlineBuildingOffice2 className="text-4xl" />
          </div>
          <div className="text-center">
            <h1 className="font-bold text-xl">Find Your Dream Home</h1>
            <p className="px-2 mt-2">
              Find your ideal home with our extensive listings and expert
              guidance, turning your home ownership dream into reality.
            </p>
          </div>
        </div>
        <div className="w-80 h-80 bg-base-300 rounded-full mx-auto">
          <div className=" flex items-center rounded-full justify-center h-20 w-20 m-5 mx-auto hover:bg-main hover:text-[#fff] bg-[#fff] text-main cursor-pointer">
            <MdRealEstateAgent className="text-4xl" />
          </div>
          <div className="text-center">
            <h1 className="font-bold text-xl">Buy or Rent Homes</h1>
            <p className="px-2 mt-2">
              Explore our listings for the perfect home, whether for investment
              or temporary stay, tailored to fit your lifestyle.
            </p>
          </div>
        </div>
        <div className="w-80 h-80 bg-base-300 rounded-full mx-auto">
          <div className=" flex items-center rounded-full justify-center h-20 w-20 m-5 mx-auto hover:bg-main hover:text-[#fff] bg-[#fff] text-main cursor-pointer">
            <MdOutlineSupportAgent className="text-4xl" />
          </div>
          <div className="text-center">
            <h1 className="font-bold text-xl">Experienced Agents</h1>
            <p className="px-2 mt-2">
              Rely on our seasoned agents for smooth real estate transactions,
              ensuring success from start to finish.
            </p>
          </div>
        </div>
        <div className="w-80 h-80 bg-base-300 rounded-full mx-auto">
          <div className=" flex items-center rounded-full justify-center h-20 w-20 m-5 mx-auto hover:bg-main hover:text-[#fff] bg-[#fff] text-main cursor-pointer">
            <GiArchiveRegister className="text-4xl" />
          </div>
          <div className="text-center">
            <h1 className="font-bold text-xl">List Your Own Property</h1>
            <p className="px-2 mt-2">
              List your property with us for expert support and a user-friendly
              platform, showcasing it to potential buyers effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
