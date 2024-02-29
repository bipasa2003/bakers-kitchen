
$(document).ready(function(){
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#topbutton').fadeIn();
        }else{
            $('#topbutton').fadeOut();
        } 
    });

    $("#topbutton").click(function(){
        $('html ,body').animate({scrollTop : 0},800);
    });
});





var button = document.getElementById('rightside');

    function Togglebar(){
        button.style.top ="80px";
    } 
    function Hidemenu(){
        button.style.top = "-500px";
        
    }
