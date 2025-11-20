import HeaderSchema from './components/HeaderSchema';
import TableSchema from './components/TableSchema';

function Rh_sciSchema() {
    return (
        <div className="h-screen w-full bg-brancoCinza ">
            <div className="p-8 font-sans bg-whiteGray dark:bg-bgBlack min-h-screen">
            <HeaderSchema name_schema="Rh_sci"/>

                <div className="bg-white dark:bg-[#2A2926] shadow-xl mt-10 rounded-lg p-6 border border-gray-200 dark:border-gray-800 dark:border-none">
                    <div className="overflow-y-hidden overflow-x-auto">
                        <TableSchema />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rh_sciSchema;