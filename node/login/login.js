/**
 * Created by Hu on 2017/9/10.
 */
"use strict";
const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    let str = 'http://' + req.headers.host + req.url;
    let url_obj = url.parse(str);
    console.log(str);
    switch (url_obj.pathname) {
        case '/login' :
            fs.readFile("login.html", 'utf-8', (err, data) => {
                if(err) throw err;
                res.end(data);
            });
            break;
        case "/signin":
            let content = '';
            req.on('data', (chunk) => {
                content += chunk;
            })
            req.on('end', () => {
                console.log(content);
            })
            res.end();
            break;
        default :
            res.end();
    }
})

server.listen(3000, () => {
    console.log('server start ....');
})