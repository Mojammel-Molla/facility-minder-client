import BannerImage from '../../assets/secondary-banner1.jpg';
const SecondaryBanner = ({ title }) => {
  return (
    <div
      className="hero min-h-[40vh]"
      style={{
        backgroundImage: `url(${BannerImage})`,
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 md:text-5xl font-bold">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default SecondaryBanner;
