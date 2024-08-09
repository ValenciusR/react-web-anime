import React from "react";
import AnimeItem from "./AnimeItem";

function AnimeList({ animes, onSelectedAnime }) {
  return (
    <ul className="list list-anime">
      {animes?.map((anime) => (
        <AnimeItem
          key={anime.mal_id}
          anime={anime}
          onSelectedAnime={onSelectedAnime}
        />
      ))}
    </ul>
  );
}

export default AnimeList;
