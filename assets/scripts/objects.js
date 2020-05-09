const movieList = document.getElementById('movie-list');

movieList.style['background-color'] = 'red';
movieList.style.display = 'block';

const userChosenKeyName = 'level';

const person = {
	'first name': 'Appsius',
	age: 24,
	hobbies: ['Coding', 'Calligraphy'],
	[userChosenKeyName]: 4,
	greet: function () {
		alert('Made it!');
	},
	2.4: 'Merhaba',
};

// delete person.age;
// person.age = undefined;
// person.age = null;

const keyName = 'first name';

person.isAdmin = true;

console.log(person[keyName]);
