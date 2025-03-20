import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000',
});

export const login = async (credenciales) => {
    const response = await api.post('auth/login', credenciales,{
        headers:{   
        }
    });
    console.log(response);
    return response.data;
}