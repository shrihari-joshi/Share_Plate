const express = require('express');
const app = express();
const credentials = require('./middleware/credentials.js');
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3500;

// Corrected MongoDB connection URL
const CONNECTION_URL = "mongodb+srv://mahmayur06:Mayur123@cluster0.pxcsm3r.mongodb.net/food?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB successfully');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

app.use(credentials);
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', express.static(path.join(__dirname, '/public')));

app.use('/', require('./routers/restaurants.js'))
app.use('/', require('./routers/foodAvailability.js'));
