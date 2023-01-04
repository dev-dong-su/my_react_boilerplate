import tw from 'tailwind-styled-components';

const StyledContainer = tw.div`flex container mx-auto max-w-screen-xl h-screen my-auto`;

const PageTemplate = ({ children, ...rest }) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
};

export default PageTemplate;
