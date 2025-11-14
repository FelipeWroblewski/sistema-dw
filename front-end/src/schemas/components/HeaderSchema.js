function HeaderSchema({name_schema}) {
    return (
        <div className="pt-32 pl-10">
            <h1 className="text-4xl font-bold text-gray-800 pb-2 dark:text-[#E3CFAA]">Esquema {name_schema}</h1>
            <p className="text-lg text-gray-600 dark:text-[#AFA799]">Lista de todas as tabelas no esquema {name_schema}</p>
        </div>
    )
}

export default HeaderSchema;