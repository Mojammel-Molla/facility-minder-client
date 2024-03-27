const Achievements = () => {
  return (
    <>
      <h1 className=" text-2xl md:my-10 font-bold md:text-4xl lg:text-5xl text-center ">
        Our Achievements
      </h1>
      <div className="grid  md:grid-cols-2 bg-[#08a8e4] sm:h-[90vh] md:h-[50vh] lg:h-[40vh] lg:grid-cols-4 gap-5 my-8 text-[#ffffff]">
        <div className="shadow-xl text-center h-24 lg:h-40 my-auto pt-2">
          <h1 className=" md:text-3xl lg:text-6xl font-bold">1.2k Flats</h1>
          <p className="text-lg font-semibold">Sales Successfully</p>
        </div>
        <div className="shadow-xl text-center h-24 lg:h-40 my-auto">
          <h1 className="md:text-3xl lg:text-6xl font-bold">2000+</h1>
          <p className="text-lg font-semibold">Customers</p>
        </div>
        <div className="shadow-xl text-center h-24 lg:h-40 my-auto">
          <h1 className="md:text-3xl lg:text-6xl font-bold">200+</h1>
          <p className="text-lg font-semibold">Current Bookings</p>
        </div>
        <div className="shadow-xl text-center h-24 lg:h-40 my-auto">
          <h1 className="md:text-3xl lg:text-6xl font-bold">500+</h1>
          <p className="text-lg font-semibold">Construction Running</p>
        </div>
      </div>
    </>
  );
};

export default Achievements;
