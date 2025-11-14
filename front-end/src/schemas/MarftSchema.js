import NavBar from '../navBar/NavBar';
import HeaderSchema from './components/HeaderSchema';
import TableSchema from './components/TableSchema';

function MarftSchema() {
    return (
        <div className="h-screen w-full bg-brancoCinza ">
            <NavBar />
            <div className="p-8 font-sans bg-gray-50 dark:bg-[#1a1a1a] min-h-screen">
            <HeaderSchema name_schema="Marft"/>

                <div clclassNameass="bg-white dark:bg-[#2A2926] shadow-xl mt-10 rounded-lg p-6 border border-gray-200 dark:border-gray-800 dark:border-none">
                    <div className="overflow-y-hidden overflow-x-auto">
                        <TableSchema />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarftSchema;