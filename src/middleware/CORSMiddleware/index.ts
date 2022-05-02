import { BaseContext } from "koa"

/** cors 中间件 */
export default async function (ctx: BaseContext, next: () => Promise<any>) {
    ctx.set('Access-Control-Allow-Origin','*')
    ctx.set('Access-Control-Allow-Headers','authorization,Content-Type')
    await next()

    
}