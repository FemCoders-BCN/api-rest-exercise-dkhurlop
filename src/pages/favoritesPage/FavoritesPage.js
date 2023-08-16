// FavoritesPage.js
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import PictureObject from '../../components/pictureObject/PictureObject';
import DeleteFavoriteButton from '../../components/deleteFavoriteButton/DeleteFavoriteButton';
import './FavoritesPage.css'; // Agrega estilos aquí si es necesario
import AddFavoriteForm from '../../components/addFavoriteForm/addFavoriteForm';
import EditFavoriteForm from '../../components/EditFavoriteForm/EditFavoriteForm';
import { FavoriteService } from '../../services/FavoritesService';

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
 
  useEffect(() => {
    const favoriteService = FavoriteService();

    favoriteService.getAll()
      .then(response => {
        setFavorites(response.data);
      })
      .catch(error => {
        console.error('Error al buscar favoritos', error);
      });
  }, []);

  const handleAddFavorite = (newFavorite) => {
    setFavorites([...favorites, newFavorite]);
  };

  const handleUpdateFavorite = (updatedFavorite) => {
    const updatedFavorites = favorites.map((favorite) =>
      favorite.id === updatedFavorite.id ? updatedFavorite : favorite
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
        {favorites.map((favorite, index) => (
          <li className='favorite-item' key={index}>
            <PictureObject image={favorite} />
            <EditFavoriteForm
              favorite={favorite}
              onUpdate={handleUpdateFavorite}
            />
            <DeleteFavoriteButton
              favoriteId={favorite.id}
              onDelete={() => handleDeleteFavorite(favorite.id)}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default FavoritesPage;
