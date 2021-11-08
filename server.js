const express = require('express');
const { v4: uuidv4 } = require('uuid');
const notes = require('./db/db.json');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded( {extended: true}));
app.use(express.json());

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4();

    notes.push(newNote);
    res.json(newNote);
});

app.listen(PORT, () => {
    console.log(`API Server now on port ${PORT}`);
});