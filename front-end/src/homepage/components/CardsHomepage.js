function CardsHomepage(conteudo, descricao) {
    return (
        <div className="bg-white rounded-2xl shadow p-6 text-center hover:scale-105 transition dark:bg-[#22211D] dark:shadow-[rgba(0, 0, 0, 0.4)]">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-[#E3CFAA]">{conteudo}</h2>
            <p className="text-gray-500 mt-1 dark:text-[#E3CFAA]">{descricao}</p>
        </div>
    )
}

export default CardsHomepage;