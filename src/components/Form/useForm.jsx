import { useReducer, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * 
 * @param {*} initialArgs : object with form data
 * @param {*} handleSubmitCallback : update/create logic on parent. IMPORTANT must return 'Ok' or 'ERROR'
 */

const useForm = (initialArgs, handleSubmitCallback) => {
  
  // uses toast to ui add notifications   
  const notifySaved = () => toast.success('Record saved!');
  const notifyError = () => toast.error('Error on save!');
  const notifyWarning = (warning) => toast.warning(warning);
  ///

  // const [solved, setSolved] = useState('');
  const [solved, setSolved] = useState('');
  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialArgs
  );


  const handleChange = event => {
    const name = event.target.name;
    const newValue = event.target.value;
    setFormInput({ [name]: newValue });
  }
  
  const handleSubmit = (event) => { 
    event.preventDefault();

    const result = handleSubmitCallback();
    console.log('result handleSubmit', result);

    setSolved(result);
  }
  
  useEffect(() => {
    console.log('useEffect solved:', solved);

    if (solved === 'OK') notifySaved();
    if (solved === 'ERROR') notifyError();
  }, [solved])

  return [
    handleChange,
    handleSubmit,
    formInput,
    notifyWarning
  ];
};

export default useForm;