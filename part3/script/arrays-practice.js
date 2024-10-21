// 1
var favMovies = ["Frozen", "Fast n Furious", "The mummy", "Joker", "Descpicable Me"];
console.log(favMovies[1]);


// 2
var movies = new Array(5);
for (var i = 0; i < favMovies.length; i++) {
    movies[i] = favMovies[i];
}
console.log(movies[0]);


// 3
movies.splice(2, 0, "Transformers");
console.log(movies.length);


// 4
var movies = [];
for (var i = 0; i < favMovies.length; i++) {
    movies.push(favMovies[i]);
}
delete movies[0];
console.log(movies);


// 5
var favMovies = ["Frozen", "Fast n Furious", "The mummy", "Joker", "Descpicable Me", "Eclipse", "Captain Philips"];
var movies = [];


for (var i = 0; i < favMovies.length; i++) {
    movies.push(favMovies[i]);
}


for (var j = 0; j < movies.length; j++) {
    console.log(movies[j]);
}


// 6
for (index in movies) {
    console.log(movies[index]);
}


// 7
var sortedMovies = movies.sort();
for (index in sortedMovies) {
    console.log(sortedMovies[index]);
}


// 8
var leastFavMovies = ["The ring", "Annabelle", "James Bond"];
var favMovies = movies;

console.log("\nMovies I like:\n\n" + favMovies.join("\n") +
            "\n\nMovies I regret watching:\n\n" + leastFavMovies.join("\n") + "\n\n");

// 9
var movies = favMovies.concat(leastFavMovies);
var reverseSort = movies.sort().reverse();

console.log(reverseSort.join("\n"));

// 10
console.log(reverseSort.pop());