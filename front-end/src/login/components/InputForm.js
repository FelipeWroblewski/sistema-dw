function InputForm({nome}) {
    return(
        <>
        <label className="text-begePrincipal mb-2 block">{nome}</label>
        <input className="w-full bg-brancoForm p-2 mb-3 border-solid border border-brancoBorda rounded-md focus:outline-none"></input>
        </>
    )
}

export default InputForm;