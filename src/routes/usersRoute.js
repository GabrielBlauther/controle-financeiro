const express = require("express");
const router = express.Router();
const { createUser, allUsers, getById,deleteUser } = require("../controllers/usersController");
const  userValidate   = require ("../middleware/userValidate");

router.get("/", allUsers);
router.get("/:id", getById);
router.post("/",userValidate, createUser);
//Rota delete adicionada
router.delete("/:id", deleteUser);

module.exports = router