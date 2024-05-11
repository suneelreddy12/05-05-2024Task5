class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  static getPG(movies) {
    return movies.filter((movie) => movie.rating === "PG");
  }
}

// Creating array of Movie instances
const movies = [
  new Movie("Movie1", "Studio1", "PG"),
  new Movie("Movie2", "Studio2", "PG-13"),
  new Movie("Movie3", "Studio3", "R"),
  new Movie("Movie4", "Studio4", "PG"),
  new Movie("Movie5", "Studio5", "G"),
];

const pgMovies = Movie.getPG(movies);
console.log(pgMovies);

// Creating an instance of the class Movie
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log(casinoRoyale);
