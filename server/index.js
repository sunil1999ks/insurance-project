const express = require('express')
const cors = require('cors'); 
const dotenv = require('dotenv')
const userRoutes=  require("./routes/userRoutes.js")
const policyRoutes=  require("./routes/policyRoutes.js")
const claimRoutes=  require("./routes/claimRoutes.js")
const paymentRoutes = require('./routes/paymentRoutes');
const connectDB = require("./config/databse")

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

connectDB()



const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true,
  };
  
  app.use(cors(corsOptions));



app.use (express.json())
app.use('/api/users',userRoutes)
app.use('/api/policies',policyRoutes)
app.use('/api/claims',claimRoutes)
app.use('/api/payments', paymentRoutes);





app.listen(PORT,()=>{
    console.log(`Running on http://localhost:${PORT}`)
})