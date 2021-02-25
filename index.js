const Redis = require("ioredis");
const redis = new Redis({ host: 'localhost', port: 6379 })

const KEY = 'redis-sorted-order'
redis.zadd(KEY, 1, '1')
redis.zadd(KEY, 2, '2')
redis.zadd(KEY, 3, '3')
redis.zadd(KEY, 4, '4')
redis.zadd(KEY, 5, '5')
redis.zadd(KEY, 6, '6')
redis.zadd(KEY, 7, '7')

// 全件取得
// 'WITHSCORES' は score も表示するオプション
redis.zrange(KEY, 0, -1, 'WITHSCORES').then((res) => console.log(res))

// 上位1件だけ取得
redis.zrange(KEY, 0, 0).then((res) => console.log(res))

redis.zrem(KEY, 1, '1')
redis.zrem(KEY, 2, '2')
redis.zrem(KEY, 3, '3')
redis.zrem(KEY, 4, '4')
redis.zrem(KEY, 5, '5')
redis.zrem(KEY, 6, '6')
redis.zrem(KEY, 7, '7')

redis.zrange(KEY, 0, -1).then((res) => console.log(res))
