function CardsHomepage({conteudo, descricao}) {
    return (
        <div className="bg-mainWhite dark:bg-mainBlack rounded-2xl shadow p-6  text-center hover:scale-105 transition ">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-[#E3CFAA] ">{conteudo}</h2>
            <p className="text-gray-400 dark:text-[#E3CFAA] mt-1">{descricao}</p>
        </div>
    )
}

export default CardsHomepage;