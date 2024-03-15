import './Input.css'
//import { useReducer } from 'react'
//import formReducer, {initialState} from '../../reducer/formReducer';

const Input = ({inputValue, handleInputChange}) => {
    //const [state, dispatch] = useReducer(formReducer, initialState);
    //const {input} = state;
/*
    const handleInputChange = (e) => {
        dispatch({
            type: 'SET_INPUT',
            payload: e.target.value
        })
    }
*/
  return (
    <input type='text' value={inputValue} onChange={handleInputChange}/>
  )
}

export default Input
