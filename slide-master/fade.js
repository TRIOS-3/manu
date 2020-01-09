$(document).ready(function(){
    counter = 4; // for product 2

    $(".next").click(function(){
        if(counter == 1)
        {
            $(".c++").animate({display: "none"});
            $(".chem").animate({left:"-87%"});
            $(".book-1").fadeOut(500);
            $(".book-2").fadeIn(500);
            counter = 2;
        }
        else if(counter == 2)
        {
            $(".chem").animate({display: "none"});
            $(".cp").animate({left:"-87%"});
            $(".book-2").fadeOut(500);
            $(".book-3").fadeIn(500);
            counter = 3;
        }
        else if(counter == 3)
        {
            $(".cp").animate({display: "none"});
            $(".e2").animate({left:"-87%"});
            $(".book-3").fadeOut(500);
            $(".book-4").fadeIn(500);
            counter = 4;
        }
    });

    $(".pre").click(function(){
        if(counter == 4)
        {
            $(".book-4").fadeOut(500);
            $(".book-3").fadeIn(500);
            $(".e2").animate({left:"100%"});
            $(".cp").animate({left:"-240"});
            counter = 3;
        }
        else if(counter == 3)
        {
            $(".book-3").fadeOut(500);
            $(".book-2").fadeIn(500);
            $(".cp").animate({left:"100%"});
            $(".chem").animate({left:"-240"});
            counter = 2;
        }
        else if(counter == 2)
        {
            $(".book-2").fadeOut(500);
            $(".book-1").fadeIn(500);
            $(".chem").animate({left:"100%"});
            $(".c++").animate({left:"87%"});
            counter = 1;
        }
    });
});

if(window.matchMedia('(max-width:370px)').matches){
    $(document).ready(function(){
        counter = 4;
    
        $(".next").click(function(){
            if(counter == 1)
            {
                $(".c++").animate({display: "none"});
                $(".chem").animate({left:"-87%"});
                $(".book-1").fadeOut(500);
                $(".book-2").fadeIn(500);
                counter = 2;
            }
            else if(counter == 2)
            {
                $(".chem").animate({display: "none"});
                $(".cp").animate({left:"-87%"});
                $(".book-2").fadeOut(500);
                $(".book-3").fadeIn(500);
                counter = 3;
            }
            else if(counter == 3)
            {
                $(".cp").animate({display: "none"});
                $(".e2").animate({left:"-87%"});
                $(".book-3").fadeOut(500);
                $(".book-4").fadeIn(500);
                counter = 4;
            }
        });
    
        $(".pre").click(function(){
            if(counter == 4)
            {
                $(".book-4").fadeOut(500);
                $(".book-3").fadeIn(500);
                $(".e2").animate({left:"100%"});
                $(".cp").animate({left:"-87"});
                counter = 3;
            }
            else if(counter == 3)
            {
                $(".book-3").fadeOut(500);
                $(".book-2").fadeIn(500);
                $(".cp").animate({left:"100%"});
                $(".chem").animate({left:"-240"});
                counter = 2;
            }
            else if(counter == 2)
            {
                $(".book-2").fadeOut(500);
                $(".book-1").fadeIn(500);
                $(".chem").animate({left:"100%"});
                $(".c++").animate({left:"87%"});
                counter = 1;
            }
        });
    });
}