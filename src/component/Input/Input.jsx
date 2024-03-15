import './Input.css'


const Input = ({inputValue, handleInputChange}) => {

  return (
    <input type='text' value={inputValue} onChange={handleInputChange} />
  )
}

export default Input
