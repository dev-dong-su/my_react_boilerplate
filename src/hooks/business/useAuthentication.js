import { useRegisterMutation, useLoginMutation } from 'hooks/queries/auth';
import { useInput } from 'hooks/common';
import { MESSAGE, ROUTES } from 'constants';
import { useNavigate } from 'react-router-dom';

export const useRegisterAuth = () => {
  const navigate = useNavigate();
  const { requestRegister } = useRegisterMutation();

  const form = {
    name: useInput({
      initialValue: '',
      type: 'name',
      errorMessage: MESSAGE.USERNAME_ERROR,
      required: true,
    }),
    email: useInput({
      initialValue: '',
      type: 'email',
      errorMessage: MESSAGE.EMAIL_ERROR,
      required: true,
    }),
    password: useInput({
      initialValue: '',
      type: 'password',
      errorMessage: MESSAGE.PASSWORD_ERROR,
      required: true,
    }),
    passwordCheck: useInput({
      initialValue: '',
      type: 'password',
      errorMessage: MESSAGE.PASSWORD_CHECK_ERROR,
      required: true,
    }),
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    requestRegister({ email: form.email.value, password: form.password.value, name: form.name.value });
    navigate(ROUTES.HOME, { replace: true });
  };

  return {
    state: {
      name: form.name,
      email: form.email,
      password: form.password,
      passwordCheck: form.passwordCheck,
    },
    handleOnSubmit,
  };
};

export const useLoginAuth = () => {
  const { requestLogin } = useLoginMutation();

  const form = {
    email: useInput({
      initialValue: '',
      type: 'email',
      errorMessage: MESSAGE.EMAIL_ERROR,
      required: true,
    }),
    password: useInput({
      initialValue: '',
      type: 'password',
      errorMessage: MESSAGE.PASSWORD_ERROR,
      required: true,
    }),
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    requestLogin({ email: form.email.value, password: form.password.value });
  };

  return {
    state: {
      email: form.email,
      password: form.password,
    },
    handleOnSubmit,
  };
};
