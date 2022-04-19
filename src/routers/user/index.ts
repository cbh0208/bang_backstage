import Router from 'koa-router'
const router = new Router();

// router.get('/:id',(ctx,next)=>{
//     console.log(78);

//     ctx.body=`<h1>哈哈 ${ctx.params.id} </h1>`

// })

router.post('/login',(ctx,next)=>{
    console.log(ctx.request);
    
})

export default router;
