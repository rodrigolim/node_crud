import {Request,Response} from "express"
import { User } from "../entities/User"

export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password, active } = req.body;    
        const user = new User()
        user.name = name;
        user.email = email;
        user.password = password;
        user.active = active;
        
        await user.save()

        return res.status(201).json(user) 
    } catch (error) {
       if (error instanceof Error){
           return res.status(500).json({message: error.message}) 
       } 
    }
}

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find()  
        return res.json(users)
    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message: error.message}) 
        }     
    }    
}

export const getUserById = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneBy({id: parseInt(req.params.id)})
    
        if (!user) return res.status(404).json({message: 'User does not exists'})
        
        return res.status(200).json(user) 
    
    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message: error.message}) 
        }        
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password, active } = req.body;        
    
        const user = await User.findOneBy({id: parseInt(req.params.id)})
    
        if (!user) return res.status(404).json({message: 'User does not exists'})
    
        user.name = name;
        user.email = email;
        user.password = password;
        user.active = active;
    
        await User.update({id: parseInt(req.params.id)}, req.body)
    
        return res.status(200).json(user) 
    
       } catch (error) {
            if (error instanceof Error){
                return res.status(500).json({message: error.message}) 
            }        
       }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {        
        const result = await User.delete({id: parseInt(req.params.id)})

        if (result.affected === 0){
            return res.status(404).json({message: 'User does not exists'})  
        }

        return res.status(200).json({message: 'User deleted'}) 
    
    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message: error.message}) 
        }        
    }  
}