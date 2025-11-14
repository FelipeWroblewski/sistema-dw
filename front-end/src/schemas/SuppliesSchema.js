import NavBar from '../navBar/NavBar';
import HeaderSchema from './components/HeaderSchema';

function SuppliesSchema() {
    return (
        <div className='w-full min-h-screen overflow-x-hidden bg-[#1a1a1a]'>
            <NavBar />
            <HeaderSchema name_schema="Suprimentos"/>
        </div>
    )
}

export default SuppliesSchema;