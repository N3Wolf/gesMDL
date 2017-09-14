const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Conecta o mongoose.
mongoose.Promisse = global.Promisse;
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});

// Tipo do App
const app = express();

// Declaração de rotas
const users = require('./routes/users');
const federacoes = require('./routes/federacoes');
const clubesdelaco = require('./routes/clubesdelaco');
const lacadores = require('./routes/lacadores');

// Port number
const port = 3000;
const port = process.env.PORT || 8080;

// CORS middleware
app.use(cors());

// Set static Folder
app.use(express.static(path.join(__dirname, 'public')));

// bodyParser middleware
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);


app.use('/user', users);
app.use('/federacao', federacoes);
app.use('/clubedelaco', clubesdelaco);
app.use('/lacador', lacadores);


// Index route
app.get('/', (req,res) => {
  res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});
