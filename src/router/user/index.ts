import Router from 'koa-router'
const router = new Router({prefix:'/user'});

/** 登录 */
router.post('/login',async (ctx,next)=>{
    let data=ctx.request.body
    console.log(data);
    ctx.body=`8985`
    
})
/** 注册 */
router.post('/signup', async (ctx,next)=>{
    let data=ctx.request.body
    ctx.body=``
})

export default router;
