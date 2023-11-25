import { Outlet } from 'react-router-dom';
import NavBar from '../../pages/home/navbar/NavBar';
import Footer from '../../pages/home/footer/Footer';

const MainLayOut = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
