/**
 * Created by Hu on 2017/9/8.
 */
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
// });

const server = http.createServer();
const person = {
    name : 'hfj',
    age : '19',
};
const url = require('url');
const querystring = require('querystring');

server.on('request', (req, res) => {
    // res.writeHead(200, {
    //     'Content-type' : 'application/json;charset=utf-8'
    // });
    // res.write('<h1>哈哈哈</h1>');
    // res.write('<h2>helloworld');
    console.log(req.url);
    console.log(querystring.parse(url.parse(req.url).query));
    res.write(JSON.stringify(person));
    res.end();
})
server.listen(port, hostname, () => {
    console.log('Server runing');
});