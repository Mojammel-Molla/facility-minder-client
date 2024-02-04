import SecondaryBanner from '../../shared/secondary-banner/SecondaryBanner';
import ContactBanner from './ContactBanner';
import ContactDetail from './ContactDetail';
import GetInTouch from './GetInTouch';

const ContactUs = () => {
  return (
    <div>
      <SecondaryBanner title="Contact Us"></SecondaryBanner>
      <ContactBanner></ContactBanner>
      <div className="lg:flex h-[70vh] justify-between gap-10">
        <GetInTouch></GetInTouch>
        <ContactDetail></ContactDetail>
      </div>
    </div>
  );
};

export default ContactUs;
