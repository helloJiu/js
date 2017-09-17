/**
 * Created by Hu on 2017/9/12.
 */
const mongo = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/blog';

mongo.connect(url, (err, db) => {
   if(err) throw err;
    // console.log(db);
    //获取表
    const message = db.collection('user');
    message.insert({"name" : "sanmao", "age" : 19}, (err, res) => {
        if(err) throw err;
        console.log(res);
    })

});
