/**
 * Created by Hu on 2017/9/12.
 */
const express = require('express');
const path = require('path');
const func = require('./func');

const app = express();

app.get('/', (req, res) => {
    res.send('<h2><a href="/reg">注册</a></h2>');
});

app.get('/reg', (req, res) => {
    res.sendFile(path.join(__dirname, 'reg.html'));
});

// console.log(func.inArray([1,2,3], 1));


app.post('/reg', (req, res) => {
    let username = req.query.username;
    console.log(req.);
    let users = ['admin', 'root', 'test'];
    if(func.inArray(users, username)){
        res.send("名字一杯占用");
    }else{
        res.send('恭喜');
    }
})


app.listen(3000);