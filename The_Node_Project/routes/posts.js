const express = require("express")
const router = express.Router();
const Person = require("../model/Post");
const res = require("express/lib/response");

// Route to fetch all posts
router.get('/', async (req, res) => {
    try {
        // Fetch all posts from the database
        const posts = await Person.find();
        // Send the fetched posts as a response
        res.send(posts);
    }
    catch (err) {
        // Handle any errors that occur during the process
        res.json({ message: err });
    }
});

// Save the new data
router.post("/", async (req, res) => {

    try {
        const person = new Person(req.body);
        await person.save();
        res.send(person);
    }
    catch (err) {
        res.json({ message: err });
    }
});

// Get a specific post
router.get("/:id", async (req, res) => {
    // res.send(req.params.postId) // This line was commented out, not used
    try {
        const post = await Person.findById(req.params.postId);
        res.json(post);
    }
    catch (err) {
        res.json({ message: err });
    }
});

// Update a specific post
router.put('/:id', async (req, res) => {
    try {
        const person = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(person);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Delete a post
router.delete("/:id", async (req, res) => {

    try {
        await Person.findByIdAndDelete(req.params.id);
        res.send({ message: 'post deleted' });

    } catch (error) {
        res.json({ message: error });
    }

});

module.exports = router;