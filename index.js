// alert("hh");
console.log(  $("button").class);

$("button").click(function(){
    $("h1").text("hey, it's purple ");
    $("h1").css("color","purple");
    setTimeout(function(){  $("h1").removeClass("c1");
   
    $("h1").addClass("c1");
    $("h1").css("color","Red");
    $("h1").text("Tnx for clicking , your are awesome ");
    $("button").html("<em> click me again </em>");
    $("button").addClass("c2");
    $("button").click(function(){
        $("h1").css("color","green");
        // console.log(  $("h1").css("color") );
        
        $("h1").text("hey, it's green ");
    });
}, 1200);

    });

    $("input").keydown(function(event){
        $($("h1").text(""+event.key)).css("color","green");

    
    });
    