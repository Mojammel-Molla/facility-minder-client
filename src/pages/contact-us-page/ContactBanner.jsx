import ContactImage from '../../assets/contact.jpg';

const ContactBanner = () => {
  return (
    <div className="hero min-h-[70vh] bg-base-200">
      <div className="hero-content gap-10 flex-col lg:flex-row">
        <img src={ContactImage} className="max-w-xl rounded-lg shadow-xl" />
        <div>
          <div className="w-full bg-base-100 shadow-xl mb-10">
            <div className="card-body text">
              <h2 className="card-title">Talk to Member of Sales Team</h2>
              <p>
                Connect with our Sales Team: Speak to our experts for
                personalized assistance, product demos, and pricing details. Let
                us guide you to the perfect solution for your needs.
              </p>
              <div className="card-actions justify-start">
                <button className="btn bg-main">Contact Sales</button>
              </div>
            </div>
          </div>
          <div className="w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Payment & Account Support</h2>
              <p>
                Our dedicated team is here to assist you with any
                payment-related queries or account management needs. Contact us
                for prompt and reliable assistance.
              </p>
              <div className="card-actions justify-start">
                <button className="btn bg-main">Go to FAQ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
