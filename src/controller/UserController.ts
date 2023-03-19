/*Exportanto esse TIPOS do express */
import { Request, Response } from "express";

class UserController{
    public async list(req: Request, res: Response){
        return res.json('Renan dos Santos Dias!')
    }
}

export default new UserController()