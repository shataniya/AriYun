$('#headerForm').hover(function(){
    $('#textInput').css('width','262px');
},function(){
    $('#textInput').css('width','150px');
});
/* console.log($('.product-layer li')); */
$('.product-layer li').click(function(){
    $(document.getElementById(this.dataset['shiftTo'])).fadeIn();
    $(document.getElementById(this.dataset['shiftTo'])).siblings().fadeOut();
    /* $('#layerItemContent').css('height',$(document.getElementById(this.dataset['shiftTo'])).css('height')); */
    if($(document.getElementById(this.dataset['shiftTo'])).css('height') != '400px'){
        /* $('#layerFooter').css('transform','translateY(-144px)'); */
        $('#layerItemContent').css('height','256px');
    }else{
        /* $('#layerFooter').css('transform','translateY(0px)'); */
        $('#layerItemContent').css('height','400px');
    }
    
    /* console.log($('#layerItemContent').css('height')); */

});

/* 轮播图 */
/* $('#lanternSlide').hover(function(){
    $('#prevBtn').css('transform','translateX(0px)');
    $('#nextBtn').css('transform','translateX(0px)');
},function(){
    $('#prevBtn').css('transform','translateX(-50px)');
    $('#nextBtn').css('transform','translateX(50px)');
}); */

$('#prevBtn').hover(function(){
    $('#lanternSlide').addClass('prevBtn');
},function(){
    $('#lanternSlide').removeClass('prevBtn');
});

$('#nextBtn').hover(function(){
    $('#lanternSlide').addClass('nextBtn');
},function(){
    $('#lanternSlide').removeClass('nextBtn');
});

$('#lanternSlide').hover(function(){
    $('#prevBtn').css('transform','translateX(0px)');
    $('#nextBtn').css('transform','translateX(0px)');
},function(event){
    if(event.pageY>=1793&&event.pageY<=2186){

    }
    else{
        $('#prevBtn').css('transform','translateX(-50px)');
        $('#nextBtn').css('transform','translateX(50px)');
    }
});


/* 当按下prevBtn和nextBtn */
$('#prevBtn').click(function(){
    var currentValue = $('#lanternSlide').offset().left;
    var newValue;
    if(Math.abs(currentValue) >= 2698){
        $('#lanternSlide').css('transition','transform 0.3s');
        newValue = currentValue + 1349;
        $('#lanternSlide').css('transform','translateX('+newValue+'px)');
    }else if(Math.abs(currentValue) > 1349){
        $('#lanternSlide').css('transition','transform 0.3s');
        newValue = -1349;
        $('#lanternSlide').css('transform','translateX('+newValue+'px)');
    }else{
        $('#lanternSlide').css('transition','transform 0.3s');
        newValue = 0;
        $('#lanternSlide').css('transform','translateX('+newValue+'px)');
        var count = 0;
        var timer = setInterval(function(){
            count++;
            /* 延迟0.3s执行 */
            if(count == 3){
                $('#lanternSlide').css('transition','transform 0s');
                $('#lanternSlide').css('transform','translateX(-2967.8px)');
                clearInterval(timer);
            }
        },100);
    }
});

$('#nextBtn').click(function(){
    var outerwidth = $(document).outerWidth();
    var innerwidth = $('#lanternSlide').outerWidth();
    var currentValue = $('#lanternSlide').offset().left;
    var oldValue;
    var newValue;
    oldValue = currentValue + innerwidth - outerwidth;
    if(Math.abs(oldValue) >= 2698){
        $('#lanternSlide').css('transition','transform 0.3s');
        newValue = currentValue - 1349;
        $('#lanternSlide').css('transform','translateX('+newValue+'px)');
    }else if(Math.abs(oldValue) > 1349){
        $('#lanternSlide').css('transition','transform 0.3s');
        newValue = 2*outerwidth - innerwidth;
        $('#lanternSlide').css('transform','translateX('+newValue+'px)');
    }else{
        $('#lanternSlide').css('transition','transform 0.3s');
        newValue = outerwidth - innerwidth;
        $('#lanternSlide').css('transform','translateX('+newValue+'px)');
        var count = 0;
        var timer = setInterval(function(){
            count++;
            /* 延迟0.3s执行 */
            if(count == 3){
                $('#lanternSlide').css('transition','transform 0s');
                $('#lanternSlide').css('transform','translateX(-1349px)');
                clearInterval(timer);
            }
        },100);
    }
});

