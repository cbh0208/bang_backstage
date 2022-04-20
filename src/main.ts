import  Koa from 'koa'
import Router from './routers' 
import log from './middleWares/log';
import cors from './middleWares/cors'

const app = new Koa();

app.use(log);
app.use(cors)

app.use(Router.routes())
app.use(Router.allowedMethods())


app.listen(3000,()=>{
    console.log(`Server is running !!`)
});

