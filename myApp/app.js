//Start
{
  var express = require('express');
  const { fstat } = require('fs');
  var path = require('path');
  var fs = require('fs');
  //const { resolve6 } = require('dns/promises');
  var app = express();
  
  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');
  
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, 'public')));
  
  app.get('/', function (req, res) {
    res.render('login');
  });
  }
  
  //json file
  
  
  //modified part
  {
  var username = "";
  var password = "";
  var userlist = [];
  }
  
  
  //mongo
  {
  
  // var MongoClient = require('mongodb').MongoClient;
  // MongoClient.connect("mongodb://127.0.0.1:27017", function (err, client) {
  //   if (err) throw (err);
  //   var db = client.db('MyDB');
  //   db.collection('FirstCollection').insertOne({username: 'zoka', password: 'zmoha',userlist:[]});
  
  //   db.collection('FirstCollection').find().toArray(function (err, results) {
  //     //console.log(results)
  //   });
  
  // });
  }
  
  //session
  {
  const session = require('express-session');
  app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
  }));
  }
  //.get
  {
  app.get('/hiking', function (req, res) {
    if(req.session.username==null)     //paste in all get fns.
    res.redirect('login');
    else
    res.render('hiking.ejs');
  });
  
  app.get('/cities', function (req, res) {
    if(req.session.username==null)     //paste in all get fns.
    res.redirect('login');
    else
    res.render('cities.ejs');
  });
  
  app.get('/islands', function (req, res) {
    if(req.session.username==null)     //paste in all get fns.
    res.redirect('login');
    else
    res.render('islands.ejs');
  });
  
  app.get('/wanttogo', function (req, res) {
    if(req.session.username==null)     //paste in all get fns.
    res.redirect('login');
    else
    res.render('wanttogo.ejs');
  });
  
  
  
  app.get('/bali', function (req, res) {
    if(req.session.username==null)     //paste in all get fns.
    res.redirect('login');
    else
    res.render('bali.ejs');
  });
  
  app.get('/santorini', function (req, res) {
    if(req.session.username==null)     //paste in all get fns.
    res.redirect('login');
   else
    res.render('santorini.ejs');
  });
  
  
  app.get('/paris', function (req, res) {
    if(req.session.username==null)     //paste in all get fns.
    res.redirect('login');
    else
    res.render('paris.ejs');
  });
  
  app.get('/rome', function (req, res) {
    if(req.session.username==null)     //paste in all get fns.
    res.redirect('login');
    else
    res.render('rome.ejs');
  });
  
  app.get('/inca', function (req, res) {
    if(req.session.username==null)     //paste in all get fns.
    res.redirect('login');
    else
    res.render('inca.ejs');
  });
  
  app.get('/annapurna', function (req, res) {
    if(req.session.username==null)     //paste in all get fns.
    res.redirect('login');
    else
    res.render('annapurna.ejs');
  });
  
  app.get('/registration', function (req, res) {
    if(req.session.username==null)     //paste in all get fns.
    res.redirect('login');
    else
    res.render('registration.ejs');
  });
  
  app.get('/login', function (req, res) {
    if(req.session.username==null)     //paste in all get fns.
    res.redirect('login');
    else
    res.render('login.ejs');
  });
  
  app.get('/home', function (req, res) {
    if(req.session.username==null)     //paste in all get fns.
    res.redirect('login');
    else
    res.render('home.ejs');
  });
  }
  
  //.post
  {
  
  app.post('/hiking', function (req, res) {
   
    res.render('hiking.ejs');
  });
  
  app.post('/cities', function (req, res) {
    res.render('cities.ejs');
  });
  
  app.post('/islands', function (req, res) {
    res.render('islands.ejs');
  });
  
  app.post('/wanttogo', function (req, res) {
    res.render('wanttogo.ejs');
  //view list
  db.collection('FirstCollection').insertOne({username:user,password:password,userlist:'paris'});
  
  user.userlist.get();
  
  });
  
  app.post('/bali', (req, res) => {
    // var MongoClient = require('mongodb').MongoClient;
    // MongoClient.connect("mongodb://127.0.0.1:27017", (err, client) => {
    //   if(err) throw(err);
    //   var db = client.db('MyDB');
    //   db.collection('FirstCollection').findOne({ username: req.session.username }, (err, user) => {
    //     if (user.userlist.includes('bali')) {
    //       res.status(500).send({ error: 'Already in list' });
    //     } else {
    //       db.collection('FirstCollection').updateOne({ username: req.session.username }, {$push: {userlist: 'bali'}}, (err, result) => {
    //         res.status(200).send({ message: 'Added successfully'});
    //       });
    //     }
    //   });
    // });
  });
  
  app.post('/santorini', (req, res) => {
    // var MongoClient = require('mongodb').MongoClient;
    // MongoClient.connect("mongodb://127.0.0.1:27017", (err, client) => {
    //   if(err) throw(err);
    //   var db = client.db('MyDB');
    //   db.collection('FirstCollection').findOne({ username: req.session.username }, (err, user) => {
    //     if (user.userlist.includes('santorini')) {
    //       res.status(500).send({ error: 'Already in list' });
    //     } else {
    //       db.collection('FirstCollection').updateOne({ username: req.session.username }, {$push: {userlist: 'santorini'}}, (err, result) => {
    //         res.status(200).send({ message: 'Added successfully'});
    //       });
    //     }
    //   });
    // });
  });
  
  
  app.post('/paris', (req, res) => {
    // var MongoClient = require('mongodb').MongoClient;
    // MongoClient.connect("mongodb://127.0.0.1:27017", (err, client) => {
    //   if(err) throw(err);
    //   var db = client.db('MyDB');
    //   db.collection('FirstCollection').findOne({ username: req.session.username }, (err, user) => {
    //     if (user.userlist.includes('paris')) {
    //       res.status(500).send({ error: 'Already in list' });
    //     } else {
    //       db.collection('FirstCollection').updateOne({ username: req.session.username }, {$push: {userlist: 'paris'}}, (err, result) => {
    //         res.status(200).send({ message: 'Added successfully'});
    //       });
    //     }
    //   });
    // });
  });
  
  
  app.post('/rome', (req, res) => {
    // var MongoClient = require('mongodb').MongoClient;
    // MongoClient.connect("mongodb://127.0.0.1:27017", (err, client) => {
    //   if(err) throw(err);
    //   var db = client.db('MyDB');
    //   db.collection('FirstCollection').findOne({ username: req.session.username }, (err, user) => {
    //     if (user.userlist.includes('rome')) {
    //       res.status(500).send({ error: 'Already in list' });
    //     } else {
    //       db.collection('FirstCollection').updateOne({ username: req.session.username }, {$push: {userlist: 'rome'}}, (err, result) => {
    //         res.status(200).send({ message: 'Added successfully'});
    //       });
    //     }
    //   });
    // });
  });
  
  app.post('/inca', (req, res) => {
    // var MongoClient = require('mongodb').MongoClient;
    // MongoClient.connect("mongodb://127.0.0.1:27017", (err, client) => {
    //   if(err) throw(err);
    //   var db = client.db('MyDB');
    //   db.collection('FirstCollection').findOne({ username: req.session.username }, (err, user) => {
    //     if (user.userlist.includes('inca')) {
    //       res.status(500).send({ error: 'Already in list' });
    //     } else {
    //       db.collection('FirstCollection').updateOne({ username: req.session.username }, {$push: {userlist: 'inca'}}, (err, result) => {
    //         res.status(200).send({ message: 'Added successfully'});
    //       });
    //     }
    //   });
    // });
  });
  app.post('/annapurna', (req, res) => {
    // var MongoClient = require('mongodb').MongoClient;
    // MongoClient.connect("mongodb://127.0.0.1:27017", (err, client) => {
    //   if(err) throw(err);
    //   var db = client.db('MyDB');
    //   db.collection('FirstCollection').findOne({ username: req.session.username }, (err, user) => {
    //     if (user.userlist.includes('annapurna')) {
    //       res.status(500).send({ error: 'Already in list' });
    //     } else {
    //       db.collection('FirstCollection').updateOne({ username: req.session.username }, {$push: {userlist: 'annapurna'}}, (err, result) => {
    //         res.status(200).send({ message: 'Added successfully'});
    //       });
    //     }
    //   });
    // });
  });
  
  app.post('/home', function (req, res) {
    res.render('home.ejs');
  });
  }
  
  
  //Register
  {
  app.post("/register", (req, res) => {
  
    const { username, password } = req.body;
   
  //   var MongoClient = require('mongodb').MongoClient;
  //   MongoClient.connect("mongodb://127.0.0.1:27017", function(err, client){
  //   if(err) throw(err);
  //   var db = client.db('MyDB');
  
  // // Validate the form data
  // if (!username || !password) {
  //   return res.status(400).send({
  //     error: 'Username and password are required'
     });
  //}
  
  app.post("/search" , (req,res) => {
    // const text = req.body.Search;
    // const cities = ["bali","annapurna","inca","paris","rome","santorini"];
    // const results = []
    // const i = 0
    // for (const city of cities){
    //   if (city.includes(text)){
    //     results.push(city)
    //   }
    // }
    // res.render("searchresults",{results});
  
  });
  
  
  
  
  
  // Check if the username is already taken
  // db.collection('FirstCollection').findOne({ username }, (error, user) => {
  //   if (error) {
  //     return res.status(500).send({
  //       error: 'Error checking for existing user'
  //     });
  //   }
  //   if (user) {
  //     return res.status(400).send({
  //       error: 'Username is already taken'
  //     });
  //   }
  
  //   // Insert the new user into the database
  //   const data = {
  //     username,
  //     password,
  //     userlist
  //   };
  
  //   db.collection('FirstCollection').insertOne(data, (error) => {
  //     if (error) {
  //       return res.status(500).send({
  //         error: 'Error inserting the user into the database'
  //       }); 
  //     }
  //     // Redirect the user to the login page and display a message indicating that the registration was successful
  //     res.redirect('/login?message=Registration successful');
  //   });
  // });
  
  //    });
    
     
  // });
  // }
  
    
  // //Login
  // {
  app.post("/login", (req, res) => {
  
    const { username, password } = req.body;
   
  //   var MongoClient = require('mongodb').MongoClient;
  //   MongoClient.connect("mongodb://127.0.0.1:27017", function(err, client){
  //   if(err) throw(err);
  //   var db = client.db('MyDB');
  
  // // Validate the form data
  // if (!username || !password) {
  //   return res.status(400).send({
  //     error: 'Username and password are required'
  // redirect to login.
  //   });
  // }
  
  // // Check if the username is already taken
  // db.collection('FirstCollection').findOne({ username }, (error, user) => {
  //   if (error) {
  //     return res.status(500).send({
  //       error: 'Error checking for existing user'
  //     });
  //   }
  //   else if (user) {
  
  //     // Check if the password is correct
  //     if (user.password !== password) {
  //       res.status(400).send({
  //         error: 'Incorrect password'
  //       });
  //       return
  //     }
  
      if((username=="admin")&& (password=="admin")){
        
      
  
  //req.session.username = user.username;
  req.session.username = username;
  
      res.redirect('/home');
    }
    else{
      return res.status(400).send({
        error: 'user not found'
      });
    }
  
    
    
  });
  
   //  });
    
     
  //});
  }
  
  
  app.listen(3000);