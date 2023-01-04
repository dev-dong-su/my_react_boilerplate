import { RadioButton } from 'components/common';
import { useState } from 'react';
import tw from 'tailwind-styled-components';

import Login from './Login';
import Register from './Register';

const Container = tw.div`flex flex-col shadow-md items-center w-full h-5/6 mx-auto rounded-xl gap-2 bg-slate-600 my-auto`;
const Header = tw.div`flex flex-col items-center gap-5 w-full shadow-md p-4 rounded-xl`;
const Title = tw.h2`my-10 text-7xl text-orange-400`;
const OptionContaine = tw.div`flex flex-row w-full justify-evenly mt-10 font-semibold`;

const Auth = () => {
  const [accountMethod, setAccountMethod] = useState('login');

  const radioChangeHandler = event => {
    setAccountMethod(() => event.target.value);
  };

  return (
    <Container>
      <Header>
        <Title>DongSu</Title>
        <OptionContaine>
          <RadioButton
            handler={radioChangeHandler}
            id={'login'}
            isSelected={accountMethod}
            label={'Login'}
            value={'login'}
          />
          <RadioButton
            handler={radioChangeHandler}
            id={'register'}
            isSelected={accountMethod}
            label={'Register'}
            value={'register'}
          />
        </OptionContaine>
      </Header>
      {accountMethod === 'login' ? <Login /> : <Register />}
    </Container>
  );
};

export default Auth;
