function ColumnsTable() {
    return (
        <div class="rounded-md border-2 border-begeForte full shadow-md overflow-x-auto  mb-5">
            <table class="w-full divide-y-2 divide-begeForte">
                <thead class="bg-begePrincipal dark:bg-[#D6C0A4]">
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-inter text-begeForte uppercase tracking-wider font-bold">Nome da coluna</th>
                        <th class="px-6 py-3 text-left text-xs font-inter font-bold text-begeForte uppercase tracking-wider">Tipo de dado</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y  divide-gray-200">
                    <tr class="odd:bg-begeFraco2 even:bg-brancoPrincipal">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-begeForte text-left font-inter "></td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-begeForte text-left font-inter"></td>                                
                    </tr>   
                </tbody>
            </table>
        </div>
    )
}

export default ColumnsTable;