$('.item-content-btn').hover(function(){
    $(this).css('color','#04c0dd');
    $(this).css('background-color','#fff');
},function(){
    $(this).css('color','#fff');
    $(this).css('background-color','transparent');
});

/***********  实现图片特效  ************/

$('.silde-item').hover(function(){
    $(this).find('.slide-item-bg').css('background-color','#00c1de');
    $(this).find('.slide-item-bg').css('opacity','0.9');
    $(this).find('.slide-item-link').css('top','55px');
    $(this).find('.item-image1').attr('src',$(this).find('.item-image2').attr('src'));
    /* $('#itemGap').css('transition','all 0s'); */
    $(this).find('.slide-item-gap').css('background-color','transparent');
    $(this).find('.slide-item-gap').css('margin-top','0');
    $(this).find('.slide-item-gap').css('height','0');
    $(this).find('.item-content-text').css('color','#fff');
    $(this).find('.item-content-btn').css('margin-top','30px');
    $(this).find('.item-content-btn').css('color','#fff');
    $(this).find('.item-content-btn').css('border-color','#fff');
    /* $('#slideLink').css('text-decoration','none'); */
},function(){
    $(this).find('.slide-item-bg').css('background-color','#000000');
    $(this).find('.slide-item-bg').css('opacity','0.5');
    $(this).find('.slide-item-link').css('top','100px');
    $(this).find('.item-image1').attr('src', $(this).find('.item-image3').attr('src'));
    $(this).find('.slide-item-gap').css('background-color','#fff');
    $(this).find('.slide-item-gap').css('margin-top','20px');
    $(this).find('.slide-item-gap').css('height','2px');
    $(this).find('.item-content-text').css('color','transparent');
    $(this).find('.item-content-btn').css('margin-top','62px');
    $(this).find('.item-content-btn').css('color','transparent');
    $(this).find('.item-content-btn').css('border-color','transparent');
});


/* 图片放大特效 */

$('.start-item-link').hover(function(){
    $(this).find('img').css('width','110%');
    $(this).find('.item-link-text').css('color','#00c1de');
},function(){
    $(this).find('img').css('width','100%');
    $(this).find('.item-link-text').css('color','#373d41');
});



/* 实现手风琴样式的开始菜单 */
/* 菜单的click()特效 */
$('.expend-item-link').click(function(){
    if($(this).parent().hasClass('active')){
        $(this).parent().removeClass('active');
        $(this).parent().css('height','18px');
        $(this).parent().siblings().css('height','18px');
    }else{
        $(this).parent().addClass('active');
        $(this).parent().css('height','122px');
        $(this).parent().siblings().css('height','18px');
    }
});


/* 菜单的hover()特效 */
/* $('.expend-item').hover(function(){
    $(this).css('height','122px');
    $(this).siblings().css('height','18px');
},function(){
    $(this).css('height','18px');
    $(this).siblings().css('height','18px');
}); */



/* 实现导航栏按钮的菜单切换效果 */
$('#dropdownBtn').hover(function(){
    $(this).css('background-color',"#04c0dd");
    $('#extendMenu').css('transform','translate(0px)');
},function(event){
    if(event.pageX <= $('#extendMenu').outerWidth() && event.pageY >= $('#extendMenu').offset().top && event.pageY <= $('#extendMenu').offset().top + $('#extendMenu').outerHeight() ){
        /* console.log('if: pageX='+event.pageX+",pageY="+event.pageY); */
    }else{
        /* console.log('else: pageX='+event.pageX+",pageY="+event.pageY); */
        $(this).css('background-color',"transparent");
        $('#extendMenu').css('transform','translate(-200px)');
        $('.extend-item-link').css('color','#fff');
        $('.extend-item-link').css('text-indent','0px');
    }
});


