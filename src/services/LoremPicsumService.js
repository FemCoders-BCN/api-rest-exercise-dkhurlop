import axios from "axios";

//estas son algunas configuraciones que tiene axios, mientras seguimos con el curso encontrarás más
axios.defaults.baseURL = 'https://picsum.photos';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

export const LoremPicsumService = () => {
  const urlGetAll = '/v2/list';
  //Los endpoints que tienen llaves con un texto dentro, quiere decir que le has de pasar algún valor /id/{image}/{size}, eso significa que image y size son valores que te dirá la documentación cómo se pasan.
  const urlGetById = '/id/{image}/{size}';
  /* Construye la url para el tercer endpoint */
  const urlGetGrayscale = 'https://picsum.photos/200/300?grayscale';

  const getAll = () => {
    const response = axios.get(urlGetAll);
    return response;
  };
  
  const getById = (id, size) => {
    const response = axios.get(`${urlGetById.replace('{image}', id).replace('{size}', size)}`);
    return response;
  }; 
  // const getById = async (id, size) => {
  //   try {
  //     const response = await axios.get(`${urlGetById}/${id}/${size}`);
  //     return response.data;
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  const getRandomGrayscale = (size) => {
    const response = axios.get(`${urlGetGrayscale.replace('{size}', size)}`);
    return response;
  };

  return {
    getAll,
    getById,
    getRandomGrayscale
  }
}