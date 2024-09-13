
const express = require("express");
const router = express.Router();
const {getAllAnimals,addAnimal,updateAnimal,deleteAnimal} = require("../controllers/animalsController");

// GET all animals
router.get("/getAllAnimals", getAllAnimals);

// POST new animal
router.post("/addAnimal", addAnimal);

// PUT update animal by ID
router.put("/updateAnimal/:id", updateAnimal);

// DELETE animal by ID
router.delete("/deleteAnimal/:id", deleteAnimal);

module.exports = router;
