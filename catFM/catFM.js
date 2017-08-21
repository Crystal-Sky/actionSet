/**
 * Created by 云雪 on 2017/8/19.
 */
function stopPro(event) {
    if(event.stopPropagation){
        event.stopPropagation();
    }else{
        event.cancelBubble=true;
    }
}
function prevent(event) {
    if(event.preventDefault){
        event.preventDefault();
    }else{
        event.returnValue=false;
    }
}
window.onload=function () {
    var bottom_ul=document.getElementById('bottom_ul');
    var bottom_lis=bottom_ul.children;
    var blis_len=bottom_lis.length;
    for(var i=1;i<blis_len;i++){
        bottom_lis[i].onmouseover=function (event) {
            event=event?event:window.event;
            stopPro(event);
            this.firstElementChild.style.color="#d41";
            this.lastElementChild.style.display="block";
        }
        bottom_lis[i].onmouseout=function (event) {
            event=event?event:window.event;
            stopPro(event);
            this.firstElementChild.style.color="#333";
            this.lastElementChild.style.display="none";
        }
    }
}