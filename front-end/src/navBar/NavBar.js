import Header from './components/Header';
import SideBar from './components/SideBar';
import React, {useState} from 'react';
function NavBar() {

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const toggleSideBar = () => {
        setIsSideBarOpen(prev => !prev);
    };
    return <div>
        <Header onToggleSidebar={toggleSideBar} /> 
        <SideBar isOpen={isSideBarOpen} />
    </div>
}

export default NavBar;