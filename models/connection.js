const mongoose = require('mongoose');

const connectionString = "mongodb+srv://marinebianchi:adminb@cluster0.5oe6n26.mongodb.net/locapic"

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
