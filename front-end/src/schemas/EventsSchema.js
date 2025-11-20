import HeaderSchema from './components/HeaderSchema';
import TableSchema from './components/TableSchema';
function ApiSchema() {
    return (
        <div className="h-screen w-full bg-whiteGray dark:bg-black ">
            <div className="p-8 font-sans bg-whiteGray dark:bg-bgBlack min-h-screen">
                <HeaderSchema name_schema="Eventos" />

                <div className="bg-mainWhite dark:bg-mainBlack shadow-xl mt-10 rounded-lg p-6 border border-gray-200 dark:border-gray-800 dark:border-none">
                    <div className="overflow-y-hidden overflow-x-auto">
                        <TableSchema Detalhes="/Detalhes"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApiSchema;