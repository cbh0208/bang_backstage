import Router from 'koa-router'
import {md5} from '../../utils/crypto'
import {getUser,addUser} from '../../service/User'
const router = new Router({prefix:'/user'});

type user={
    username:string,
    password:string
}

/** 登录 */
router.post('/login',async (ctx,next)=>{
    const data:user=ctx.request.body
    const user=await getUser(data.username)
    if(user){
        if(md5(data.password)===user.password){
            ctx.body=``
        }
        else {
            ctx.body=``
        }
    }
    else {
        ctx.body=``
    }
    
    
    

    
    
})
/** 注册 */
router.post('/signup', async (ctx,next)=>{
    const data=ctx.request.body


    ctx.body=``
})

export default router;
