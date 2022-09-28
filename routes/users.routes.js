const router = require("express").Router();
const { getAllUsers, createNewUser, updateUser, deleteUser } = require("../controllers/users.controller");

router.route("/").get(getAllUsers).post(createNewUser).patch(updateUser).delete(deleteUser);

module.exports = router;
