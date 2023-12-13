import emailjs from '@emailjs/browser';
import { useContext, useRef } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
const Complaint = () => {
  const { user } = useContext(AuthContext);
  const form = useRef();
  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_q94iikh',
        'template_uu3q73a',
        form.current,
        'M8kMUdxUSwqGN3T7G'
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-full ">
      <div className=" text-center ">
        <h1 className="lg:text-4xl font-semibold mt-5">
          Complaint To The Owner
        </h1>
        <p className="lg:text-xl font-medium mt-2">
          Do you have any complaint? Write here and send.
        </p>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="card-body lg:w-1/2 mx-auto"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            defaultValue={user?.displayName}
            type="text"
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            defaultValue={user?.email}
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Massage</span>
          </label>
          <textarea
            name="massage"
            className="textarea textarea-info"
            placeholder="Write here"
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn text-white bg-[#08a8e4]">
            Sent Massage
          </button>
        </div>
      </form>
    </div>
  );
};

export default Complaint;
