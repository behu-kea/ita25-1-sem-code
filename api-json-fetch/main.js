const firstMovieElement = document.querySelector("p.first-movie")
console.log(firstMovieElement)
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(movies => {
        console.log(movies);
        const firstMovie = movies[0];
        const firstMovieTitle = firstMovie.title

        console.log(firstMovieTitle);
        console.log(firstMovie.title.length);

        firstMovieElement.innerText = firstMovieTitle;


    });



















ul.listOfProducts li


main-body-tag



function getPlayerNames() {
    const player1 = [prompt('What is your name?')]
    const player2 = [prompt('What is your name?')]
    console.log(player1)
    console.log(player2)


}


getPlayerNames()