import Router from 'koa-router'
const router = new Router({prefix:'/user'});

router.post('/login',(ctx,next)=>{
    console.log(ctx.params);
    ctx.is
    let data=ctx.request.body
    console.log(data['12']);
    ctx.body=`8985`
    
})

export default router;
