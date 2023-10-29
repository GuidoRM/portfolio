const CustomInput = ({register, name, title, placeholder, type}) => {
    return (
        <>
            <section>

                <label htmlFor={name}>
                    {title}
                </label>
                
                <input {...register(name)} id={name} type={type} placeholder={placeholder}/>

            </section>
        </>
    )

}

export default CustomInput