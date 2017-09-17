/**
 * Created by Hu on 2017/9/10.
 */
const fs = require('fs');
const url = require('url');
const http = require('http');
const server = http.createServer((req, res) => {
    let str = 'http://' + req.headers.host + req.url;
    let url_obj = url.parse(str);
    console.log(url_obj);

    switch (url_obj.pathname){
        case '/' :
            let content = fs.readFileSync('index.html');
            res.writeHead(200, {
                'Content-Type' : 'text/html;charset=utf-8',
            });
            res.write(content);
            res.end();
            break;
        default :
            let file = __dirname + url_obj.pathname;
            if(fs.existsSync(file)){
                let data = fs.readFileSync(file);
                res.write(data);
            }
            res.end();
            break;
    }
});
server.listen(3000, () => {
    console.log('server run...');
});