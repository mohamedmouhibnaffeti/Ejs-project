import * as express from "express";
import IndexController from "../controllers/indexController";
export const register = (app:express.Application)=>{

app.get("/",IndexController.Index)
}