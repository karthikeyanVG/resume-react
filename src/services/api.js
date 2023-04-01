import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8001';

export const registerUser = async (userData) => {
    try {
      const response = await axios.post(`${apiUrl}/v1/register`, userData);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

export const login = async(userData)=>{

  try {
    const response = await axios.post(`${apiUrl}/v1/login`, userData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}