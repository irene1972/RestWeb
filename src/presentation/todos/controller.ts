import {Request,Response} from 'express';

export class TodosController{

    public getTodos=(req:Request, res:Response) => {
            res.json([
                {id:1, text:'Buy milk', createdAt:new Date()},
                {id:2, text:'Buy butter', createdAt:null},
                {id:3, text:'Buy beef', createdAt:new Date()}
            ])
        }

}