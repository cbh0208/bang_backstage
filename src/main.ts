import Koa from 'koa'
import Router from './router' 
import koaBody from 'koa-body';
import LogMiddleware from './middleware/LogMiddleware';
import CORSMiddleware from './middleware/CORSMiddleware'

const app = new Koa();

app.use(LogMiddleware);
app.use(CORSMiddleware)
app.use(koaBody())

app.use(Router.routes()).use(Router.allowedMethods())

app.listen(5000,()=>{
    console.log(`Server is running !!`)
});

