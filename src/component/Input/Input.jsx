import './Input.css'
import { useReducer } from 'react'
import formReducer, {initialState} from '../../reducer/formReducer';

const Input = () => {
    const [state, dispatch] = useReducer(formReducer, initialState);
    const {input} = state;

    const handleInputChange = (e) => {
        dispatch({
            type: 'SET_INPUT',
            payload: e.target.value
        })
    }
  return (
    <input type='text' value={input} onChange={handleInputChange}/>
  )
}

export default Input
