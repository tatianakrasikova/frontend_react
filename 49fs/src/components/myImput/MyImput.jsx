


  const MyInput = ({ name, type, placeholder, label }) => {
    return (
        <div className="my-input">
            {label ? <label htmlFor={name}>{label}</label> : null}
            <input name={name} type={type} placeholder={placeholder} id={name} />
        </div>
    );
};

export default MyInput;