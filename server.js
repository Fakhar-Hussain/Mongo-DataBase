const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const app = express();

// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                               // MONGO DB

const DB = "mongodb://localhost:27017/School"

mongoose.connect(DB , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then( () => {
  console.log("connection successfully");
}).catch( (err) => console.log("Sorry no connection"))

const User = require('./models/User');
const credit = require('./models/Credit');


// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                // NODE JS

app.listen(3000, function () {
  console.log('listening on 3000')
})
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// app.use(routes)
// app.use('/Credit', credit);
// app.post('/Credit', credit.post);






  
  app.post('/userName', (req, res) => {
    console.log(req.body);
    const user = new User({
      name : req.body.name,
      // email : req.body.email
    });
    user
      .save()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the Message.",
        });
      });
  })
  
  
  
  
  app.get('/user', findAll = (req, res) => {
    User.find()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving messages.",
        });
      });
  });
  
  app.get('/user/:userId', findOne = (req, res) => {
    User.findById(req.params.userId)
      .then((data) => {
        if (!data) {
          return res.status(404).send({
            message: "User not found with id " + req.params.userId,
          });
        }
        res.send(data);
      })
      .catch((err) => {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
            message: "User not found with id " + req.params.userId,
          });
        }
        return res.status(500).send({
          message: "Error retrieving User with id " + req.params.userId,
        });
      });
  });
  
  
  
  app.delete('/user/:userId', (req, res) => {
    User.findByIdAndRemove(req.params.userId)
      .then((data) => {
        if (!data) {
          return res.status(404).send({
            message: "User not found with id " + req.params.userId,
          });
        }
        res.send({ message: "User deleted successfully!" });
      })
      .catch((err) => {
        if (err.kind === "ObjectId" || err.name === "NotFound") {
          return res.status(404).send({
            message: "User not found with id " + req.params.userId,
          });
        }
        return res.status(500).send({
          message: "Could not delete User with id " + req.params.userId,
        });
      });
  } );
  // const UserAuth = () => {}



// const userCreditRoutes = require('./routes/userCreditRoutes');
// userCreditRoutes(app);
















app.post('/userCredit', (req, res) => {
          console.log(req.body);
          const user = new credit({
            credit : req.body.credit,
            // email : req.body.email
          });
          user
            .save()
            .then((data) => {
              res.send(data);
            })
            .catch((err) => {
              res.status(500).send({
                message: err.message || "Some error occurred while creating the Message.",
              });
            });
        })
        
        
        
        
        app.get('/userCredit', findAll = (req, res) => {
          credit.find()
            .then((data) => {
              res.send(data);
            })
            .catch((err) => {
              res.status(500).send({
                message:
                  err.message || "Some error occurred while retrieving messages.",
              });
            });
        });
        
        app.get('/userCredit/:userId', findOne = (req, res) => {
          credit.findById(req.params.userId)
            .then((data) => {
              if (!data) {
                return res.status(404).send({
                  message: "User not found with id " + req.params.userId,
                });
              }
              res.send(data);
            })
            .catch((err) => {
              if (err.kind === "ObjectId") {
                return res.status(404).send({
                  message: "User not found with id " + req.params.userId,
                });
              }
              return res.status(500).send({
                message: "Error retrieving User with id " + req.params.userId,
              });
            });
        });
        
        
        
        app.delete('/userCredit/:userId', (req, res) => {
          credit.findByIdAndRemove(req.params.userId)
            .then((data) => {
              if (!data) {
                return res.status(404).send({
                  message: "User not found with id " + req.params.userId,
                });
              }
              res.send({ message: "User deleted successfully!" });
            })
            .catch((err) => {
              if (err.kind === "ObjectId" || err.name === "NotFound") {
                return res.status(404).send({
                  message: "User not found with id " + req.params.userId,
                });
              }
              return res.status(500).send({
                message: "Could not delete User with id " + req.params.userId,
              });
            });
        } );





































// app.get('/', (req, res) => {
//     // res.sendFile(__dirname + '/index.html')
// })


// app.post('/signup', (req, res) => {
//   console.log(req.body);
//   const name = req.body.name;
//   const email = req.body.email;
//   try{
//       const user = new User(req.body).save();
//       res.send("Post Successfully")
//   }catch(err){
//       res.status(422).send(err.message)
//   }
// })



// app.post('/credit', (req, res) => {
//   console.log(req.body);
//   const credit = new Credit({
//     name : req.body.name,
//     // email : req.body.email
//   });
//   credit
//     .save()
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || "Some error occurred while creating the Message.",
//       });
//     });
// })






// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa


// app.get('/', function(req, res) {
//     res.send('Hello Fakhar Your World is waiting for You')
//   })
// app.post('/quotes', (req, res) => {
//     console.log('Hello Fakhar!')
// })



// app.get(endpoint, callback)

// app.get('/', function(req, res) {
//     res.send('Hello World')
//   })

// app.get('/quotes', function(req, res) {
//     res.send('Hello World')
//   })





// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa




// const mongoose = require("mongoose")
// const { mongoUrl } = require("./keys")

// mongoose.connect(mongoUrl, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

// mongoose.connection.on("connected", () => {
//     console.log("Fakhar is successfully connected to MongoDB")
// })
// mongoose.connection.on("error", (err) => {
//     console.log("Fakhar this is error", err)
// })

// app.use(bodyParser.json())

// app.post('/', (req, res) => {
//     console.log(req.body)
//     res.send("Hello Fakhar")
// })

// app.listen(3000, () => {
//     console.log("Server Running" + 3000)
// })



// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa


// const {MongoClient} = require("mongodb");
// // import { MongoClient } from 'mongodb'
// // Replace the uri string with your MongoDB deployment's connection string.
// const uri =
//   "mongodb+srv://Fakhar:042069454@cluster0.kc57w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     await client.connect();
//     const database = client.db('sample_mflix');
//     const movies = database.collection('movies');
//     // Query for a movie that has the title 'Back to the Future'
//     const query = { title: 'Back to the Future' };
//     const movie = await movies.findOne(query);
//     console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);




















