const express = require('express');
const app = express();
//const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
const authJwt = require('./helpers/jwt');
//const errorHandler = require('./helpers/error-handler');

app.use(cors());
app.options('*', cors());
 
//middleware
app.use(express.json());
//app.use(morgan('tiny'));
app.use(authJwt());
//app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
//app.use(errorHandler);

//Routes
//const categoriesRoutes = require('./routes/categories');
//const productsRoutes = require('./routes/products');
const studentRoutes = require('./routes/student');
const teacherRoutes = require('./routes/teacher');
const usersRoutes = require('./routes/user');

const api = process.env.API_URL;

//app.use(`${api}/student`, studentRoutes);
app.use('/api/v1/student', studentRoutes);
//app.use(`${api}/teacher`, teacherRoutes);
app.use('/api/v1/teacher', teacherRoutes);
app.use('/api/v1/user', usersRoutes);

app.use('/api/v1',studentRoutes)

//Database
// mongoose
//     .connect(process.env.CONNECTION_STRING, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         dbName: process.env.DB_NAME
//     })
//     .then(() => {
//         console.log('we are using ' + process.env.DB_NAME);
//         console.log('Database Connection is ready...');
//     })
//     .catch((err) => {
//         console.log(err);
//     });
const CONNECTION_URL = 'mongodb+srv://rahul:1234567890@cluster0.zoahh.mongodb.net/student_portal?retryWrites=true&w=majority';
const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

 // mongoose.set('useFindAndModify', false);

//Server
// app.listen(PORT, () => {
//     console.log('server is running http://localhost:3000');
// });
