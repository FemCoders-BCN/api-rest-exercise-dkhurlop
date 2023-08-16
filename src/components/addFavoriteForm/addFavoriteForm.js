import React, { useState } from "react";
import axios from "axios";
import { FavoriteService } from "../../services/FavoritesService";
import './addFavorite.css'

function AddFavoriteForm({ onAdd }) {
  const [imageId, setImageId] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newFavorite = await axios.get(
        `https://picsum.photos/id/${imageId}/info`
      );

      const newCard = {
        id: newFavorite.data.id,
        author: newFavorite.data.author,
        download_url: newFavorite.data.download_url,
      };

      const favoriteService = FavoriteService();

      favoriteService
        .create(newCard)
        .then(() => {
          onAdd(newFavorite.data); // Actualiza la lista de favoritos en la página
          // Limpia el campo del formulario
          setImageId("");
        })
        .catch((error) => {
          console.error("Error al crear favorito", error);
        });
    } catch (err) {
      console.error("Error adding favorite", err);
    }
  };

  return (
    <form className="addFav" onSubmit={handleSubmit}>
      <input
        
        type="text"
        placeholder="Image Id"
        value={imageId}
        onChange={(event) => setImageId(event.target.value)}
      />
      <button type="submit">Add Favorite</button>
    </form>
  );
}

export default AddFavoriteForm;
