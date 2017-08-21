/**
 * Created by 云雪 on 2017/8/11.
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
window.onload = function () {
    var voiceBtn = document.getElementById('voice');
    var tipV = document.getElementById('tipV');
    var appShop = document.getElementById('appShop');
    var setting = document.getElementById('setting');
    var sbox = document.getElementById('sbox');
    var appsShop=document.getElementById('appsShop');
    var morebtn=document.getElementById('moreb');
    var moreC=document.getElementById('moreC');
    var appsCon=document.getElementById('appsCon');
    var judge = true;
    var judge2=true;
    voiceBtn.onmouseover = function (event) {
        var event = event ? event : window.event;
        stopPro(event);
        tipV.style.display = "block";
    }
    voiceBtn.onmouseout = function (event) {
        event = event ? event : window.event;
        stopPro(event);
        tipV.style.display = "none";
    }
    setting.onclick = function (event) {
        var event = event ? event : window.event;
        prevent(event);
        document.onclick = function () {
            if (!judge) {
                sbox.style.display = "none";
                judge = !judge;
            }
        }
        if (judge) {
            sbox.style.display = "block";
            judge = !judge;
        } else {
            sbox.style.display = "none";
            judge = !judge;
        }
        stopPro(event);
    }
    appShop.onclick=function (event) {
        event=event?event:window.event;
        stopPro(event);
        document.onclick=function () {
            if(!judge2){
                appsShop.style.display="none";
                judge2=!judge2;
            }
        }
        if(judge2){
            appsShop.style.display="block";
            judge2=!judge2;
        }else {
            appsShop.style.display="none";
            judge2=!judge2;
        }
        appsShop.onmousewheel=function (event) {
            event=event?event:window.event;
            stopPro(event);
            if(event.deltaY>0){
                moreC.style.display="block";
                morebtn.style.display="none";
            }
        }
        appsCon.onscroll=function(event){
            stopPro(event);
            if(event.srcElement.scrollTop===0){
                moreC.style.display="none";
                morebtn.style.display="block";
            }
        }
    }
    morebtn.onclick=function (event) {
        event=event?event:window.event;
        stopPro(event);
        prevent(event);
        moreC.style.display="block";
        this.style.display="none";
        appsCon.scrollTop=appsCon.scrollHeight;
    }
}
