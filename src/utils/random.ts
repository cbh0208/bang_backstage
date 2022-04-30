/**6位随机验证码(数字) */
export const randomNum=()=>{
    return ('000000'+Math.floor(Math.random()*999999)).slice(-6);
}