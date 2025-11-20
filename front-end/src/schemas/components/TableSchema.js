import { Link } from 'react-router-dom';

function TableSchema() {
    return (
        <>
            <table className="min-w-full divide-y divide-gray-400 border-mainBeige  dark:divide-[#E3CFAA] border dark:border-[#8A7864] rounded-lg">
                    
                    <thead className="bg-mainBeige dark:bg-[#3D3B36]">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-strongBeige dark:text-[#E3CFAA] uppercase tracking-wider">Nome Tabela</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-strongBeige dark:text-[#E3CFAA] uppercase tracking-wider">Descrição</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-strongBeige dark:text-[#E3CFAA] uppercase tracking-wider">Rotina Atualização</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-strongBeige dark:text-[#E3CFAA] uppercase tracking-wider">Fonte</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white dark:bg-[#d8d6d2] dark:bg-none divide-y divide-mainBeige">
                        {/* {% for tabela in tabelas %} */}
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-strongBeige">
                                    <Link to={`/DetalhesTabela`}>
                                        fpedidos_compra
                                    </Link>
                                </td>                                
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Tabela para mostrar pedidos de compras</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">PedidosCompra</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">ERP</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-strongBeige">
                                    <Link to={`/DetalhesTabela`}>
                                        fpedidos_compra
                                    </Link>
                                </td>                                
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Tabela para mostrar pedidos de compras</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">PedidosCompra</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">ERP</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-strongBeige">
                                    <Link to={`/DetalhesTabela`}>
                                        fpedidos_compra
                                    </Link>
                                </td>                                
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Tabela para mostrar pedidos de compras</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">PedidosCompra</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">ERP</td>
                            </tr>
                        {/* {% endfor %} */}
                    </tbody>
                </table>
        </>
    )
}

export default TableSchema;