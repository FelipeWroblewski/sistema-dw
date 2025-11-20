import InputCreateTable from './components/InputCreateTable';
import CodeInput from './components/CodeInput'
import ButtonSubmit from './components/ButtonSubmit';


function CreateTable() {
    
    return (
        <div className="min-h-screen w-full bg-brancoCinza dark:bg-bgBlack">  
            <div className=" bg-white dark:bg-[#1a1a1a] md:dark:bg-[#22211D] p-6 min-h-screen rounded-lg shadow-lg w-full md:w-3/4 lg:x-2/4 py-10 mx-auto">
                <form className="flex flex-col justify-between mt-20" method="POST">
                    <div className='grid grid-cols-1 lg:grid-cols-2 mx-auto w-full lg:w-10/12'>
                        <div className='flex items-center lg:items-start flex-col text-start'>
                            <InputCreateTable variant='small' nome="Nome da Tabela"/>
                        </div>
                        <div className='flex items-center lg:items-end flex-col'>
                            <InputCreateTable variant='small' nome="Esquema da Tabela"/>
                        </div>
                    </div>
                    <InputCreateTable nome="Descrição da Tabela"/>
                    <InputCreateTable nome="Nome"/>
                    <InputCreateTable nome="Schedule"/>
                    <InputCreateTable nome="Sistema Origem"/>
                    <InputCreateTable nome="Tabela Origem"/>
                    <CodeInput />
                    <ButtonSubmit />
                </form>
            </div>
        </div>
    )
}

export default CreateTable
