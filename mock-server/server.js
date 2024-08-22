const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection string with database name
const mongoURI = 'mongodb://localhost:27017/mockData';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use CORS middleware
const corsOptions = {
  origin: ['http://localhost:5173', 'http://localhost:5174']
};

app.use(cors(corsOptions));
app.use(express.json());

// Import and use profile routes
const profileRoutes = require('./routes/profiles');
app.use('/profiles', profileRoutes);

app.get('/', (req, res) => {
  res.send('Mock server is running');
});

app.listen(port, () => {
  console.log(`Mock server is listening on port ${port}`);
});
