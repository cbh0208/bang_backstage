import Router from 'koa-router'
import {getPassword,addUser} from '../../service/User'
const router = new Router({prefix:'/user'});


/** 登录 */
router.post('/login',async (ctx,next)=>{
    let data=ctx.request.body
    getPassword(data['username']).then((res)=>{
        console.log(res);
        
    }).catch((err)=>{

    })
    ctx.body=`8985`
    
})
/** 注册 */
router.post('/signup', async (ctx,next)=>{
    let data=ctx.request.body
    addUser(data['username'],data['password']).then((res)=>{
        console.log(res);
        
    }).catch((err)=>{
        
    })
    ctx.body=``
})

export default router;
