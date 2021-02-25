redis 優先度付きソートのサンプル

- [zadd](http://redis.shibu.jp/commandreference/sortedsets.html#command-ZADD) 
- [zrem](http://redis.shibu.jp/commandreference/sortedsets.html#command-ZREM) 
- [zrange](http://redis.shibu.jp/commandreference/sortedsets.html#command-ZRANGE)

```
127.0.0.1:6379> zadd comment 4 'JOIN' // コメントを優先度付きで追加
(integer) 1
127.0.0.1:6379> zadd comment 3 'PRESET' // コメントを優先度付きで追加
(integer) 1
127.0.0.1:6379> zadd comment 2 'FOLLOW' // コメントを優先度付きで追加
(integer) 1
127.0.0.1:6379> zadd comment 1 'NORMAL' // コメントを優先度付きで追加
(integer) 1
127.0.0.1:6379> zrange comment 0 0 // 優先度MAXのコメントを取得
1) "NORMAL"
127.0.0.1:6379> zadd comment 1 'NORMAL2' // コメントを優先度付きで追加
(integer) 1
127.0.0.1:6379> zrange comment 0 0 // 優先度MAXのコメントを取得
1) "NORMAL" // 先に追加した NORMAL が優先される
127.0.0.1:6379> zrem comment 1 'NORMAL' // コメントを削除
(integer) 1
127.0.0.1:6379> zrange comment 0 0 // 
1) "NORMAL2" // 後に追加した NORMAL2 が優先される

```