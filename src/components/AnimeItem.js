import React from "react";

function AnimeItem({ anime, onSelectedAnime }) {
  return (
    <div>
      <li onClick={() => onSelectedAnime(anime.mal_id)}>
        <img src={anime.image} alt={`${anime.title} cover`} />
        <h3>{anime.title}</h3>
        <div>
          <p>
            <span>{anime.year}</span>
          </p>
        </div>
      </li>
    </div>
  );
}

export default AnimeItem;
