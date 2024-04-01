import LoanBanner from '../../../assets/loan-banner.jpg';
const LoanFacility = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            'url(https://t3.ftcdn.net/jpg/03/40/79/60/360_F_340796093_arRYqCCyRv95ISY6oNA4zNSTUWyg9CQa.jpg)',
          opacity: '90%',
        }}
        className="hero min-h-[70vh] "
      >
        <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full text-[#fff]">
          <img
            src="https://img.freepik.com/free-photo/house-investments-elements-composition_23-2148793806.jpg"
            className="md:max-w-lg rounded-lg shadow-2xl"
          />
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold">
              Explore Our Hassle-Free Loan Solutions
            </h1>
            <p className="py-6 font-bold">
              Discover convenient loan options tailored to your needs, ensuring
              a smooth and stress-free process for financing your dream
              apartment. With competitive rates and flexible terms, our loan
              section offers the perfect solution to help you secure your ideal
              living space hassle-free.
            </p>
            <button className="px-5 py-3 text-[#ffff] bg-main rounded-full font-bold mr-3 hover:bg-[#1976d2]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanFacility;
