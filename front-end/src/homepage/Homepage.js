import CardsHomepage from './components/CardsHomepage';

function Homepage() {
    return (
        <div className='flex flex-col items-center w-full min-h-screen bg-gray-100 pt-16 overflow-x-hidden dark:bg-[#1a1a1a]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-10/12'>
                <CardsHomepage/>
                <CardsHomepage/>
                <CardsHomepage/>
                <CardsHomepage/>
            </div>
        </div>
    )
}

export default Homepage;

