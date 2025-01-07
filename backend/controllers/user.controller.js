import userModel from '../models/user.models.js';
import * as userServices from "../services/user.services.js";
import { validationResult } from "express-validator";

export const createUserController = async (req,res) => {
  // ye jo createUserController hai 
  // ye jo data aa rha hai , usko validate krna hoga with help of express validator

  const errors = validationResult(req)

  if(!errors.isEmpty()){
    return res
    .status(400)
    .json({errors: errors.array()})
    // Gets the validation errors as an array.
  }

  try {
    const user = await userServices.createUser(req.body)

    const token = await user.generateJWT()

    res
    .status(201)
    .json({user,token})

  } catch (error) {
    res
    .status(400).send(error.message)
  }
}

export const loginController = async (req,res) => {
  const errors = validationResult(req)

  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()})
  }

  try {
    const {email , password} = req.body

    const user = await userModel.findOne({email}).select('password')

    if(!user){
      return res.status(401).json({
        errors: "Invalid credentials "
      })
    }

    const isMatch = await user.isValidPassword(password)

    if(!isMatch){
      return res.status(401).json({
        errors: "Invalid credentials"
      })
    }

    const token = await user.generateJWT()
    res.status(200).json({user,token})

  } catch (err) {
    console.log(err);
    res.status(400).send(err.message)
  }
}

export const profileController = async(req,res) => {
  console.log(req.user)

  res.status(200).json({
    user: req.user
  })
}