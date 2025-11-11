import InputForm from './InputForm';
import ButtonForm from './ButtonForm';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
function RightSide() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }, 
                body: JSON.stringify({
                    email: email,
                    password: password}),
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Login bem-sucedido:', data.token);
                localStorage.setItem('token', data.token);
                navigate('/Homepage');
            } else {
                const erro = await response.json();
                alert(`Erro de login: ${erro.mensagem}`);
            }
        } catch (error) {
            console.error('Falha na comunicação com o servidor:', error);
            alert('Não foi possível conectar ao servidor. Tente novamente');
        }
    });
    return (
        <div className='w-screen md:w-3/5 min-h-screen grid place-items-start md:place-items-center justify-center bg-brancoCinza'>
            <div className="w-80 relative mt-10 md:mt-0 md:mb-10 bottom-5">
                <img src="/imgs/live-marrom.png" alt="Logo" className="w-60 mx-auto mt-32 mb-10 md:hidden"></img>
                <form onSubmit={handleSubmit} className="mt-20 md:mt-0">
                    <InputForm nome="E-mail" type='email' onChange={(e) => setEmail(e.target.value)}/>
                    <InputForm nome="Senha" type='password' onChange={(e) => setPassword(e.target.value)}/>
                    <ButtonForm/>
                </form>
            </div>
        </div> 
    );
}

export default RightSide;