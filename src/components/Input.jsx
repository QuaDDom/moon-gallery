import './Input.scss';

export default function Input({type, label, name, handle, value}) {
    return (
        <div className="inputContainer">
            <div className="inputBox">
                <input 
                type={type} 
                name={name} 
                id={name} 
                className="inputComponent"
                onChange={handle}
                value={value}
                placeholder=" "
                />
                <label htmlFor={name} className="labelComponent">{label}</label>
            </div>
        </div>
    );
}
