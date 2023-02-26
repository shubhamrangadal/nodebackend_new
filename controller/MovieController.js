const express = require("express");

class MovieController{

    constructor(db) {
        this.db = db;
    }

    async getMovies(req, res) {
        const collection = this.db.collection('movies');
        const cursor = collection.find({});
        const movies = [];
        for await (const movie of cursor) {
            movies.push(movie);
        }
        res.send(movies);

    }

    async getMovieById(req, res) {
        const collection = this.db.collection('movies');
        const cursor = collection.find({_id: parseInt(req.params.id)});
        const movies = [];
        for await (const movie of cursor) {
            movies.push(movie);
        }
        res.send(movies);
    }
}

module.exports = MovieController;