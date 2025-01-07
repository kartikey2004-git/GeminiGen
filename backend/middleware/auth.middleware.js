import jwt from "jsonwebtoken"

export const authUser = async(req,res,next) => {
  try {
    // Get token from cookies or Authorization header
    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1])

    if(!token){
      return res.status(401).send({error: "Unauthorized error"})
    }


    // Verify the token and directly assign the decoded payload
    const decoded = jwt.verify(token,process.env.JWT_SECRET , (err,decoded) => {
      if(err){
        return res.status(401).json({message: "Invalid Token"})
      }
    })

    req.user = decoded
    next()
  } catch (error) {
    console.log(error);
    res.status(401).send({error : 'Please authenticate'})
  }
}