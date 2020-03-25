$('document').ready(function()
{


    
    new WOW().init();
    //scren welcome

	// $(".cont").animate({
    //     top:'0',
    //     width:'100%'
    // },2000,function(){
    //     $(".image").fadeIn(1500,function(){
    //         $(".btn").fadeIn(1500);
    //     });
    // });

    // show welcome screen
    $(".image").fadeIn(1500,function(){
        $(".btn").fadeIn(1500);
    }),
    

    //hidden welcome screen

    $('.join').click(function () { 
        $(".cont").fadeOut(1000);
        $("#signIn").fadeIn(1000);
    });

    $('.head-login a').click(function(e) {
        e.preventDefault();
        $(this).addClass('selection').siblings().removeClass('selection');

    });

    $('.log').click(function(){
        $('.logIn').fadeIn(500);
        $('.regester').fadeOut(500)
    });
    $('.sign').click(function(){
        $('.regester').fadeIn(500);
        $('.logIn').fadeOut(500)
    });

    //show sidebar

    $('.fa-bars').click(function() {

        let slidWidth = $('.sidebar-left').outerWidth(true);

        if ($('.sidebar-left').css('right') == '0px') {
            $('.sidebar-left').animate({right:`-${slidWidth}px`},500)
        }else {
            $('.sidebar-left').animate({right:'0'},500)
        }

        $('.content').toggleClass('addWidth');
    });    


    $('.home').height($(window).height())
    $('.contenthome2').height($('.home').height());



    //////////////////////////// Show Subject  ////////////////////////////////// 
    
    $('.showSub').click(function() {
        //$('.subject-right ul').slideToggle(500);
        
        $('#' + $(this).data('showw')).slideToggle(500).siblings('ul').slideUp();

    })

});


// puer javascript 

var temp = '';
var cent = "";
for (var i = 1; i < 100; i++) {

    temp += `<option>`[i]`</option>`;
    document.getElementById("num-stu").innerHTML = temp;
}

for (var i = 0; i <= 50; i++) {

    temp += '<option>'+[i]+'</option>';
    document.getElementById("num").innerHTML = temp;
};






