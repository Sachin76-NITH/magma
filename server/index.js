const express=require("express");
const bodyParser=require("body-parser")
const mongoose =require("mongoose")
const cors=require("cors")
const dotenv=require("dotenv");
const cookieParser=require("cookie-parser")
const authRoutes = require("./routes/AuthRoutes.js")
const bookRoutes=require("./routes/bookroutes.js")
const viewbookRoutes = require('./routes/bookroutes.js');
dotenv.config();

const port=process.env.port ||3002 ;

mongoose.connect(process.env.CONNECTION_URL,{useUnifiedTopology:true})
.then(()=>app.listen(port,()=> console.log(`server is running on port :${port}`)))
.catch((error)=>console.log(error.message));


const app=express();
// app.use(cors({
//     origin:["http://localhost:3000"],
//     method:["GET","POST"],
//     credentials:true,
// }));

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.json())
app.use(cookieParser())

app.use("/",authRoutes)
app.use("/",bookRoutes)






