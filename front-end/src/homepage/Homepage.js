import CardsHomepage from './components/CardsHomepage';
import NavBar from '../navBar/NavBar';
import UltimasAtualizacoes from './components/UltimasAtualizacoes';
import Grafico from './components/Grafico';
import HomeFooter from './components/HomeFooter';

function Homepage() {
    return (
        <>
            <NavBar />
            <div className='flex flex-col items-center w-full min-h-screen bg-gray-100 overflow-x-hidden '>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-32 gap-6 w-10/12'>
                    <CardsHomepage conteudo="18" descricao="Esquemas"/>
                    <CardsHomepage conteudo="945" descricao="Tabelas"/>
                    <CardsHomepage conteudo="67" descricao="Dags"/>
                    <CardsHomepage conteudo="11/11/2025 16:27:30" descricao="Última Atualização"/>
                </div>
                <Grafico />
                <UltimasAtualizacoes />
                <HomeFooter />
            </div>
        </>
    );
}

export default Homepage;

