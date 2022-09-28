const router = require("express").Router();
const { getAllNotes, createNewNote, updateNote, deleteNote } = require("../controllers/notes.controller");

router.route("/").get(getAllNotes).post(createNewNote).patch(updateNote).delete(deleteNote);

module.exports = router;
