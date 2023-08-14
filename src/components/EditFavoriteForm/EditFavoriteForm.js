import { useState } from "react";  
import { FavoriteService } from "../../services/FavoritesService";

function EditFavoriteForm({ favorite, onUpdate }) {
    const [imageId, setImageId] = useState(favorite.imageId);
    const [author, setAuthor] = useState(favorite.author);

    const handleUpdate = async (event) => {
        event.preventDefault();

        const updatedFavorite = {
            ...favorite,
            imageId,
            author
        };
        try {
            await FavoriteService.updateFavorite(favorite.id, updatedFavorite);
            onUpdate(favorite.id, updatedFavorite);
        } catch (err) {
            console.error('Error updating favorite', err);
        }
    };

    return (
        <form onSubmit={handleUpdate}>
            <input
                type="text"
                placeholder="Image Id"
                value={imageId}
                onChange={(event) => setImageId(event.target.value)}
            />
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
            />
            <button type="submit">Update Favorite</button>
        </form>
    );
}

export default EditFavoriteForm;