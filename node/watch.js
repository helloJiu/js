/**
 * Created by Hu on 2017/9/10.
 */
const fs = require('fs');
fs.watch('shop', (event, filename) =>{
    console.log(event + '------' + filename);
})