/* $('.extend-menu-item ').hover(function(){
    $(this).find('.extend-item-link').css('color','#00c1de');
    $(this).find('.extend-item-link').css('text-indent','10px');
    $(this.dataset['menuTo']).fadeIn();
    $(this.dataset['menuTo']).siblings().fadeOut();
},function(){
    if(event.pageX>=$('.extend-long-menu').offset().left && event.pageX<=$('.extend-long-menu').offset().left+$('.extend-long-menu').outerWidth()&&event.pageY>=$('.extend-long-menu').offset().top && event.pageY<=$('.extend-long-menu').offset().top+$('.extend-long-menu').outerHeight()){
        
    }else{
        $(this).find('.extend-item-link').css('color','#fff');
        $(this).find('.extend-item-link').css('text-indent','0px');
        $('.extend-long-menu').css('background-color','transparent');
        $('.long-menu-item').fadeOut();
        var count = 0;
        var timer = setInterval(function(){
            count++;
            if(count==10){
                $('.long-menu-item').css('transform','translateX(-1220px)');
                clearInterval(timer);
            }
        },30);
    }
}); */




/* 实现内容的弹出效果 */
$('#reLongMenu1').mouseenter(function(){
    $('.long-menu-item').css('transform','translateX(0px)');
    $('.extend-long-menu').css('background-color','#303538');
    $('.extend-long-menu').css('transform','translateX(0px)');
});
$('#reLongMenu9').mouseenter(function(){
    $('.long-menu-item').css('transform','translateX(0px)');
    $('.extend-long-menu').css('background-color','#303538');
    $('.extend-long-menu').css('transform','translateX(0px)');
});

$('.extend-menu-item').hover(function(){
    $(this).find('.extend-item-link').css('color','#00c1de');
    $(this).find('.extend-item-link').css('text-indent','10px');
    $(this).find('.extend-item-link').siblings().css('color','#fff');
    $(this).find('.extend-item-link').siblings().css('text-indent','0px');
    $(this.dataset['menuTo']).fadeIn();
    $(this.dataset['menuTo']).siblings().fadeOut();
},function(event){
    if(event.pageX<=$('#extendMenu').outerWidth()&&event.pageY>=$('#extendMenu').offset().top&&event.pageY<=$('#extendMenu').offset().top+325){
        $(this).find('.extend-item-link').css('color','#fff');
        $(this).find('.extend-item-link').css('text-indent','0px');
        $(this).find('.extend-item-link').siblings().css('color','#fff');
        $(this).find('.extend-item-link').siblings().css('text-indent','0px');
    }
    else if(event.pageY>=$('.extend-long-menu').offset().top&&event.pageY<=$('.extend-long-menu').offset().top+$('.extend-long-menu').outerHeight()&& event.pageX>=$('.extend-long-menu').offset().left && event.pageX<=$('.extend-long-menu').offset().left+$('.extend-long-menu').outerWidth()){
        /* $(this.dataset['menuTo']).fadeOut();
        $(this.dataset['menuTo']).siblings().fadeOut(); */
        $(this).find('.extend-item-link').css('color','#00c1de');
        $(this).find('.extend-item-link').css('text-indent','10px');
        $(this).find('.extend-item-link').siblings().css('color','#fff');
        $(this).find('.extend-item-link').siblings().css('text-indent','0px');
    }else{
        $('.long-menu-item').css('transform','translateX(-1220px)');
        $('.extend-long-menu').css('background-color','transparent');
        $('.extend-long-menu').css('transform','translateX(-1220px)');
        $(this).find('.extend-item-link').css('color','#fff');
        $(this).find('.extend-item-link').css('text-indent','0px');
        $(this).find('.extend-item-link').siblings().css('color','#fff');
        $(this).find('.extend-item-link').siblings().css('text-indent','0px');
    }
    
});



