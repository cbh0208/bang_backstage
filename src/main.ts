import  Koa from 'koa'
import koaBody from 'koa-body';
import  Router from './routers/index' 

const app = new Koa();

app.use(Router.routes())
app.use(Router.allowedMethods())


app.listen(3000,()=>{
    console.log('Server is running !! ')
});

