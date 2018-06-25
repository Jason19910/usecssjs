function CheckIFView(id){

    var mh=0;//距离可视范围的高度
    var t=$("#"+id).offset().top-mh;
    if (t >= $(window).scrollTop() && t < ($(window).scrollTop()+$(window).height())) {
        return true;
    }else{
        return false;
    }
}
