function ColumnsTable() {
    return (
        <div className="rounded-md border-2 border-strongBeige full shadow-md overflow-x-auto  mb-5">
            <table className="w-full divide-y-2 divide-strongBeige">
                <thead className="bg-mainBeige dark:bg-[#D6C0A4]">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-inter text-strongBeige uppercase tracking-wider font-bold">Nome da coluna</th>
                        <th className="px-6 py-3 text-left text-xs font-inter font-bold text-strongBeige uppercase tracking-wider">Tipo de dado</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y  divide-gray-200">
                    <tr className="odd:bg-begeFraco2 even:bg-brancoPrincipal">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-strongBeige text-left font-inter ">
                            int
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-strongBeige text-left font-inter">
                            float
                        </td>                                
                    </tr>   
                </tbody>
            </table>
        </div>
    )
}

export default ColumnsTable;