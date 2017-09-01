/**
 * Created by Hu on 2017/8/26.
 */

function addEvent(obj, type, handler){
    if(obj.addEventListener){
        obj.addEventListener(type, handler);
    }else if(obj.attachEvent){
        obj.attachEvent('on' + type, handler);
    }else{
        obj['on'+type] = handler;
    }
}

function removeEvent(obj, type, handler){
    if(obj.removeEventListener){
        obj.removeEventListener(type, handler);
    }else if(obj.detachEvent){
        obj.detachEvent('on'+type, handler);
    }else{
        obj['on'+type] = null;
    }
}

function slide(obj, x1, x2, step, interval){
    clearInterval(obj.timer);
    if(x1 < x2){
        obj.timer = setInterval(function(){
            x1 += step;
            obj.style.left = x1 + 'px';
            if(x1 > x2){
                clearInterval(obj.timer);
                obj.style.left = x2 + 'px';
            }
        }, interval);
    }else{
        obj.timer = setInterval(function(){
            x1 -= step;
            obj.style.left = x1 + 'px';
            if(x1 < x2){
                clearInterval(obj.timer);
                obj.style.left = x2 + 'px';
            }
        }, interval);
    }
}

function $(id){
    return document.getElementById(id);
}

function animate(offset){
    var newLeft = parseInt(pics.style.left) + offset;
    console.log(newLeft);
    pics.style.left = newLeft + 'px';
    if(newLeft < -2500){
        pics.style.left = 0;
    }
    if(newLeft > 0){
        pics.style.left = '2500px';
    }
}
