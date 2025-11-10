import InputForm from './InputForm';
import ButtonForm from './ButtonForm';
function RightSide() {
    return (
        <div className='w-screen md:w-3/5 min-h-screen grid place-items-start md:place-items-center justify-center bg-brancoCinza'>
            <div className="w-80 relative mb-10 bottom-5 ">
                <img src="/imgs/live-marrom.png" alt="Logo" className="w-60 mx-auto mt-32 mb-10 md:hidden"></img>
                <InputForm nome="E-mail"/>
                <InputForm nome="Senha"/>
                <ButtonForm/>
            </div>
        </div> 
    );
}

export default RightSide;