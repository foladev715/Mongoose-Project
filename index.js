// Installing and setting up Mongoose:

const { Db } = require("mongodb");
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/peopleApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO ERROR!!!!");
    console.log(err);
  });

// Create a person with this prototype:

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFoods: Array,
});

const Person = mongoose.model("Person", personSchema);

// Create and Save a Record of a Model:

const chidinma = new Person({
  name: "Chidinma",
  age: 24,
  favoriteFoods: ["jollof-rice", "nkwobi", "ofe-nsala"],
});

// chidinma.save()

// Create Many Records with model.create()

Person.insertMany([
  {
    name: "Genevieve",
    age: 30,
    favoriteFoods: ["fried-rice", "nkwobi", "amala"],
  },
  {
    name: "Daniel",
    age: 27,
    favoriteFoods: ["ofada-rice", "eba", "ofe-nsala"],
  },
  {
    name: "Desmond",
    age: 33,
    favoriteFoods: ["jollof-rice", "nkwobi", "akara"],
  },
  {
    name: "Mariam",
    age: 35,
    favoriteFoods: ["fried-rice", "moin-moin", "ofe-nsala"],
  },
  {
    name: "Charles",
    age: 22,
    favoriteFoods: ["ofada-rice", "akara", "amala"],
  },
]).then((data) => {
  console.log("IT WORKED");
  console.log(data);
});

// Use model.find() to Search Your Database:
// Person.find({}).then(data=>console.log(data))

// Use model.findOne() to Return a Single Matching Document from Your Database:
// Person.findOne({favoriteFoods: "ofada-rice"}).then(p=>console.log(p))

// Use model.findById() to Search Your Database By _id:
// Person.findById("6286dccf6cfe00c0945e62d5").then(p=>console.log(p))

// Perform New Updates on a Document Using model.findOneAndUpdate():
// Person.updateOne({name: "Genevieve"}, {$push: {favoriteFoods: "hamburger"}}).then(res=>console.log(res))

// Delete One Document Using model.findByIdAndRemove:
// Person.findByIdAndDelete("6286dccf6cfe00c0945e62d3").then(p=>console.log(p))

// MongoDB and Mongoose - Delete Many Documents with model.remove():
// Person.deleteMany({age: {$gte:33}}).then(msg => console.log(msg))

// Chain Search Query Helpers to Narrow Search Results:
// Person.find({favoriteFoods: "ofada-rice"}).sort({name:1}).limit(2).select({age:false}).exec().then(p=>{console.log(p)}).catch(err=>{console.error(err)})
