const Achievements = () => {
  return (
    <div className="grid bg-[#08a8e4] h-[30vh] lg:grid-cols-4 gap-5">
      <div className="shadow-xl text-center h-40 my-auto">
        <h1 className="text-6xl font-bold">1.2k Flats</h1>
        <p className="text-lg font-semibold">Sales Successfully</p>
      </div>
      <div className="shadow-xl text-center h-40 my-auto">
        <h1 className="text-6xl font-bold">2000+</h1>
        <p className="text-lg font-semibold">Customers</p>
      </div>
      <div className="shadow-xl text-center h-40 my-auto">
        <h1 className="text-6xl font-bold">200+</h1>
        <p className="text-lg font-semibold">Current Bookings</p>
      </div>
      <div className="shadow-xl text-center h-40 my-auto">
        <h1 className="text-6xl font-bold">500+</h1>
        <p className="text-lg font-semibold">Construction Running</p>
      </div>
    </div>
  );
};

export default Achievements;
