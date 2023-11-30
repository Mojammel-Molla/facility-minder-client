const AreaTitle = ({ title, subtitle }) => {
  return (
    <div className="text-start my-10 pt-5">
      <h1 className="md:text-4xl font-bold">{title}</h1>
      <p className="font-medium py-2">{subtitle}</p>
    </div>
  );
};

export default AreaTitle;
