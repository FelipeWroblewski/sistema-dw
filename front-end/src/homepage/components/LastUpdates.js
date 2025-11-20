function LastUpdates() {
    return (
        <div className="w-10/12 my-6 bg-white rounded-2xl shadow p-6 dark:bg-mainBlack">
            <h2 className="text-xl font-bold text-gray-700 mb-4 dark:text-[#E3CFAA]">Últimas Atualizações</h2>
            {/* if logs_atualizacoes */}
            <ul className="divide-y divide-gray-500 dark:divide-[#E3CFAA]">
                {/* for log in  logs_atualizacao */}
                <li className="py-3 flex justify-between items-center">
                    <span className="text-gray-500 text-sm dark:text-[#E3CFAA]"><strong className="dark:text-[#E3CFAA]">Esquema: </strong>ti</span> 
                    <span className="text-gray-500 text-sm dark:text-[#E3CFAA]"><strong className="dark:text-[#E3CFAA]">Tabela: </strong>dim_sistemas_glpi atualizada.</span>
                </li>
                <li className="py-3 flex justify-between items-center">
                    <span className="text-gray-500 text-sm dark:text-[#E3CFAA]"><strong className="dark:text-[#E3CFAA]">Esquema: </strong>ti</span> 
                    <span className="text-gray-500 text-sm dark:text-[#E3CFAA]"><strong className="dark:text-[#E3CFAA]">Tabela: </strong>dim_sistemas_glpi atualizada.</span>
                </li>
                <li className="py-3 flex justify-between items-center">
                    <span className="text-gray-500 text-sm dark:text-[#E3CFAA]"><strong className="dark:text-[#E3CFAA]">Esquema: </strong>ti</span> 
                    <span className="text-gray-500 text-sm dark:text-[#E3CFAA]"><strong className="dark:text-[#E3CFAA]">Tabela: </strong>dim_sistemas_glpi atualizada.</span>
                </li>
                <li className="py-3 flex justify-between items-center">
                    <span className="text-gray-500 text-sm dark:text-[#E3CFAA]"><strong className="dark:text-[#E3CFAA]">Esquema: </strong>ti</span> 
                    <span className="text-gray-500 text-sm dark:text-[#E3CFAA]"><strong className="dark:text-[#E3CFAA]">Tabela: </strong>dim_sistemas_glpi atualizada.</span>
                </li>
                <li className="py-3 flex justify-between items-center">
                    <span className="text-gray-500 text-sm dark:text-[#E3CFAA]"><strong className="dark:text-[#E3CFAA]">Esquema: </strong>ti</span> 
                    <span className="text-gray-500 text-sm dark:text-[#E3CFAA]"><strong className="dark:text-[#E3CFAA]">Tabela: </strong>dim_sistemas_glpi atualizada.</span>
                </li>
                {/* endfor */}
            </ul>
            {/* else */}
            <p className="text-gray-500">Nenhuma atualização recente encontrada.</p>
            {/* endif */}
        </div>
    )
}

export default LastUpdates;