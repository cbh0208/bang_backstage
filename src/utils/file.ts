// function testTime(fn:Function,num:number){
//     const start=(new Date).getTime()
//     while(num){
//         fn()
//         num--
//     }
//     const end=(new Date).getTime()
//     console.log(end-start);
    

// }
import * as fs from 'fs';
/**读取json文件 */
export function readJson(url:string){
    if (fs.existsSync(url)) //判断是否存在此文件
    {
        //读取文件内容，并转化为Json对象
        let userBugsJson = JSON.parse(fs.readFileSync(url, "utf8"));
        //获取Json里key为data的数据
        const data = userBugsJson['data'];
        return data;
    }
}
