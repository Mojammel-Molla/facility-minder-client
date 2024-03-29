import GreetingImage from '../../../assets/loan-banner.jpg';
const Greetings = () => {
  return (
    <div className="mt-2">
      <div className="hero min-h-[60vh] t bg-[#84c7e05a]">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full">
          <img src={GreetingImage} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="max-w-xl">
            <h1 className="text-2xl md:text-4xl font-bold">
              Welcome Home to
              <span className="text-[#1976d2]"> Facility Minder</span>
            </h1>
            <p className="py-6">
              Experience the warmth and comfort of home at 'Facility Minder'.
              Our dedicated team is here to ensure your living experience
              exceeds expectations. From modern amenities to exceptional
              service, we invite you to discover the perfect blend of luxury and
              convenience in your new home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greetings;
