import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3001" 
});

export const getFuncionarios = async () => {
    const response = await api.get('/funcionario');  // ← chamando rota do backend
    return response.data.Resultado;
  };

export default api