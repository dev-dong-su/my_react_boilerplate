import { useMutation } from 'react-query';
import { login, register } from 'apis/auth';
import { MESSAGE } from 'constants';

export const useLoginMutation = () => {
  const { mutate: requestLogin } = useMutation(login, {
    onError: error => {
      alert(error.response.data.msg);
    },
    onSuccess: () => {
      alert(MESSAGE.LOGIN_SUCCEED);
    },
  });
  return {
    requestLogin,
  };
};

export const useRegisterMutation = () => {
  const { mutate: requestRegister } = useMutation(register, {
    onError: error => {
      alert(error.response.data.msg);
    },
    onSuccess: () => {
      alert(MESSAGE.REGISTER_SUCCEED);
    },
  });

  return {
    requestRegister,
  };
};
