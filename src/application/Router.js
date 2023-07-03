import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import PicturesPage from '../pages/picturesPage/PicturesPage';
import FavoritesPage from '../pages/favoritesPage/FavoritesPage';

const Router = createBrowserRouter([
    {
      path: "/",
      element: <App/>
    },
    {
      path: "/favorites",
      element: <FavoritesPage/>
    },
    {
      path: '/list',
      element: <PicturesPage/> 
    },
    {
      path: '/image',
      /* element: ¿qué falta aquí? */  
    }
    //crea la ruta que te falta
]);

export default Router;