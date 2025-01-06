import mongoose from "mongoose";


console.log(process.env.MONGODB_URI);


function connect(){
  mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to mongo DB");
  })
  .catch(err => {
    console.log(err);
  })
}

export default connect