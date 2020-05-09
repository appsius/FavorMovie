const movieList = document.getElementById('movie-list');

movieList.style['background-color'] = 'red';
movieList.style.display = 'block';

const person = {
	'first name': 'Appsius',
	age: 24,
	hobbies: ['Coding', 'Calligraphy'],
	greet: function () {
		alert('Made it!');
	},
};

// delete person.age;
// person.age = undefined;
// person.age = null;

person.isAdmin = true;

console.log(person['first name']);
