import { Outlet } from 'react-router';
import Header from '../LivoLab/Components/Header';
import Footer from '../LivoLab/Components/Footer';

function Layout() {
  return (
    <>
      <Header/>
        <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout