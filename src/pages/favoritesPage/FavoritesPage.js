import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { FavoriteService } from '../../services/FavoritesService';
import PictureObject from '../../components/pictureObject/PictureObject';
import EditFavoriteForm from '../../components/EditFavoriteForm/EditFavoriteForm'; // Importa el componente EditFavoriteForm
import DeleteFavoriteButton from '../../components/deleteFavoriteButton/DeleteFavoriteButton'; // Importa el componente DeleteFavoriteButton
import AddFavoriteForm from '../../components/addFavoriteForm/addFavoriteForm';

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function fetchFavorites() {
      try {
        const service = FavoriteService();
        const response = await service.getAllFavorites();
        setFavorites(response.data.pictures); // Accede a la propiedad "pictures" en los datos
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    }

    fetchFavorites();
  }, []);

  const handleAddFavorite = (newFavorite) => {
    setFavorites([...favorites, newFavorite]);
  };

  const handleUpdateFavorite = (favoriteId, updatedFavorite) => {
    const updatedFavorites = favorites.map((favorite) =>
      favorite.id === favoriteId ? updatedFavorite : favorite
    );
    setFavorites(updatedFavorites);
  };

  const handleDeleteFavorite = (favoriteId) => {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.id !== favoriteId
    );
    setFavorites(updatedFavorites);
  };

  return (
    <main>
      <h2>Tus Favoritos</h2>
      <Navbar />
      <AddFavoriteForm onAdd={handleAddFavorite} />
      <ul className='favorites-container'>
        {favorites.map((favorite) => (
          <li className='favorite-item' key={favorite.id}>
            <PictureObject image={favorite} />
            <EditFavoriteForm
              favorite={favorite}
              onUpdate={handleUpdateFavorite}
            />
            <DeleteFavoriteButton
              favoriteId={favorite.id}
              onDelete={handleDeleteFavorite}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default FavoritesPage;

