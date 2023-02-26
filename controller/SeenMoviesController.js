

class SeenMoviesController {

    constructor(db) {
        this.db = db;
    }

    //write function to get all seen movies
    async getSeenMovies(req, res) {
        const collection = this.db.collection('seenmovies');
        const cursor = collection.find({});
        const seenMovies = [];
        for await (const seenMovie of cursor) {
            seenMovies.push(seenMovie);
        }
        res.send(seenMovies);
    }

    //write function to get seen movie by id
    async getSeenMovieById(req, res) {
        const collection = this.db.collection('seenmovies');
        const cursor = collection.find({_id: parseInt(req.params.id)});
        const seenMovies = [];
        for await (const seenMovie of cursor) {
            seenMovies.push(seenMovie);
        }
        res.send(seenMovies);
    }

    //write function to get seen movie by user id and using movie id fetch the movie details from movie table
    async getSeenMovieByUserIdAndMovieId(req, res) {
        const collection = this.db.collection('seenmovies');
        const cursor = collection.find({userId: parseInt(req.params.id), movieId: parseInt(req.params.movieId)});
        const seenMovies = [];
        for await (const seenMovie of cursor) {
            seenMovies.push(seenMovie);
        }
        res.send(seenMovies);
    }


    async getSeenMovieByUserId(req, res) {
        const collection = this.db.collection('seenmovies');
        const cursor = collection.find({userId: parseInt(req.params.id)});
        const seenMovies = [];
        for await (const seenMovie of cursor) {
            seenMovies.push(seenMovie);
        }

        res.send(seenMovies);
    }

    //write function to add seen movie
    async addSeenMovie(req, res) {
        const collection = this.db.collection('seenmovies');
        const seenMovie = req.body;
        const result = await collection.insertOne(seenMovie);
        res.send(result);
    }

    //write function for not seen movie by user id
    async notSeenMovieByUserId(req, res) {
        const collection = this.db.collection('seenmovies');
        const seenMovie = req.body;
        const result = await collection.deleteOne(seenMovie);
        res.send(result);
    }
}

module.exports = SeenMoviesController;