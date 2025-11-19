function InputCreateTable({nome, onChange, variant = "default", ...props}) {
    const variants = {
        default: "w-10/12 mx-auto",
        small: "w-10/12 lg:w-8/12"
    };
    return (
        <>
            <label className={`${variants[variant]} mt-5 dark:text-[#E3CFAA] font-inter block text-gray-900`}>{nome}</label>
            <input 
                {...props}
                type="text"
                onChange={onChange}
                className={`border border-black text-black dark:border-[#E3CFAA] bg-transparent p-1 rounded-lg  ${variants[variant]}`}>  
            </input>
        </>
    )
}

export default InputCreateTable