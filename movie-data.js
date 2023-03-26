let movieData = {
    "The Darjeeling Limited": {
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman", " Owen Wilson", " Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      year: 2007,
    },
    "The Royal Tenenbaums": {
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman", " Gwnyeth Paltrow", " Anjelica Huston"],
      runtime: 170,
    },
    "Fantastic Mr. Fox": {
      year: 2009,
      plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      cast: [
        "George Clooney",
        " Meryl Streep",
        " Bill Murray",
        " Jason Schwartzman",
      ],
      runtime: 147,
      rating: 7.9,
    },
    "The Grand Budapest Hotel": {
      rating: 8.1,
      runtime: 159,
      year: 2014,
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes", " F. Murray Abraham", " Mathieu Amalric"],
    },
  };

const movieList = document.getElementById('movie-list');

for (const movieTitle in movieData) {
  const movie = movieData[movieTitle];
  const div = document.createElement('div');
  div.classList.add('list');
  const title = document.createElement('h2');
  const plot = document.createElement('p');
  const cast = document.createElement('p');
  const runtime = document.createElement('p');
  const rating = document.createElement('p');
  const year = document.createElement('p');

  title.innerText = movieTitle;
  plot.innerText = movie.plot;
  cast.innerHTML = `Cast: ${movie.cast}`
  runtime.innerText = `Runtime: ${movie.runtime} minutes`;
  rating.innerText = `Rating: ${movie.rating}`;
  year.innerText = `Year: ${movie.year}`;

  div.appendChild(title);
  div.appendChild(plot);
  div.appendChild(cast);
  div.appendChild(runtime);
  div.appendChild(rating);
  div.appendChild(year);

  movieList.appendChild(div);
}

function sortMoviesBy(sortCriteria) {
    const movieList = document.getElementById('movie-list');
    const movieItems = [...movieList.children];
  
    movieItems.sort((a, b) => {
      const movieA = movieData[a.firstChild.innerText];
      const movieB = movieData[b.firstChild.innerText];
  
      if (movieA[sortCriteria] > movieB[sortCriteria]) return 1;
      else if (movieA[sortCriteria] < movieB[sortCriteria]) return -1;
      else { return 0; }
    });
  
    movieList.innerHTML = '';
    movieItems.forEach((item) => movieList.appendChild(item));
  }
  
  
  
  
  