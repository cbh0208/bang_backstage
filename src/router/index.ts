import Router from 'koa-router'
import UserRouter,{authentication} from './user'

const router = new Router();

router.use(UserRouter.routes())

// router.post('/test/cbh',async (ctx,next)=>{
//   let user=await authentication(ctx.get('AUTHORIZATION'));
//   if(user!==null){
//     ctx.body={
//       'message':'cbh',
//       'user':user.username,
//       '1':user.password
//     }
//   }
//   else{
//     ctx.body={
//       'hh':'hh'
//     }
//   }
// });
export default router;