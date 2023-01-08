import Router from 'koa-router';
import {MD5} from '../../utils/crypto';
import {JWTDecode, JWTEncode} from '../../utils/jwt';
import {getUser,addUser} from '../../service/User';
import {key} from '../../config';
const router = new Router({prefix:'/user'});

type user={
    username:string,
    password:string
};

/** 
 * 登录
 * /user/login
 */
router.post('/login',async (ctx,next)=>{
    const data:user=ctx.request.body;
    const user=await getUser(data.username);
    console.log(user);
    if(user){
        if(MD5(data.password)===user.password){
            let token=JWTEncode(JSON.stringify({"username":user.username}),key)
            ctx.body={
                "message":"登录成功",
                "token":token,
            };
        }
        else {
            ctx.body={
                "message":"用户名或密码错误2"
            };
        }
    }
    else {
        ctx.body={
            "message":"用户名或密码错误1"
        };
    }
    
    
    

    
    
})
/** 
 * 注册 
 * /user/signup
 * */
router.post('/signup', async (ctx,next)=>{
    const data:user=ctx.request.body;
    const user=await addUser(data.username,MD5(data.password));
    if(user){
        ctx.body={
            "message":"注册成功"
        };
    }
    else{
        ctx.body={
            "message":"注册失败"
        };
    }
})

export default router;

export const authentication=async(token:string):Promise<user|null>=>{
    let payload=JWTDecode(token,key);
    if(payload!==''){
        let username:string=JSON.parse(JWTDecode(token,key))['username'];
        const user=await getUser(username);
        return user;
    }
    return null;
}
