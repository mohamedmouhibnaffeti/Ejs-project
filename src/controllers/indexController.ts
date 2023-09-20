import { Request,Response } from "express";

class IndexController{
    public static Index = (req: Request,res:Response,next : any)=>{

    res.render('home')
    }
}

export default IndexController;