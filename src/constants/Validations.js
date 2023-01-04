const VALIDATIONS = {
  email(value) {
    return value.includes('@');
  },
  password(value) {
    return value.length >= 8;
  },
  name(value) {
    return value.length >= 2;
  },
};

export default VALIDATIONS;
