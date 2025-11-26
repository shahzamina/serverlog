const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const path = require('path'); 
dotenv.config({path:'./.env'})

const app=express()
app.use(cors({
  origin: '*', // ya 'https://your-hostinger-domain.com'
  methods: ['GET','POST','PUT','DELETE'],
}));
//app.use(cors())
app.use(express.json())

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const connectDb=require('./db.cjs')
connectDb()
console.log('db connected')
const PORT=process.env.PORT ||5000
const Route=require('./routes/userroute.cjs')
app.use('/',Route)
const adminRoutes=require('./routes/admroute.cjs')

app.use("/api", adminRoutes);


// app.use(express.static(path.join(__dirname, '../client/dist')));

// app.get(/^\/.*$/, (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
// });



app.listen(PORT, () =>{
        console.log(`server is running on port ${PORT}`)
})

