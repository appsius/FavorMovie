const addMovieBtn = document.getElementById('add-movie-btn');
const searchMovie = document.getElementById('search-movie');

const movies = [];

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
			[extraName]: extraValue,
		},
		id: Math.random() * 100000,
	};

	movies.push(newMovie);
	console.log(newMovie);
};

addMovieBtn.addEventListener('click', addMovieHandler);
