import API from '../../API/API';
import { axios } from 'axios';
const api = new API();
const endPoints = 'findevent.json';



    export const findEventApi = async () => {
            return new Promise(async (resolve, reject) => {
              try {
                const result = await api.get(`${endPoints}`);
                resolve(result);
                console.log(result,"uuuuuuuuuuuuuuuuuuuuuuu")
              } catch (error) {
                reject(error);
              }
            });
          }
