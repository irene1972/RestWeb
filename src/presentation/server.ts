import express from 'express';
import path from 'path';

interface Options{
    port:number,
    public_path?:string
}

export class Server{

    private app=express();
    private readonly port:number;
    private readonly publicPath:string;

    constructor(options:Options){
        const {port,public_path='public'}=options;
        this.port=port;
        this.publicPath=public_path;
    }

    async start(){

        //Public folders
        this.app.use(express.static(this.publicPath));

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