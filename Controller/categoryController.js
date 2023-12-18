const categoryModel = require('../Models/categoryModel')

const addCategory = async (req, res) => {
    try {
        
        const newCategory = new categoryModel(req.body)
        await newCategory.save()
        res.status(200).json(newCategory)
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        }
        )
    }
}

const getCategory = async (req,res) => {
    try {
         const category = await categoryModel.find()
        res.status(200).json(category) 
    } catch (error) {
        res.status(400).send({error})
    }
}

module.exports = { addCategory, getCategory }