$('#formSearch').hover(function(){
    $('#searchText').css('width','262px');
    $(this).css('border-color','#04c0dd');
},function(){
    $('#searchText').css('width','149px');
    $(this).css('border-color','rgba(255, 255, 255, 0.15)');
});
$('#topbar').hover(function(){
    $('#topbar').css('background-color','#1b2226')
},function(){
    $('#topbar').css('background-color','transparent');
});
$('.carousel-slide .carousel-item').fadeOut();
