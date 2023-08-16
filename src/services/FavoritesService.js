import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:5000'; // Cambia la URL según la configuración de tu servidor JSON
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

export const FavoriteService = () => {
  const urlPictures = 'http://localhost:5000/pictures'; // Cambia la ruta según la estructura de tu servidor

  const getAll = () => {
    return axios.get(urlPictures);
  };

  const getById = (id) => {
    return axios.get(`${urlPictures}/${id}`);
  };

  const create = (data) => {
    return axios.post(urlPictures, data);
  };

  const update = (id, data) => {
    return axios.put(`${urlPictures}/${id}`, data);
  };

  const remove = (id) => {
    return axios.delete(`${urlPictures}/${id}`);
  };

  return {
    getAll,
    getById,
    create,
    update,
    remove,
  };
};
