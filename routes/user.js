const express = require("express");
const router = express.Router();
const personController = require("../controllers/user");
router.get("/api", personController.getUsers);
router.post("/api", personController.createUser);
router.get("/api/:user_id", personController.getUser);
router.patch("/api/:user_id", personController.updateUser);
router.delete("/api/:user_id", personController.deleteUsers);
module.exports = router;
