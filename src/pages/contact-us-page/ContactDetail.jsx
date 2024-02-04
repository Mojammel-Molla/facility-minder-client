import { SlCallOut } from 'react-icons/sl';

const ContactDetail = () => {
  return (
    <div className="w-1/2 text-center my-10 space-y-2">
      <h1 className="text-4xl font-semibold">Contact Details</h1>
      <div>
        {/* <SlCallOut /> */}
        <div className="shadow-2xl mt-10 h-32">
          <h4 className="font-bold text-2xl my-5">Call Us At</h4>
          <p>+1 63980 98393, +1 63980 98393</p>
        </div>
      </div>
      <div>
        {/* <SlCallOut /> */}
        <div className="shadow-2xl mt-10 h-32">
          <h4 className="font-bold text-2xl my-5">Email Us</h4>
          <p>info@facilityminder.com</p>
        </div>
      </div>
      <div>
        {/* <SlCallOut /> */}
        <div className="shadow-2xl mt-10 h-32">
          <h4 className="font-bold text-2xl my-5">Location</h4>
          <p>Jl. Surabaya Jaya, No.10, Surabaya United States</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
