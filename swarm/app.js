const Koa = require('koa')
const bluebird = require('bluebird')
const redis = require('redis')
bluebird.promisifyAll(redis.RedisClient.prototype)
bluebird.promisifyAll(redis.Multi.prototype)

const app = new Koa()

let host = 'redis'
let port = 6379

let client = redis.createClient(port, host)

app.use(async (ctx) => {
  if (ctx.path === '/incr') {
    let num = await client.getAsync('num')
    num++
    client.set('num', num, redis.print)
    // await longTimeTask()
    console.log('结束耗时任务')

    return (ctx.body = `num is ${num}`)
  }

  ctx.body = 'Hello world !!'
})

function longTimeTask() {
  console.log('开始耗时任务')
  return new Promise((resolve) => {
    setTimeout(() => resolve(1), 3000)
  })
}

app.listen(8080)
