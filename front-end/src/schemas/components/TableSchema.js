function TableSchema() {
    return (
        <>
            <table class="min-w-full divide-y divide-gray-400 border-gray-400  dark:divide-[#E3CFAA] border dark:border-[#8A7864] rounded-lg">
                    
                    <thead class="bg-gray-100 dark:bg-[#3D3B36]">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-[#E3CFAA] uppercase tracking-wider">Nome Tabela</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-[#E3CFAA] uppercase tracking-wider">Descrição</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-[#E3CFAA] uppercase tracking-wider">Rotina Atualização</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-[#E3CFAA] uppercase tracking-wider">Fonte</th>
                        </tr>
                    </thead>

                    <tbody class="bg-white dark:bg-[#d8d6d2] dark:bg-none divide-y divide-gray-200">
                        {/* {% for tabela in tabelas %} */}
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    <a href="{{ url_for('detailsTable.detalhesTabela', tabela_id=tabela.id) }}">
                                        fpedidos_compra
                                    </a>
                                </td>                                
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Tabela para mostrar pedidos de compras</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">PedidosCompra</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">ERP</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    <a href="{{ url_for('detailsTable.detalhesTabela', tabela_id=tabela.id) }}">
                                        fpedidos_compra
                                    </a>
                                </td>                                
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Tabela para mostrar pedidos de compras</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">PedidosCompra</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">ERP</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    <a href="{{ url_for('detailsTable.detalhesTabela', tabela_id=tabela.id) }}">
                                        fpedidos_compra
                                    </a>
                                </td>                                
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Tabela para mostrar pedidos de compras</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">PedidosCompra</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">ERP</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    <a href="{{ url_for('detailsTable.detalhesTabela', tabela_id=tabela.id) }}">
                                        fpedidos_compra
                                    </a>
                                </td>                                
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Tabela para mostrar pedidos de compras</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">PedidosCompra</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">ERP</td>
                            </tr>
                        {/* {% endfor %} */}
                    </tbody>
                </table>
        </>
    )
}

export default TableSchema;