import axios from "axios";

//estas son algunas configuraciones que tiene axios, mientras seguimos con el curso encontrarás más
axios.defaults.baseURL = 'https://picsum.photos';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

export const LoremPicsumService = () => {
  const urlGetAll = '/v2/list';
  //Los endpoints que tienen llaves con un texto dentro, quiere decir que le has de pasar algún valor /id/{image}/{size}, eso significa que image y size son valores que te dirá la documentación cómo se pasan.
  const urlGetById = '/id/{image}/{size}';
  /* Construye la url para el tercer endpoint
  const urlGetGrayscale = ''; */

  const getAll = () => {
    const response = axios.get(urlGetAll);
    return response;
  };
  
  const getById = (id, size) => {
    const response = axios.get(`${urlGetById}/${id}/${size}`);
    return response;
  }; 

  const getRandomGrayscale = () => {
    //construye como sería el método de la petición para obtener una imagen aleatoria en escala de grises (apóyate en la documentación)
  }; 

  return {
    getAll,
    //Deberás retornar el método para que puedas exportarlo
  }
}