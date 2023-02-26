const { MongoClient } = require('mongodb');
const express = require('express');
const app = express();
const port = 3000;
let movieController = require('./controller/MovieController');
let seenMovieController = require('./controller/SeenMoviesController');
let ratingController = require('./controller/RatingController');
let userController = require('./controller/UserController');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'movieDb';
let db = null;


// Use connect method to connect to the Server
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
        console.log("Connected successfully to server");
        db = client.db(dbName);

        let movies = new movieController(db);
        let seenMovies = new seenMovieController(db);
        let ratings = new ratingController(db);
        let users = new userController(db);

        app.get('/movies', (req, res) => {
            movies.getMovies(req, res).then(r => {
                res.send(r);
            });
        });


        app.get('/movies/:id', (req, res) => {
            movies.getMovieById(req, res).then(r => {
                res.send(r);
            });
        });

        //write get funtion to get all seen movies by user id
        app.get('/seenMovies/user/:id', (req, res) => {
            seenMovies.getSeenMovieByUserId(req, res).then(r => {
                res.send(r);
            });
        });



        app.get('/seenMovies/user/:id', (req, res) => {
            seenMovies.getSeenMovieByUserId(req, res).then(r => {
                res.send(r);
            });
        });

        //write get funtion to get all seen movies by user id
        app.get('/seenMovies/user/:id', (req, res) => {
            seenMovies.addSeenMovie(req, res).then(r => {
                res.send(r);
            });
        });

        //write funtion to get all ratings by movie id
        app.get('/ratings/movie/:id', (req, res) => {
            ratings.getRatingByMovieId(req, res).then(r => {
                res.send(r);
            });
        });

        //write funtion to add rating
        app.post('/ratings', (req, res) => {
            ratings.addRating(req, res).then(r => {
                res.send(r);
            });
        });

        //write function to check if user exists with username and password
        app.get('/users/:username/:password', (req, res) => {
            users.checkUserAndPassword(req, res).then(r => {
                res.send(r);
            });
        });


    })
    .catch(err => {
        console.error(err);
    });

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


