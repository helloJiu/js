/**
 * Created by Hu on 2017/9/13.
 */
const inArray = (arr, value) => {
    flag = false;
    arr.forEach((item) => {
        if(item == value){
            flag = true;
            return;
        }
    });
    return flag;
}

// console.log(inArray([1,2,3], 4));
module.exports = {
    inArray : inArray,
}