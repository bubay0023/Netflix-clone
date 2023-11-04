const { addToLikedMovies, getLikedMovies, removeFromLikedMovies } = require("../controllers/UserController");

const router = require("express").Router();
router.put("/delate", removeFromLikedMovies);
router.post("/add",addToLikedMovies);
router.get("/liked/:email",getLikedMovies);



module.exports = router;

