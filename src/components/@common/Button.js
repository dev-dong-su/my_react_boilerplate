import tw from 'tailwind-styled-components';

const StyledButton = tw.button`justify-center items-center px-3 py-2 shadow-sm rounded-md text-md disabled:opacity-75`;

const Button = ({ children, className, ...rest }) => {
  return (
    <StyledButton className={className} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
