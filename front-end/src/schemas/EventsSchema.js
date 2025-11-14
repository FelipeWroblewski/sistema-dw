import NavBar from '../navBar/NavBar';
import HeaderSchema from './components/HeaderSchema';

function EventsSchema() {
    return (
        <div className='w-full min-h-screen overflow-x-hidden bg-[#1a1a1a]'>
            <NavBar />
            <HeaderSchema name_schema="Eventos"/>
        </div>
    )
}

export default EventsSchema;