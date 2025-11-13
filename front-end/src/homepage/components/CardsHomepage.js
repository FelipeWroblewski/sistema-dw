function CardsHomepage({conteudo, descricao}) {
    return (
        <div className="bg-white rounded-2xl shadow p-6  text-center hover:scale-105 transition ">
            <h2 className="text-3xl font-bold text-gray-800 ">{conteudo}</h2>
            <p className="text-gray-500 mt-1">{descricao}</p>
        </div>
    )
}

export default CardsHomepage;