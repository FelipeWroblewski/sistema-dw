import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function BtnSearch() {
    return (
        <>
            <form className="mx-auto w-4/5 mb-5" action="{{url_for('pesquisar')}}" method="GET">
                <input type="text" name="termo" placeholder="Buscar..." className="dark:placeholder:text-[#AFA799] rounded-md border border-solid text-cinza dark:text-[#AFA799] border-cinza pl-10 p-1 focus:outline-none  bg-brancoCinza dark:bg-mainBlack dark:border-[#af9d8c]"></input>
                <button type="submit" className="">
                    <FontAwesomeIcon 
                        icon={faMagnifyingGlass}
                        className="absolute text-cinza dark:text-[#AFA799] left-16 top-6 "
                    />
                </button>
            </form>
        </>
    )
}

export default BtnSearch;