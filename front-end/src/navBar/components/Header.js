import BtnHome from './BtnHome';
import BtnsHeader from './BtnsHeader';
function Header({onToggleSidebar}) {
    return <div>
        <header className="flex items-center justify-between bg-gradient-to-r from-begePrincipal to-begeForte h-20 w-full z-50 flex-row text-brancoCinza fixed dark:bg-gradient-to-r dark:from-[#C2A98B] dark:via-[#A89078] dark:to-[#8A7864]">
            <BtnHome onToggle={onToggleSidebar} />
            <BtnsHeader/>
        </header>
    </div>
}

export default Header;