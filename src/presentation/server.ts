import express, { Router } from 'express';
import path from 'path';

interface Options{
    port:number,
    routes:Router;
    public_path?:string
}

export class Server{

    private app=express();
    private readonly port:number;
    private readonly publicPath:string;
    private readonly routes:Router;

    constructor(options:Options){
        const {port,routes,public_path='public'}=options;
        this.port=port;
        this.publicPath=public_path;
        this.routes=routes;
    }

    async start(){

        //Public folders
        this.app.use(express.static(this.publicPath));

        //Routes
        this.app.use(this.routes);
        /*
        this.app.get('/api/todos', (req, res) => {
            return res.json([
                {id:1, text:'Buy milk', createdAt:new Date()},
                {id:2, text:'Buy butter', createdAt:null},
                {id:3, text:'Buy beef', createdAt:new Date()}
            ])
        })
        */

        //SPA (Todas las rutas no definidas pasan por aquí)
        this.app.get('/{*splat}',async(req,res)=>{

            //console.log(req.url);
            //res.send('Hola mundo');
            const indexPath=path.join(__dirname + `../../../${this.publicPath}/index.html`);
            res.sendFile(indexPath);
            return;

        });

        this.app.listen(this.port,()=>{
            console.log('server running on port 3000...');
        });

    }

}