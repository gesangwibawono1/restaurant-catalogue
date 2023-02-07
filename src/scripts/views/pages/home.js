import TheMovieDbSource from '../../data/themoviedb-source';
import { createMovieItemTemplate } from '../templates/template-creator';

const NowPlaying = {
  async render() {
    return `
      <div class="hero__image">
        <div class="hero__text">
          <h1 style="font-size:50px">Indonesian Food</h1>
          <p>Make your convenience with our service. See more melody of flavors in every dish.</p>
        </div>
      </div>
      <div class="content">
        <h2 class="content__heading">Now Playing in Cinema</h2>
        <div id="movies" class="restaurants">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const movies = await TheMovieDbSource.nowPlayingMovies();
    const moviesContainer = document.querySelector('#movies');
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default NowPlaying;
