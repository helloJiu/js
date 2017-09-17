/**
 * Created by Hu on 2017/9/10.
 */
const http = require('http');
const fs = require('fs');
let url = 'http://image.so.com/zv?ch=beauty&t1=603&tt=1505056447646&src=relatedimg#ch=beauty&t1=603&tt=1505056447646&src=relatedimg&lightboxindex=5&groupid=4968be4fb2a668b1e928d2b00d1b98d0&itemindex=0&dataindex=4';
const cr = http.get(url, (res) => {
    let str = '';
    let i = 0;
    res.setEncoding('binary');
    res.on('data', (chunk) => {
        str += chunk;
        console.log(++i);
    })
    // console.log(str);
    res.on('end', ()=> {
        fs.writeFile('aaa/a.jpg', str, 'binary', (err) => {
            if(err) throw err;
            console.log('成功');
        })
    })
})