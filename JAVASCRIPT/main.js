$(document).ready(function () {
    var suggestionList = $(".suggestion-list");
    var searchInput = $(".search-input");

    searchInput.on("input", function () {
        var searchText = $(this).val().toLowerCase();
        suggestionList.empty();

        $("h1:not(#page1 h1)").each(function () {
            var title = $(this).text().toLowerCase();
            if (title.includes(searchText)) {
                var suggestionItem = $("<li>").text(title);
                suggestionList.append(suggestionItem);
            }
        });

        if (searchText.length > 0 && suggestionList.is(":hidden")) {
            suggestionList.slideDown();
        } else if (searchText.length === 0 && suggestionList.is(":visible")) {
            suggestionList.slideUp();
        }
    });

    suggestionList.on("click", "li", function () {
        if($(window).width() <= 700) {
            $('.slide').slideToggle();
        }
        var searchValue = $(this).text();
        searchInput.val(searchValue);

        var targetHeader = $("h1").filter(function () {
            return $(this).text().toLowerCase() === searchValue.toLowerCase();
        });

        if (targetHeader.length > 0) {
            var offsetTop = targetHeader.offset().top - $('h1').height() - $('h1').height();
            $("html, body").animate({
                scrollTop: offsetTop
            }, 500);
        }

        suggestionList.slideUp();
    });

   

    // FORM
    $('.eye').click(function(){
        $(this).toggleClass('open')
        $(this).toggleClass('fa-eye-slash fa-eye')
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text')
        } else {
            $(this).prev().attr('type', 'password')
        }
    })

    $('.btn-login').click(function() {
        if($('#cover-login').css('display') != 'none') {
            $('#cover-login').css('display', 'none');
        }   else {
            $('#cover-login').css('display', 'block');
        }
     });

    $('.btn-regis').click(function() {
        if($('#cover-regis').css('display') != 'none') {
            $('#cover-regis').css('display', 'none');
        } else {
            $('#cover-regis').css('display', 'block');
        }
    })

     //BACK TOP TOP

     $(window).scroll(function() {
        if ($(this).scrollTop() == 0) {
            $('#backtop').fadeOut();
        } else {
            $('#backtop').fadeIn();
        }
    }) 
    

    $('#backtop').click(function() {
        $('html, body').animate({scrollTop: 0}, 1000);
    });

       //SLIDE MENU
       $('.fa-bars').click( function() {
        $('.slide').slideToggle();
    })

    $('.submit').click(function() {
        alert("Đã đăng ký nhận thông báo")
    })
});