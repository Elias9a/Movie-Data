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
  const editButton = document.createElement('button');

  title.innerText = movieTitle;
  plot.innerText = movie.plot;
  cast.innerHTML = `Cast: ${movie.cast}`
  runtime.innerText = `Runtime: ${movie.runtime} minutes`;
  rating.innerText = `Rating: ${movie.rating}`;
  year.innerText = `Year: ${movie.year}`;
  editButton.innerText = 'Edit';

  editButton.addEventListener('click', () => {
    const form = document.createElement('form');
    const plotInput = document.createElement('input');
    const castInput = document.createElement('input');
    const runtimeInput = document.createElement('input');
    const ratingInput = document.createElement('input');
    const yearInput = document.createElement('input');
    const submitButton = document.createElement('button');

    plotInput.value = movie.plot;
    castInput.value = movie.cast.join(', ');
    runtimeInput.value = movie.runtime;
    ratingInput.value = movie.rating;
    yearInput.value = movie.year;
    submitButton.innerText = 'Save';

    form.appendChild(plotInput);
    form.appendChild(castInput);
    form.appendChild(runtimeInput);
    form.appendChild(ratingInput);
    form.appendChild(yearInput);
    form.appendChild(submitButton);

    submitButton.addEventListener('click', (event) => {
      event.preventDefault();

      const updatedMovieData = {
        plot: plotInput.value,
        cast: castInput.value.split(',').map(name => name.trim()),
        runtime: parseInt(runtimeInput.value),
        rating: parseFloat(ratingInput.value),
        year: parseInt(yearInput.value),
      };

      movieData[movieTitle] = updatedMovieData;

      plot.innerText = updatedMovieData.plot;
      cast.innerHTML = `Cast: ${updatedMovieData.cast}`;
      runtime.innerText = `Runtime: ${updatedMovieData.runtime} minutes`;
      rating.innerText = `Rating: ${updatedMovieData.rating}`;
      year.innerText = `Year: ${updatedMovieData.year}`;

      form.remove();
    });

    div.appendChild(form);
  });

  div.appendChild(title);
  div.appendChild(plot);
  div.appendChild(cast);
  div.appendChild(runtime);
  div.appendChild(rating);
  div.appendChild(year);
  div.appendChild(editButton);

  movieList.appendChild(div);
}
  