import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import PicturesPage from '../pages/picturesPage/PicturesPage';
import FavoritesPage from '../pages/favoritesPage/FavoritesPage';
import GrayscalePage from '../pages/grayscalePage/GrayscalePage';
import PicturePage from '../pages/picturePage/PicturePage';

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
     element: <PicturePage/> 
    },
    {
      path: '/grayimage',
      element: <GrayscalePage/>
    }
]);

export default Router;