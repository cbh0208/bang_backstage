import {User} from '../model'

/**添加用户 */
export async function addUser(username:string,password:string) {
    const user=await User.create({
        username:username,
        password:password
    });
    return user

}

/**查找密码 */
export async function getUser(username:string) {
    
    const user=await User.findAll({
        where:{
            username:username
        }
    })
    return user[0]
    
}