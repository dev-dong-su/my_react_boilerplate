import { Button, Input } from 'components/common';
import { useRegisterAuth } from 'hooks/business/useAuthentication';
import tw from 'tailwind-styled-components';

const Container = tw.form`flex flex-col w-6/12 mt-28 justify-center rounded-xl gap-20`;

const Register = () => {
  const { state, handleOnSubmit } = useRegisterAuth();
  return (
    <Container onSubmit={handleOnSubmit}>
      <Input type="name" label="Name" autoComplete="name" {...state.name} />
      <Input type="email" label="Email" autoComplete="username" {...state.email} />
      <Input type="password" label="Password" {...state.password} />
      <Input type="password" label="Password Check" {...state.passwordCheck} pattern={state.password.value} />
      <Button
        type="submit"
        className={'bg-orange-400 text-white shadow-md mx-auto w-24 h-12'}
        disabled={!state.email.valid || !state.password.valid || !state.passwordCheck.valid}
      >
        Register
      </Button>
    </Container>
  );
};

export default Register;
