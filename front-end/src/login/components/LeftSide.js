function LeftSide() {
    return (
        <div className="hidden md:flex bg-mainBeige w-2/5 flex-col pt-40 items-center">
            <div className="flex m-10 justify-center">
                <img src="/imgs/logo_live.png" alt="Logo" className="w-60"></img>
            </div>
        <h1 className="text-mainWhite flex justify-center m-10 text-3xl font-bold">Bem Vindo</h1>
        <hr className="w-1/2 text-mainWhite border-2 border-solid border-mainWhite"></hr>
        <p className="text-mainWhite text-xl flex text-center font-light mt-10">Entre em nosso sistema de distribuição de lojas</p>
        </div>
    );
}

export default LeftSide;