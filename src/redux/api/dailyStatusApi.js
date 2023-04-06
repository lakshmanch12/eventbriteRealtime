import API from '../../API/API.js';
const api = new API();
const endPoints = 'data';
export const createStatusDetailsApi = async (users) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.post(`${endPoints}`, users);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}
export const loadStatusDetailsApi = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.get(`${endPoints}`);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}
export const deleteStatusDetailsApi = async (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.delete(`${endPoints}/${userId}`);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}
export const updateStatusDetailsApi = async (userId, userInfo) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.put(`${endPoints}/${userId}`, userInfo);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}
