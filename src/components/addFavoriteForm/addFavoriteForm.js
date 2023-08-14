import { useState } from "react";
import { FavoriteService } from "../../services/FavoritesService";

function AddFavoriteForm({ onAdd }) {
    const [imageId, setImageId] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const favoriteData = {
            imageId,
            author
        };
        try {
            const newFavorite = await FavoriteService.createFavorite(favoriteData);
            onAdd(newFavorite);//actualiza la lista de favorite
            setImageId('');
            setAuthor('');
        } catch (err) {
            console.error('Error adding favorite', err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
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
            <button type="submit">Add Favorite</button>
        </form>
    );
}

export default AddFavoriteForm;
