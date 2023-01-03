import tw from 'tailwind-styled-components';

const StyledContainer = tw.div`relative w-full`;
const StyledInput = tw.input`p-3 w-full text-gray-900 bg-slate-50 rounded-lg border-2 border-slate-600 
transition ease-in duration-600
focus:outline-none focus:border-rose-400 peer`;
const StyledLabel = tw.label`absolute text-slate-500 text-sm -top-5 left-1 bg-transparent
peer-focus:text-rose-400`;
const ErrorMessage = tw.span`text-rose-400 text-sm ml-2`;

const Input = ({ type, label, errorMessage, valid, ...rest }) => {
  return (
    <StyledContainer>
      <StyledInput type={type} {...rest} />
      <StyledLabel>{label}</StyledLabel>
      {!valid && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </StyledContainer>
  );
};

export default Input;
