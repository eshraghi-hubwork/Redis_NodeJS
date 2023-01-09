var redis = require("redis-node");
const host = "";
const port = 6379;
var client = redis.createClient(port, host);

client.set("hello", "world", function (err, status) {
  if (err) throw err;
  console.log(status); // true
});

client.hmset(
  "hash91293912939",
  { t: "rex", steg: "asaurus" },
  function (err, status) {
    if (err) throw err;
    console.log(status); // true
  }
);

client.expire("hash91293912939", 10, function (err, didSetExpiry) {
  console.log(!!didSetExpiry);
});

client.hgetall("hash91293912939", function (err, value) {
  if (err) throw err;

  console.log(value);
});

client.ttl("hash91293912939", function (err, ttl) {
  console.log(ttl);
});

client.flushdb(function (err, didSucceed) {
  console.log(didSucceed); // true
});

////? https://github.com/bnoguchi/redis-node
