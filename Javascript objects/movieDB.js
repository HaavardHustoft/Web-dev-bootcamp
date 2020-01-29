movies = [
    {
        name: "In Bruges",
        rating: 5,
        watched: true
    },
    {
        name: "Frozen",
        rating: 4.5,
        watched: false
    },
    {
        name: "Mad Max Fury Road",
        rating: 5,
        watched: true
    },
    {
        name: "Les Miserables",
        rating: 3.5,
        watched: false
    }
];


movies.forEach(movie => {
    if (movie.watched){
        console.log("You have watched \"" + movie.name + "\" - " + movie.rating + " stars");
    }
    else {
        console.log("You have not seen \"" + movie.name + "\" - " + movie.rating + " stars");
    }
});