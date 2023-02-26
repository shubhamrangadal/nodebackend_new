


class UserController {

    constructor(db) {
        this.db = db;
    }

    async getUsers(req, res) {
        const collection = this.db.collection('user');
        const cursor = collection.find({});
        const users = [];
        for await (const user of cursor) {
            users.push(user);
        }
        res.send(users);
    }

    async getUserById(req, res) {
        const collection = this.db.collection('user');
        const cursor = collection.find({_id: parseInt(req.params.id)});
        const users = [];
        for await (const user of cursor) {
            users.push(user);
        }
        res.send(users);
    }

    async addUser(req, res) {
        const collection = this.db.collection('user');
        const user = req.body;
        const result = await collection.insertOne(user);
        res.send(result);
    }

    //write function to check user and password
    async checkUserAndPassword(req, res) {
        const collection = this.db.collection('user');
        const cursor = collection.find({username: req.params.username, password: req.params.password});
        const users = [];
        for await (const user of cursor) {
            users.push(user);
        }
        res.send(users);
    }

}

module.exports = UserController;