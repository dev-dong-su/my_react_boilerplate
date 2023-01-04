import { client } from './index';

export const register = async formData =>
  await client.post('/auth/register', { name: formData.name, email: formData.email, password: formData.password });

export const login = async formData =>
  await client.post('/auth/login', { email: formData.email, password: formData.password });
