import { Server } from "./presentation/server";

(async()=>{
    main();
})();

function main(){
    //console.log('main');
    const server=new Server();
    server.start();
}