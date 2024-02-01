import LogoImg from '../../../assets/building-logo2.png';
const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
          <div>
            <img
              className="w-24 h-10 rounded-sm mx-auto"
              src={LogoImg}
              alt=""
            />
            <a className="font-bold text-xl">Facility Minder</a>
          </div>
          <p className="font-semibold">Making your Dream real since 2002</p>
        </aside>
        <nav className="font-bold">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="font-bold">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="font-bold">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside className="font-bold">
          <p>Copyright © 2024 - All right reserved by Mojammel Molla</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
