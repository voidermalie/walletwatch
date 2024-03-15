import './Input.css';

const Input = ({ name, placeholder, inputValue, handleInputChange, size }) => {
  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      name={name}
      placeholder={placeholder}
      size={size}
    />
  );
};

export default Input;
