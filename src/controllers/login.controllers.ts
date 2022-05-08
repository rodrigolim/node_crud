import {Request,Response} from "express"
import { compare } from "bcryptjs"
import { User } from "../entities/User"
import jwt  from "jsonwebtoken"
import 'dotenv/config'

export const authenticator = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;         
           
        const user = await User.findOneBy({email: email})
    
        if (!user) return res.status(404).json({message: 'User or password incorrect'})    

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) return res.status(404).json({message: 'User or password incorrect'})

        const token = jwt.sign({ email: user.email }, 
            process.env.SECRET, { expiresIn: 60 * 30 } //sessão de 30min
        );
       
        return res.status(200).json({'Authorization': token}) 
    
       } catch (error) {
            if (error instanceof Error){
                return res.status(500).json({message: error.message}) 
            }        
       }

}