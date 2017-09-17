/**
 * Created by Hu on 2017/9/10.
 */
const config = {
    name : 'shop',
    files : [
        {
            type : 'dir',
            name : 'css',
        },
        {
            type : 'dir',
            name : 'js',
        },
        {
            type : 'dir',
            name : 'images',
        },
        {
            type : 'file',
            name : 'index.html',
            content : '<!DOCTYPE html><html lang="en"><head>' +
            '<meta charset="UTF-8"></head><body></body></html>'
        },
    ]
};
const fs = require('fs');
if(config.name) {
    fs.mkdirSync(config.name);
    config.files.forEach((item) => {
        if(item.type == 'dir'){
            fs.mkdirSync(config.name + '/' + item.name);
        }else if(item.type == 'file'){
            fs.writeFileSync(config.name + '/' + item.name, item.content);
        }
    })
}