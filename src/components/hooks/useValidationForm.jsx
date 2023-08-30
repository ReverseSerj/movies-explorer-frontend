import { useState } from 'react';

export function useValidationForm() {
  const [isValid, setIsValid] = useState(false);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setValues({...values, [name]: value});
    setErrors({...errors,  [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  return { values, errors, isValid, handleChange}
}