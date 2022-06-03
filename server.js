const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const app = express();

// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
// MONGO DB

const DB = "mongodb://localhost:27017/School"

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("connection successfully");
}).catch((err) => console.log("Sorry no connection"))

const User = require('./models/User');
const credit = require('./models/Credit');


// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
// NODE JS

app.listen(3000, function () {
  console.log('listening on 3000')
})
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())














app.post('/user', (req, res) => {
  console.log(req.body);
  const user = new User({
    name: req.body.name
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
});















app.post('/userCredit', (req, res) => {
  console.log(req.body);
  const user = new credit({
    amount: req.body.amount,
    profiletype: req.body.profiletype,
    customerId: req.body.customerId,
    date: req.body.date,
    // credit : req.body.credit,
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
  credit.find({ customerId: req.params.userId })
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
});





