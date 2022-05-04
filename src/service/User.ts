import {User} from '../model'

/**添加用户 */
export async function addUser(username:string,password:string) {
    const user=await User.create({
        username:username,
        password:password
    })
    user.username
    return user

}

/**查找密码 */
export async function getUser(username:string) {
    
    const user=await User.findAll({
        where:{
            username:username

        }
    })
    console.log(typeof user);
    
    return user[0]
    
}