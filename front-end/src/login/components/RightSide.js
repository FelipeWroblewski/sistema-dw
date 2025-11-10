import InputForm from './InputForm';
import ButtonForm from './ButtonForm';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
function RightSide() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const loginBemSucedido = true;

        if (loginBemSucedido) {
            navigate('/homepage');
        } else {
            alert('Falha no login. Verifique suas credenciais.');
        }
    }
    return (
        <div className='w-screen md:w-3/5 min-h-screen grid place-items-start md:place-items-center justify-center bg-brancoCinza'>
            <div className="w-80 relative mb-10 bottom-5 ">
                <img src="/imgs/live-marrom.png" alt="Logo" className="w-60 mx-auto mt-32 mb-10 md:hidden"></img>
                <form onSubmit={handleSubmit}>
                    <InputForm nome="E-mail"/>
                    <InputForm nome="Senha"/>
                    <ButtonForm/>
                </form>
            </div>
        </div> 
    );
}

export default RightSide;