import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function BtnHome({onToggle}) {

    return (
        <div className="flex items-center gap-4 ml-10">
            <button onClick={onToggle}>
                <   FontAwesomeIcon 
                    icon={faBars}
                    className="text-3xl cursor-pointer text-mainWhite dark:text-mainBlack"
                />
            </button>
            <a href='/Homepage' className="decoration-0">
                <img src="/imgs/livetech.png" alt="" className="w-40 hidden md:block dark:hidden"></img>
                <img src="/imgs/livetechBlack.png" alt="" className="w-40 hidden md:dark:block"></img>
            </a>
        </div>
    )
}

export default BtnHome;