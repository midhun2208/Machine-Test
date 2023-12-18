const userModel = require('../Models/userModel')

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email, password })
        if (!user) {
            res.status(400).send("USer not Found")
        }
        else{
            res.status(200).json(user)
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}

const registerController = async (req, res) => {
    try {
        
        const newUser = new userModel(req.body)
        await newUser.save()
        res.status(200).json(newUser)
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        }
        )
    }
}

const allUseres = async(req,res)=>{
  try {
    const users = await userModel.find()
    return res.status(200).json(users)
  } catch (error) {
    console.log(error)
    res.status(400).send({message:"Request Failed"})
  }
  
}



module.exports = { loginController, registerController, allUseres }