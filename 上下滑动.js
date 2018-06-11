

    function wetherScroll(){
        var startX = startY = endX =endY =0;
        var body=$(window);
        body.bind('touchstart',function(event){
            var touch = event.targetTouches[0];
            //滑动起点的坐标
            startX = touch.pageX;
            startY = touch.pageY;
            // console.log("startX:"+startX+","+"startY:"+startY);
        });
        body.bind("touchmove",function(event){
            var touch = event.targetTouches[0];
            //手势滑动时，手势坐标不断变化，取最后一点的坐标为最终的终点坐标
            endX = touch.pageX;
            endY = touch.pageY;
            // console.log("endX:"+endX+","+"endY:"+endY);
        })
        body.bind("touchend",function(event){
            var distanceX=endX-startX,
                distanceY=endY - startY;
            // console.log("distanceX:"+distanceX+","+"distanceY:"+distanceY);
            //移动端设备的屏幕宽度
            var clientHeight =document.documentElement.clientHeight;
            // console.log(clientHeight;*0.2);
            //判断是否滑动了，而不是屏幕上单击了
            if(startY!=Math.abs(distanceY)){
                //在滑动的距离超过屏幕高度的20%时，做某种操作

                if(Math.abs(distanceY)>clientHeight*0.2){
                    //向下滑实行函数someAction1，向上滑实行函数someAction2
                    distanceY <0 ? someAction1():someAction2();
                }
            }
            startX = startY = endX =endY =0;
        })
    }
    function someAction1() {
		console.log(someAction1)
		alert(1)
    }
    function someAction2() {
        console.log(someAction2)
    }
    wetherScroll();
