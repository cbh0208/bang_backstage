import  Koa from 'koa'
/** cors 中间件 */
export default async function (ctx: Koa.BaseContext, next: () => Promise<any>) {
    ctx.set('Access-Control-Allow-Origin','*')
    await next()

    
}