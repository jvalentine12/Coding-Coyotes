

$(document).ready(function() {
    $(".button").click(function(event) {



        var target = event.currentTarget;

        var nametext = $(".nameinput").val();

        var gendertext = $(".genderinput").val();


        localStorage.setItem('nametext', nametext);

        localStorage.setItem('gendertext', gendertext);


    });
});






var imageUrl = localStorage.getItem('image');
$('#image').append('<img src="' + imageUrl + '">');



//https://preview.c9users.io/jvalentine12/coding-coyotes/main.html?_c9_id=livepreview2&_c9_host=https://ide.c9.io