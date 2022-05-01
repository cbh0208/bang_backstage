import {User} from '../model'

/**添加用户 */
export async function addUser(username:string,password:string) {
    await User.create({
        username:username,
        password:password
    }).then((res)=>{
        console.log(res);
        
    }).catch((err)=>{
        console.log(err);
        
    })
}

/**查找密码 */
export async function getPassword(username:string) {
    await User.findAll({
        where:{
            username:username
        }
    }).then((res)=>{
        console.log(res);
        
    }).catch((err)=>{
        console.log(err);
        
    })
}