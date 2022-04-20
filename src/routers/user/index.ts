import Router from 'koa-router'
const router = new Router({prefix:'/user'});

router.post('/login',(ctx,next)=>{
    console.log(ctx.request);
    ctx.body=`8985`
    
})

export default router;
