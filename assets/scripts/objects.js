const addMovieBtn = document.getElementById('add-movie-btn');
const searchMovie = document.getElementById('search-movie');

const movies = [];

const renderMovies = () => {
	const movieList = document.getElementById('movie-list');

	if (movies.length === 0) {
		movieList.classList.remove('visible');
		return;
	} else {
		movieList.classList.add('visible');
	}

	movieList.innerHTML = '';

	movies.forEach((movie) => {
		const movieEl = document.createElement('li');
		let text = movie.info.title + ' - ';

		for (let key in movie.info) {
			if (key !== 'title') {
				text += `${key}: ${movie.info[key]}`;
			}
		}

		movieEl.textContent = text;
		movieList.append(movieEl);
	});
};

const addMovieHandler = () => {
	const title = document.getElementById('title').value;
	const extraName = document.getElementById('extra-name').value;
	const extraValue = document.getElementById('extra-value').value;

	if (
		title.trim() === '' ||
		extraName.trim() === '' ||
		extraValue.trim() === ''
	) {
		return;
	}

	const newMovie = {
		info: {
			title,
			[extraName]: extraValue,
		},
		id: Math.random() * 100000,
	};

	movies.push(newMovie);
	renderMovies();
};

addMovieBtn.addEventListener('click', addMovieHandler);
