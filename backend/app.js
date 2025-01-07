import express, { urlencoded } from "express"
import morgan from "morgan";
import connect from "./db/db.js";
import userRoutes from "./routes/user.routes.js"
import cookieParser from "cookie-parser";

connect()
const app = express();

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

// Returns middleware that only parses urlencoded bodies

// Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.

app.use('/users',userRoutes)


app.get('/',(req,res) => {
  res.send('Hello World')
})

export default app

