import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faRightFromBracket, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function BtnsHeader() {
    return (
        <div className="flex items-center gap-4 mr-10">
            <a href="/Homepage" className="decoration-0">
                <FontAwesomeIcon 
                    icon={faHouse}
                    className="dark:text-[#22211d] flex flex-row items-center gap-2 p-1 h-6 text-lg w-6 justify-center rounded-md bg-begePrincipal md:hidden"
                />
            </a>
            <a href="/Homepage" className="flex flex-row items-center gap-2 px-2 py-1 min-w-fit justify-center rounded-md bg-begePrincipal">
                <FontAwesomeIcon 
                    icon={faUser}
                    className="dark:text-[#22211D] p-1"
                />
                <h1 className="dark:text-[#22211D] hidden md:block">Felipe Wroblewski</h1>
            </a>

            <a href="/" className="bg-begePrincipal p-1 w-20 flex flex-row items-center gap-2 justify-center rounded-md">
                <FontAwesomeIcon 
                    icon={faRightFromBracket}
                    className="dark:text-[#22211D]"
                />
                <h1 className="dark:text-[#22211D]">Sair</h1>
            </a>

            <button id="dark-mode" className="dark:text-[#22211d] flex flex-row items-center gap-2 p-1 h-8 w-8 justify-center rounded-md bg-begePrincipal">
                <FontAwesomeIcon 
                    icon={faMoon}
                className="dark:hidden"
                />
                <FontAwesomeIcon 
                    icon={faSun}
                    className="hidden dark:inline-block"
                />
            </button>
        </div>
    )
}

export default BtnsHeader;