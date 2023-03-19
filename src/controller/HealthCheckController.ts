/*Exportanto esse TIPOS do express */
import { Request, Response } from "express";

class HealthCheckController{
    public async check(req: Request, res: Response){
        return res.json('Hello Word!')
    }
}

export default new HealthCheckController()