$(document).ready(function() {

            var nametext = localStorage.getItem('nametext');
            var gendertext = localStorage.getItem('gendertext');
            $(".name").html(nametext);
            $(".gender").html(gendertext);



            $(".shoesImage").click(function(event) {
                $(".shoesImage").css("position", "relative");


                var target = event.currentTarget;
                $(target).css("top", "375px");
                $(target).css("left", "170px");
                $(target).css("position", "fixed");

            });

            $(".hatsImage").click(function(event) {
                $(".hatsImage").css("position", "relative");


                var target = event.currentTarget;
                $(target).css("top", "020px");
                $(target).css("left", "170px");
                $(target).css("position", "fixed");


            });
            
             $(".bottomImage").click(function(event) {
                $(".bottomImage").css("position", "relative");


                var target = event.currentTarget;
                $(target).css("top", "320px");
                $(target).css("left", "170px");
                $(target).css("position", "fixed");


            });



$(".topsImage").click(function(event) {
                $(".topsImage").css("position", "relative");


                var target = event.currentTarget;
                $(target).css("top", "224px");
                $(target).css("left", "120px");
                $(target).css("position", "fixed");


            });



            

});
