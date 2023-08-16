import React from "react";

function DeleteFavoriteButton({ onDelete }) {
  return (
    <button onClick={onDelete}>Delete</button>
  );
}

export default DeleteFavoriteButton;