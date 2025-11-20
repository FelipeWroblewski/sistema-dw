import { Outlet } from "react-router-dom";
import NavBar from './navBar/NavBar'
import Footer from './Footer/Footer'

export default function MainLayout() {
  return (
    <div>
      <NavBar />

      <div>
        <Outlet />  
      </div>

      <Footer />
    </div>
  );
}
