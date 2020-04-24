export const createFilmCardTemplate = (film) => {
  const {description, duration, genre, isFavorite, isWatchList, isWatched, poster, rating, title, year} = film;

  const watchListButtonInactiveClass = isWatchList ? `` : `film-card__controls-item--active`;
  const watchedListButtonInactiveClass = isWatched ? `` : `film-card__controls-item--active`;
  const favoriteListButtonInactiveClass = isFavorite ? `` : `film-card__controls-item--active`;

  return (
    `<article class="film-card">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${year}</span>
        <span class="film-card__duration">${duration}</span>
        <span class="film-card__genre">${genre}</span>
      </p>
      <img src="./images/posters/${poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${description}</p>
      <a class="film-card__comments">89 comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${watchListButtonInactiveClass}">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${watchedListButtonInactiveClass}">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite ${favoriteListButtonInactiveClass}">Mark as favorite</button>
      </form>
    </article>`
  );
};
