/**
 * Created by Hu on 2017/9/9.
 */
const fs = require('fs');
fs.writeFileSync('data.txt',  'who i am a');

// let data = fs.readFileSync('./data.txt', 'utf-8');
// console.log(data);
fs.readFile('./data.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});

fs.writeFile('./write.txt', 'lalalla', (err) => {
    if(err) throw err;
    console.log('写入成功');
})

fs.appendFile('./write.txt', 'woshi append', (err) => {
    if(err) throw err;
    console.log('追加成功');
})