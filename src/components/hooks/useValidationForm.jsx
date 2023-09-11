import { useState } from 'react';

export function useValidationForm() {
  const [isValid, setIsValid] = useState(false);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setValues({...values, [name]: value});
    setErrors({...errors,  [name]: event.target.validationMessage });
    setIsValid(event.target.closest("form").checkValidity());
  };

  return { values, errors, isValid, setValues, handleChange, setIsValid}
}