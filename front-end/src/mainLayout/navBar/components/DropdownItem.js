import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

function DropdownItem({ icon, name, id, isOpen, onToggle }) {
  return (
    <div
      className="flex justify-between items-center cursor-pointer mt-3 mx-6"
      onClick={() => onToggle(id)}
    >
      <div className="flex items-center gap-2 flex-row">
        <FontAwesomeIcon
          icon={icon}
          className="text-lg text-brancoPrincipal dark:text-[#22211D]"
        />
        <span className="text-lg text-brancoPrincipal dark:text-[#22211D] font-inter">
          {name}
        </span>
      </div>
      <FontAwesomeIcon
        icon={faCaretRight}
        className={`text-2xl text-brancoPrincipal dark:text-[#22211D] w-4 h-4 transition-transform duration-300 ease-in-out ${
          isOpen ? "rotate-90" : ""
        }`}
      />
    </div>
  );
}

export default DropdownItem;
