import { Outlet } from "react-router-dom";
import NavBar from './navBar/NavBar'
import Footer from './Footer/Footer'

export default function MainLayout() {
  return (
    <div>
      <NavBar />

      <div style={{ padding: 20 }}>
        <Outlet />  
      </div>

      <Footer />
    </div>
  );
}
