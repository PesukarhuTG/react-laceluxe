import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Main from '../Components/Layout/Main/Main';
import Footer from '../Components/Footer/Footer';

const Root = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default Root;
