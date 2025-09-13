import express from 'express'
const router = express.Router()
router.post('/registr', async(req, res)=>{
    const {email, username, password}  = req.body
    try {
        if(!email || ! username || !password){
            return res.status(400).json({success:false, message:"All the fields are mandatory"})
        }
        res.status(200).json({success:true, message:"Register user successfully"})
    } catch (error) {
        res.status(500).json({success:false, message:"Something went wrong"})
        
    }
})
router.post('/login', async(req, res)=>{
    const {email, password} = req.body
    try {
        if(!email || !password){
            return res.status({success:false, message:"All the fields are mandatory"})
        }
        res.status(200).json({success:true, message:"Logged in successfully"})
        
    } catch (error) {
        res.status(500).json({success:false, message:"Something went wrong"})
        
    }
})
export default router