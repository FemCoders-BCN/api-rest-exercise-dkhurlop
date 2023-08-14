import React from "react";
import { FavoriteService } from "../../services/FavoritesService";

function DeleteFavoriteButton({ favoriteId, onDelete }) {
  const handleDelete = async () => {
    try {
      await FavoriteService.deleteFavorite(favoriteId);
      onDelete(favoriteId);
    } catch (err) {
      console.error("Error deleting favorite", err);
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
}

export default DeleteFavoriteButton;
