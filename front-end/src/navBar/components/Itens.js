function Itens({className, nameItem, esquema}) {
    return (
        <li className={`ml-2 mb-10 relative font-inter font-light
                before:content-[''] before:absolute before:top-1 before:left-[-20px] before:w-[20px] before:h-3/4 
                before:border-l-2 before:border-b-2 before:border-brancoPrincipal dark:before:border-[#22211D] before:rounded-bl-[10px] before:translate-y-[-50%] ${className || ''}`}>
            <a className="ml-5 text-md text-brancoPrincipal dark:text-[#22211d]" href={esquema} >{nameItem}</a>
        </li>
    )
}

export default Itens;