const Koa = require('koa')
const bluebird = require('bluebird')
const redis = require('redis')
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const app = new Koa()

let host = 'redis'
let port = 6379

let client = redis.createClient(port, host)


app.use(async ctx => {
    if (ctx.path === '/incr') {
        let num = await client.getAsync('num')
        num++
        client.set('num', num, redis.print)
        return ctx.body = `num is ${num}`
    }

    ctx.body = 'Hello world !!'
})

app.listen(8080)