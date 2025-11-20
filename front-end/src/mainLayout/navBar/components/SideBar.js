import { useState } from "react";
import DropdownItem from "./DropdownItem";
import BtnSearch from "./BtnSearch";
import Itens from "./Itens";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

function SideBar({ isOpen }) {
  const [openDropdown, setOpenDropdown] = useState(null); // controla o aberto

  const handleToggle = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id)); // fecha se clicar de novo
  };

  const sideBarClasses = `fixed top-20 left-0 h-full w-80 bg-gradient-to-r z-50 from-mainBeige 
                        to-bgSidebar shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ?
                         'translate-x-0 w-80' : '-translate-x-full w-80'} dark:bg-gradient-to-r dark:from-[#c2a98b] dark:to-[#b89f84]`;

  return (
    <div className={sideBarClasses}>
      <div className="flex flex-col h-full p-4 relative">
        <BtnSearch />

        {/* FERRAMENTAS */}
        <div className="ferramentas-menu-wrapper">
          <DropdownItem
            icon={faScrewdriverWrench}
            name="Ferramentas"
            id="ferramentas"
            isOpen={openDropdown === "ferramentas"}
            onToggle={handleToggle}
          />

          <div
            className={`flex flex-col mt-2 space-y-2 px-4 transition-all duration-300 ease-in-out relative pl-5 overflow-hidden ${
              openDropdown === "ferramentas" ? "max-h-[65%]" : "max-h-0"
            }`}
          >
            <ul className="list-none mt-5 p-0 pl-6 relative overflow-y-auto scrollbar-hide
              before:content-[''] before:absolute before:left-3 before:top-1 before:bottom-4 
              before:w-[2px] before:bg-mainWhite dark:before:bg-mainBlack before:rounded-[5px]">
              <Itens nameItem="Distribuicao Lojas" />
              <Itens nameItem="Distribuicao Lojas" />
              <Itens nameItem="Distribuicao Lojas" />
            </ul>
          </div>
        </div>

        <hr className="border-brancoPrincipal dark:border-mainBlack border w-5/6 mt-5 mx-auto" />

        {/* ESQUEMAS */}
        <div className="dw-menu-wrapper">
          <DropdownItem
            icon={faScrewdriverWrench}
            name="Esquemas"
            id="esquemas"
            isOpen={openDropdown === "esquemas"}
            onToggle={handleToggle}
          />

          <div
            className={`flex flex-col mt-2 space-y-2 px-4 transition-all duration-300 ease-in-out relative pl-5 overflow-hidden ${
              openDropdown === "esquemas" ? "max-h-[82%]" : "max-h-0"
            }`}
          >
            <ul className="list-none mt-5 p-0 pl-6 relative overflow-y-auto scrollbar-hide
              before:content-[''] before:absolute before:left-3 before:top-0 before:bottom-0 
              before:w-[2px] before:bg-mainWhite dark:before:bg-mainBlack before:rounded-[5px]">
              <Itens nameItem="Api" esquema="Api"/>
              <Itens nameItem="Comercial" esquema="Comercial"/>
              <Itens nameItem="Estoque" esquema="Estoque"/>
              <Itens nameItem="Eventos" esquema="Eventos"/>
              <Itens nameItem="Live" esquema="Live"/>
              <Itens nameItem="Marft" esquema="Marft"/>
              <Itens nameItem="Ppcp" esquema="Ppcp"/>
              <Itens nameItem="Rh" esquema="Rh"/>
              <Itens nameItem="Rh_sci" esquema="Rh_sci"/>
              <Itens nameItem="Suprimentos" esquema="Suprimentos"/>
              <Itens nameItem="Sustentabilidade" esquema="Sustentabilidade"/>
              <Itens className="last:mb-24" nameItem="Ti" esquema="Ti"/>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
