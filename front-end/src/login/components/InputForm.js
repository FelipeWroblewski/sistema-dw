function InputForm({nome, type="text", onChange}) {
    return(
        <>
        <label className="text-mainBeige mb-3 block">{nome}</label>
        <input type={type} onChange={onChange} className="w-full bg-formWhite p-2 mb-3 border-solid border border-whiteBorder rounded-md focus:outline-none"></input>
        </>
    )
}

export default InputForm;