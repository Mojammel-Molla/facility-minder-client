const DashboardTitle = ({ title }) => {
  return (
    <div>
      <h1 className="md: text-3xl lg:text-5xl text-center font-extrabold underline">
        {title}
      </h1>
    </div>
  );
};

export default DashboardTitle;
