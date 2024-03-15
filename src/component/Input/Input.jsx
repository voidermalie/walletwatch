import './Input.css';

const Input = ({ name, placeholder, inputValue, handleInputChange }) => {
  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default Input;
