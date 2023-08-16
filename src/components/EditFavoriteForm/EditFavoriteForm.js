// EditFavoriteForm.js
import React, { useState } from 'react';
import { FavoriteService } from '../../services/FavoritesService';

function EditFavoriteForm({ favorite, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedFavorite, setEditedFavorite] = useState(favorite);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateClick = async () => {
    try {
      const favoriteService = FavoriteService();
      await favoriteService.update(editedFavorite.id, editedFavorite);
      setIsEditing(false);
      onUpdate(editedFavorite);
    } catch (error) {
      console.error('Error updating favorite:', error);
    }
  };

  const handleCancelClick = () => {
    setEditedFavorite(favorite);
    setIsEditing(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedFavorite(prevEditedFavorite => ({
      ...prevEditedFavorite,
      [name]: value,
    }));
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="author"
            value={editedFavorite.author}
            onChange={handleInputChange}
          />
          <button onClick={handleUpdateClick}>Update</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>Author: {favorite.author}</p>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default EditFavoriteForm;