$('#extendMenu').hover(function(event){
    $('#dropdownBtn').css('background-color',"#04c0dd");
    /* if((event.pageX<=$('#extendMenu').outerWidth()&&event.pageY>=$('#extendMenu').offset().top&&event.pageY<=$('#extendMenu').offset().top+325){
        $('#dropdownBtn').css('background-color',"#04c0dd");
    }else{
        $('.long-menu-item').css('transform','translateX(-1220px)');
        $('.extend-long-menu').css('background-color','transparent')
    } */
    
},function(){
    if(event.pageY>=$('.extend-long-menu').offset().top&&event.pageY<=$('.extend-long-menu').offset().top+$('.extend-long-menu').outerHeight()&& event.pageX>=$('.extend-long-menu').offset().left && event.pageX<=$('.extend-long-menu').offset().left+$('.extend-long-menu').outerWidth()){

    }else{
        $('#dropdownBtn').css('background-color',"transparent");
        $(this).css('transform','translate(-200px)');
        $('.long-menu-item').css('transform','translateX(-1220px)');
        $('.extend-long-menu').css('background-color','transparent');
        $('.extend-long-menu').css('transform','translateX(-1220px)');
    }
    
});


/* 当扩展菜单被选中的时候，拉伸菜单要被反选中 */
$('.long-menu-item').hover(function(){
    /* console.log(this); */
    $(this.dataset['menuReturn']).find('.extend-item-link').css('color','#00c1de');
    $(this.dataset['menuReturn']).find('.extend-item-link').css('text-indent','10px');
    $(this.dataset['menuReturn']).find('.extend-item-link').siblings().css('color','#fff');
    $(this.dataset['menuReturn']).find('.extend-item-link').siblings().css('text-indent','0px');
},function(event){
    if(event.pageX<=$('#extendMenu').outerWidth()&&event.pageY>=$('#extendMenu').offset().top&&event.pageY<=$('#extendMenu').offset().top+$('#extendMenu').outerHeight()){
        $('.extend-item-link').css('color','#fff');
        $('.extend-item-link').css('text-indent','0px');
    }else{
        $('#extendMenu').css('transform','translate(-200px)');
        $('.long-menu-item').css('transform','translateX(-1220px)');
        $('.extend-long-menu').css('background-color','transparent');
        $('.extend-long-menu').css('transform','translateX(-1220px)');
        $('#dropdownBtn').css('background-color',"transparent");
        $(this.dataset['menuReturn']).find('.extend-item-link').css('color','#fff');
        $(this.dataset['menuReturn']).find('.extend-item-link').css('text-indent','0px');
        $(this.dataset['menuReturn']).find('.extend-item-link').siblings().css('color','#fff');
        $(this.dataset['menuReturn']).find('.extend-item-link').siblings().css('text-indent','0px');
    }
});

$('.extend-item-link').hover(function(){
    $(this).css('text-decoration','none');
    $(this).css('color','#00c1de');
    $(this).css('text-indent','10px');
    $(this).siblings().css('color','#fff');
    $(this).siblings().css('text-indent','0px');
},function(){
    if(event.pageY>=$('.extend-long-menu').offset().top&&event.pageY<=$('.extend-long-menu').offset().top+$('.extend-long-menu').outerHeight()&& event.pageX>=$('.extend-long-menu').offset().left-1 && event.pageX<=$('.extend-long-menu').offset().left+$('.extend-long-menu').outerWidth()){

    }else{
        $(this).css('color','#fff');
        $(this).css('text-indent','0px');
    }
});

