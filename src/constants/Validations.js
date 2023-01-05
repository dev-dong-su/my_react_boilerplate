const VALIDATIONS = {
  email(value) {
    const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return regex.test(value);
  },
  password(value) {
    return value.length >= 8;
  },
  name(value) {
    return value.length >= 2;
  },
};

export default VALIDATIONS;
