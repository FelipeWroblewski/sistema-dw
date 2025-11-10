import InputForm from './InputForm';
import ButtonForm from './ButtonForm';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
function RightSide() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }, 
                body: JSON.stringify({email, senha}),
            });
            if (response.ok) {
                const data = await response.json();
                navigate('/Homepage');
            } else {
                const erro = await response.json();
                alert(`Erro de login: ${erro.mensagem}`);
            }
        } catch (error) {
            console.error('Falha na comunicação com o servidor:', error);
            alert('Não foi possível conectar ao servidor. Tente novamente');
        }
    };
    return (
        <div className='w-screen md:w-3/5 min-h-screen grid place-items-start md:place-items-center justify-center bg-brancoCinza'>
            <div className="w-80 relative mb-10 bottom-5 ">
                <img src="/imgs/live-marrom.png" alt="Logo" className="w-60 mx-auto mt-32 mb-10 md:hidden"></img>
                <form onSubmit={handleSubmit}>
                    <InputForm nome="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                    <InputForm nome="Senha" onChange={(e) => setSenha(e.target.value)}/>
                    <ButtonForm/>
                </form>
            </div>
        </div> 
    );
}

export default RightSide;