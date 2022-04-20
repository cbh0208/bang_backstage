import  Koa from 'koa'
import {formatTime} from '../../utils/time';

/** log 中间件*/
export default async function (ctx: Koa.BaseContext, next: () => Promise<any>) {
    const start=new Date()
    await next();
    const end=new Date()
    const duration=end.getTime()-start.getTime()
    console.log(`[${formatTime(end)}] "${ctx.method} ${ctx.url}" ${ctx.status} ${duration}`);
}