$('.extend-menu-area').hover(function(){
    $('.long-menu-item').css('transform','translateX(-1220px)');
    $('.extend-long-menu').css('background-color','transparent');
    $('.extend-long-menu').css('transform','translateX(-1220px)');
},function(event){
    if(event.pageX<=$('#extendMenu').outerWidth()&&event.pageY>=$('#extendMenu').offset().top&&event.pageY<=$('#extendMenu').offset().top+$('#extendMenu').outerHeight()){
        /* $('.extend-item-link').css('color','#fff');
        $('.extend-item-link').css('text-indent','0px'); */
    }else{
        $('#extendMenu').css('transform','translate(-200px)');
        $('#dropdownBtn').css('background-color',"transparent");
        $('.extend-item-link').css('color','#fff');
        $('.extend-item-link').css('text-indent','0px');
    }
});



/* 点击中国站的时候会出现下拉菜单 */
$('.header-dropmenu').hover(function(){
    $(this).css('color','#04c0dd');
    $('.dropdown-content').css('padding','17px 20px');
    $('.dropdown-content').css('background-color','#1b2226');
    $('.dropdown-content').css('height','527px');
    $('.dropdown-item').css('height','36px');
    $('.dropdown-item-link h2').css('color','#fff');
    $('.dropdown-item-link p').css('color','#fff');
},function(event){
    if(event.pageY>=$('.dropdown-content').offset().top){
        $(this).css('color','#04c0dd');
    }else{
        var count=0;
        var timer = setInterval(function(){
            count++;
            if(count==10){
                $('.dropdown-content').css('padding','0px 20px');
                clearInterval(timer);
            }
        },30);
        /* $('.dropdown-content').css('padding','0px 20px'); */
        $('.dropdown-content').css('background-color','transparent');
        $('.dropdown-content').css('height','0');
        $('.dropdown-item').css('height','0');
        $('.dropdown-item-link h2').css('color','transparent');
        $('.dropdown-item-link p').css('color','transparent');
        $(this).css('color','#fff');
    }
  
});

/* 当下拉菜单选中的时候 */

$('.dropdown-item').hover(function(){
    $(this).find('.dropdown-item-link').find('h2').css('color','#00c1de');
    $(this).find('.dropdown-item-link').find('p').css('color','#00c1de');
},function(){
    $(this).find('.dropdown-item-link').find('h2').css('color','#fff');
    $(this).find('.dropdown-item-link').find('p').css('color','#fff');
});

/* 当鼠标离开下拉菜单的时候 */

$('.dropdown-content').hover(function(){
    /* console.log('in: '+$(this).outerHeight()); */
    $('.header-dropmenu').css('color','#04c0dd');
    /* $('.dropdown-content').css('padding','17px 20px');
    $('.dropdown-content').css('background-color','#1b2226');
    $('.dropdown-content').css('height','561px');
    $('.dropdown-item').css('height','36px');
    $('.dropdown-item-link h2').css('color','#fff');
    $('.dropdown-item-link p').css('color','#fff'); */
},function(event){
    /* console.log('pageX= '+event.pageX);
    console.log('left = '+$('.header-dropmenu').offset().left); */
    if(event.pageX<=$('.header-dropmenu').outerWidth()+$('.header-dropmenu').offset().left&&event.pageX>=$('.header-dropmenu').offset().left){
        /* console.log('in item: '+$(this).outerHeight()); */
        $('.header-dropmenu').css('color','#04c0dd');
        /* $('.dropdown-content').css('padding','17px 20px'); */
    }else{
        console.log('out: '+$(this).outerHeight());
        var count=0;
        var timer = setInterval(function(){
            count++;
            if(count==10){
                $('.dropdown-content').css('padding','0px 20px');
                clearInterval(timer);
            }
        },30);
        /* $('.dropdown-content').css('padding','0px 20px'); */
        $('.dropdown-content').css('background-color','transparent');
        $('.dropdown-content').css('height','0');
        $('.dropdown-item').css('height','0');
        $('.dropdown-item-link h2').css('color','transparent');
        $('.dropdown-item-link p').css('color','transparent');
        $('.header-dropmenu').css('color','#fff');
    }
    
});