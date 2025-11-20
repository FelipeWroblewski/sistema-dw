import CardsHomepage from './components/CardsHomepage';
import LastUpdates from './components/LastUpdates';
import Graphic from './components/Graphic';

function Homepage() {
    return (
        <>
            <div className='flex flex-col items-center w-full min-h-screen overflow-x-hidden bg-[#1a1a1a]'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-32 gap-6 w-10/12'>
                    <CardsHomepage conteudo="18" descricao="Esquemas"/>
                    <CardsHomepage conteudo="945" descricao="Tabelas"/>
                    <CardsHomepage conteudo="67" descricao="Dags"/>
                    <CardsHomepage conteudo="11/11/2025 16:27:30" descricao="Última Atualização"/>
                </div>
                <Graphic />
                <LastUpdates />
            </div>
        </>
    );
}

export default Homepage;

