// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Product = require('./models/ProductModel')
const User = require('./models/UserModel')
const productRoute = require('./routes/ProductRoute')
const userRoute = require('./routes/UserRoute');
const shopRoute = require('./routes/ShopRoutes');


const cors = require('cors');



// Initialize Express app
const app = express();

app.use(cors());

app.use(express.json())

//allow url encoded for from input
app.use(express.urlencoded({extended:false}))


app.use('/api/product', productRoute)
app.use('/api/user', userRoute)
app.use('/api/shop',shopRoute)

mongoose.set("strictQuery",false)

// Connect to MongoDB
mongoose.connect('mongodb+srv://Collo:Collo77@cluster0.bo6bwv7.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

//   //connect to mongo database
// const Connect = () =>{
//     try {
//         const conn = mongoose.connect('mongodb+srv://Collo:Collo77@cluster0.bo6bwv7.mongodb.net/test?retryWrites=true&w=majority');
//         if(conn){
//             console.log("Connection to MongoDB is Successful");
            
//         }
//     } catch (error) {
//         console.log(error)
        
//     }
// }
// Connect()

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/api/',(req,res)=>{
  res.send('Opasso server initiated')
})









// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
