import tw from 'tailwind-styled-components';

const StyledContainer = tw.div`relative w-full`;
const StyledInput = tw.input`p-3 w-full text-slate-900 bg-slate-50 rounded-lg border-2
transition ease-in duration-600
focus:outline-none focus:border-orange-300 peer`;
const StyledLabel = tw.label`absolute text-slate-50 text-xl -top-7 left-1 bg-transparent
peer-focus:text-orange-400`;
const ErrorMessage = tw.span`text-rose-400 text-md ml-2`;

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
