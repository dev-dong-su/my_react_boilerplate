import VALIDATIONS from 'constants/Validations';
import { useState } from 'react';

const useInput = ({ initialValue, errorMessage, required, type }) => {
  const [value, setValue] = useState(initialValue);
  const [valid, setValid] = useState(true);
  const isValid = VALIDATIONS[type];

  const handleChange = ({ target: { value } }) => {
    setValid(isValid(value));
    setValue(value);
  };

  return {
    value,
    errorMessage,
    required,
    valid,
    onSubmit: setValue,
    onChange: handleChange,
  };
};

export default useInput;
