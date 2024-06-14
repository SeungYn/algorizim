const cluster = require('cluster');
const http = require('http');
const numCpus = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(numCpus);
  for (let i = 0; i < numCpus; i++) {
    cluster.fork();
  }
} else {
  http
    .createServer((req, res) => {
      console.log('응답');
      return res.end('f');
    })
    .listen(8999, () => {
      console.log('서버 실행');
    });
  console.log('워커 실행');
}
