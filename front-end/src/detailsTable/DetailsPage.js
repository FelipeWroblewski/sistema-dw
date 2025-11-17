import NavBar from '../navBar/NavBar';
import ColumnsTable from './components/ColumnsTable'
import DetailsCard from './components/DetailsCard'

function DetailsPage() {
    return (
        <div className='min-h-screen w-full bg-gray-100 dark:bg-[#1a1a1a]'>
            <NavBar />
            <div class="w-4/5 mx-auto">
                <h1 className='pt-32 text-start text-2xl text-black dark:text-[#E3CFAA]'>Nome da tabela: fpedidos_compra</h1>
            </div>

            <div class="pt-5">
                            
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14 w-4/5  mx-auto bg-white dark:bg-[#22211D] shadow-xl h-auto rounded-lg 
                    py-6 px-4 md:px-6 border border-gray-200 dark:border-gray-800 dark:border-none">
                        
                    <DetailsCard />
                    <DetailsCard />
                      
                    </div>

                <h1 class="mt-10 w-4/5 mx-auto text-start font-inter text-4xl text-black dark:text-[#E3CFAA] mb-5">Colunas da Tabela</h1>
                    <div class="bg-white dark:bg-[#22211D] shadow-xl w-4/5 mx-auto rounded-lg p-6 border border-gray-200 dark:border-gray-800 dark:border-none">
                        <ColumnsTable />
                </div>            
            </div>
        </div>
    )
}

export default DetailsPage;