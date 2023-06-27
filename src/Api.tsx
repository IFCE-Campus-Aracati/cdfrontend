import axios from 'axios';

export const Api = axios.create({
  baseURL: `http://localhost:3003/`
})

Api.interceptors.request.use(async config => {

  const userStorage = localStorage.getItem("@codecrafters:user");
  if (userStorage) {
    const userData = JSON.parse(userStorage);
    const token = userData.token;
    if (token) {
      Api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }
  return config;
});


axios.interceptors.response.use(
  (response) => {
    // Se a resposta for bem-sucedida, retorne-a normalmente
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Verifique se o erro é devido a um token inválido (401 Unauthorized)
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
    }
  }

);