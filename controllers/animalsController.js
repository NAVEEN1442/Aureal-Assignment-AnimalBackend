
const Animal = require("../models/animal");


// GET all animals
exports.getAllAnimals = async (req, res) => {
  try {

    //find Animals from the DB
    const animals = await Animal.find({});

    //return response 
    return res.status(200).json({
      success:true,
      message:"Fetched all the animals",
      animals,
    })

  } catch (err) {
        //error handling
        console.error(err);
       return res.status(500).json({
          success:false,
          message: "Failed to get all the Animals" ,
        });
  }
};

// POST new animal
exports.addAnimal = async (req, res) => {
  

  try {

    // animal details from the user
    const { name, species, age } = req.body;

    // verification 
    if(!name || !species || !age){
    return res.status(401).json({
      success:false,
      message:"all the fields are required",
      
    })
  }

  //saving in the DB
  const animal = new Animal({
    name,
    species,
    age,
    created_At:Date.now(),
  });


    const newAnimal = await animal.save();

    //return response

    return res.status(200).json({
      success:true,
      message:"Fetched all the animals",
      newAnimal,
    })

  } catch (err) {
    //error handling
    console.error(err);
   return res.status(400).json({
      success:false,
      message: "Failed to add an animal",
    });
  }
};

// PUT update animal by ID
exports.updateAnimal = async (req, res) => {
  

  try {

    //taking id from the params and properties to be updated from the body
    const { id } = req.params;
    const { name, species, age } = req.body;

    //verification
    if(!id){
      return res.status(401).json({
        success:false,
        message:"Animal Id not present",
        
      })
    }

    //finding by the id and updating in DB
    const updatedAnimal = await Animal.findByIdAndUpdate(
      id,
      { name, species, age },
      { new: true }
    );

    //verification
    if (!updatedAnimal) {
      return res.status(404).json({ 
        success:false,
        message: "Animal not found" ,
      });
      
    }

    //return response

    return res.status(200).json({
      success:true,
      message:"Animal data updated",
    })

  } catch (err) {
    //error handling
    console.error(err);
   return res.status(400).json({
      success:false,
      message:"Updating Animal details failed",
      
    });
  }
};

// DELETE animal by ID
exports.deleteAnimal = async (req, res) => {
  //id to be deleted from params
  const { id } = req.params;

  try {
    const deletedAnimal = await Animal.findByIdAndDelete(id);
    //verification
    if (!deletedAnimal){
      return res.status(404).json({ 
        success:false,
        message: "Animal not found" 
      });
    }
       

   return res.status(200).json({ 
      success:true,
      message: "Animal deleted" 
    });
  } catch (err) {
    console.error(err);
   return res.status(500).json({
      success:false,
      message:"Failed to delete the Animal"
    });
  }
};
