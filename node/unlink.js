/**
 * Created by Hu on 2017/9/10.
 */
const fs = require('fs');

// console.log(fs);
// fs.unlink('write.txt', (err) => {
//     if(err) throw err;
//     console.log('删除成功');
// })
// var a = 0;
// for(let i=0; i<100000000; i++){
//     a = i;
// }
// console.log(a);
// fs.stat('file.js', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// })

// fs.mkdir('./aaa', '777', (err) => {
//     if(err) throw err;
// })
//
// fs.exists('.aaab', (err) => {
//     if(err) throw err;
//     console.log('开始删除')
//     fs.rmdir('./aaa', (err) => {
//         if(err) throw err;
//     })
// });
const removeDir = (dir) => {
    fs.readdir(dir, (err, files) => {
        // console.log(files);
        files.forEach((item) => {
            let file = dir + '/' + item;
            if(fs.statSync(file).isFile()){
                fs.unlink(file, (err) => {
                    if(err) throw err;
                    console.log(`删除文件${file}成功`);
                })
            }else{
                removeDir(file);
                fs.rmdir(file, (err) => {
                    if(err) throw err;
                    console.log(`删除目录${file}成功`);
                })
            }
        })
    })
};

removeDir('./aaa');




