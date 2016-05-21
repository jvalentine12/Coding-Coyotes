$(document).ready(function() {

            var nametext = localStorage.getItem('nametext');
            var gendertext = localStorage.getItem('gendertext');
            console.log(localStorage);
            $(".name").html(nametext);
            $(".gender").html(gendertext);



            $(".shoesImage").click(function(event) {
                $(".shoesImage").css("position", "relative");
                $(".shoesImage").css("top", 0); 
                $(".shoesImage").css("left", 0);
                



                var target = event.currentTarget;
                $(target).css("top", "460px");
                $(target).css("left", "170px");
                $(target).css("position", "fixed");

            });

            $(".hatsImage").click(function(event) {
                $(".hatsImage").css("position", "relative");
                 $(".hatsImage").css("top", 0); 
                $(".hatsImage").css("left", 0);


                var target = event.currentTarget;
                $(target).css("top", "020px");
                $(target).css("left", "170px");
                $(target).css("position", "fixed");


            });
            
             $(".bottomImage").click(function(event) {
                $(".bottomImage").css("position", "relative");
                 $(".bottomImage").css("top", 0); 
                $(".bottomImage").css("left", 0);


                var target = event.currentTarget;
                $(target).css("top", "360px");
                $(target).css("left", "170px");
                $(target).css("position", "fixed");


            });



$(".topsImage").click(function(event) {
                $(".topsImage").css("position", "relative");
                 $(".topsImage").css("top", 0); 
                $(".topsImage").css("left", 0);


                var target = event.currentTarget;
                $(target).css("top", "224px");
                $(target).css("left", "190px");
                $(target).css("position", "fixed");


            });



            

});
