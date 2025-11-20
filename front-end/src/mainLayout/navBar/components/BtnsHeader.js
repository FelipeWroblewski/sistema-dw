import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faRightFromBracket, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from "../../../context/ThemeContext";

function BtnsHeader() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="flex items-center gap-4 mr-10">
            <a href="/Homepage" className="decoration-0">
                <FontAwesomeIcon 
                    icon={faHouse}
                    className="dark:text-mainBlack flex flex-row items-center gap-2 p-1 h-6 text-lg w-6 justify-center rounded-md bg-mainBeige md:hidden"
                />
            </a>
            <a href="/Homepage" className="flex flex-row items-center gap-2 px-2 py-1 min-w-fit justify-center rounded-md bg-mainBeige">
                <FontAwesomeIcon 
                    icon={faUser}
                    className="dark:text-mainBlack p-1"
                />
                <h1 className="dark:text-mainBlack hidden md:block">Felipe Wroblewski</h1>
            </a>

            <a href="/" className="bg-mainBeige p-1 w-20 flex flex-row items-center gap-2 justify-center rounded-md">
                <FontAwesomeIcon 
                    icon={faRightFromBracket}
                    className="dark:text-mainBlack"
                />
                <h1 className="dark:text-mainBlack">Sair</h1>
            </a>

            <button 
                onClick={toggleTheme}
                className="dark:text-mainBlack flex flex-row items-center gap-2 p-1 h-8 w-8 justify-center rounded-md bg-mainBeige">
                {theme === "light" ? 
                    <FontAwesomeIcon 
                        icon={faMoon}
                    />
                : 
                    <FontAwesomeIcon 
                        icon={faSun}
                    />}
            </button>
        </div>
    )
}

export default BtnsHeader;