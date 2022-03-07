//git add .
//git commit -m "message"
//git push origin main
const express = require('express'); //commonjs syntax instead of import expres from express
const dotenv = require('dotenv').config();
const colors = require('colors')
const PORT = process.env.PORT || 8000;
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const app = express();

//Connect to database
connectDB()

//Middleware
app.use(express.json()) //Send raw json
app.use(express.urlencoded({extended: false}))

app.get('/', (req,res) => {
    res.send(200);
})
//Routes
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on ${PORT}`));