const VALIDATIONS = {
  email(value) {
    return value.includes('@');
  },
  password(value) {
    return value.length >= 8;
  },
};

export default VALIDATIONS;
