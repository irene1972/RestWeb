import express from 'express';
import path from 'path';

export class Server{

    private app=express();

    async start(){

        //Public folders
        this.app.use(express.static('public'));

        this.app.get('/{*splat}',async(req,res)=>{

            //console.log(req.url);
            //res.send('Hola mundo');
            const indexPath=path.join(__dirname + '../../../public/index.html');
            res.sendFile(indexPath);
            return;

        });

        this.app.listen(3000,()=>{
            console.log('server running on port 3000...');
        });

    }

}