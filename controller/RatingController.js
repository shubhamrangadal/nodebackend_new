const express = require('express');

class RatingController {

    constructor(db) {
        this.db = db;
    }


    //write function to get all ratings
    async getRatings(req, res) {
        const collection = this.db.collection('ratings');
        const cursor = collection.find({});
        const ratings = [];
        for await (const rating of cursor) {
            ratings.push(rating);
        }
        res.send(ratings);
    }

    //write function to get rating by id
    async getRatingById(req, res) {
        const collection = this.db.collection('ratings');
        const cursor = collection.find({_id: parseInt(req.params.id)});
        const ratings = [];
        for await (const rating of cursor) {
            ratings.push(rating);
        }
        res.send(ratings);
    }

    //write function to get rating by movie id
    async getRatingByMovieId(req, res) {
        const collection = this.db.collection('ratings');
        const cursor = collection.find({movieId: parseInt(req.params.id)});
        const ratings = [];
        for await (const rating of cursor) {
            ratings.push(rating);
        }
        res.send(ratings);
    }

    //write function to get rating by user id
    async getRatingByUserId(req, res) {
        const collection = this.db.collection('ratings');
        const cursor = collection.find({userId: parseInt(req.params.id)});
        const ratings = [];
        for await (const rating of cursor) {
            ratings.push(rating);
        }
        res.send(ratings);
    }

    //write function to add rating
    async addRating(req, res) {
        const collection = this.db.collection('ratings');
        const rating = req.body;
        const result = await collection.insertOne(rating);
        res.send(result);
    }
}

module.exports = RatingController;