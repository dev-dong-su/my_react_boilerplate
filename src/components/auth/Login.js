import { Button, Input } from 'components/common';
import { useLoginAuth } from 'hooks/business/useAuthentication';
import tw from 'tailwind-styled-components';

const Container = tw.form`flex flex-col w-6/12 mt-28 justify-center rounded-xl gap-24`;

const SignIn = () => {
  const { state, handleOnSubmit } = useLoginAuth();
  return (
    <Container onSubmit={handleOnSubmit}>
      <Input type="email" label="Email" autoComplete="username" {...state.email} />
      <Input type="password" label="Password" {...state.password} />
      <Button
        type="submit"
        className={'bg-orange-400 text-white shadow-md mx-auto w-24 h-12 text-xl'}
        disabled={!state.email.valid || !state.password.valid}
      >
        Login
      </Button>
    </Container>
  );
};

export default SignIn;
