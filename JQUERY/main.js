
// $("selector").accion

//$("h1").hide(); //ocultar

// $(document).ready(function(){

// });

$(function(){
//$("p").css({"background-color": "red"}) //colorear rojo todos los contnedores p
//$("#segundo").css({"background-color": "red"})
$(".primero").css({"background-color": "red"}) //aplicar estilo cs
$("#segundo").css({"background-color": "green"})
$("#tercero").css({"background-color": "yellow"})
//$(".primero").animate({width : "300px"})


// animacion desaparecer - aparecer
// $("#btn-hide-mouse").mouseenter(function(){
//     $("#segundo").fadeIn();
// });
// $("#btn-hide-mouse").mouseleave(function(){
//     $("#segundo").fadeOut();
// });

// animación creada con css
$("#btn-hide-mouse-anim").mouseenter(function(){
    $(".primero").animate({width : "300px"})
});
$("#btn-hide-mouse-anim").mouseleave(function(){
    $(".primero").animate({width : "400px"})
});

//mostrar ocultar parrafo (al pasar mouse)
$("#btn-hide-mouse").mouseenter(function(){
    $("#segundo").slideDown();
});
$("#btn-hide-mouse").mouseleave(function(){
    $("#segundo").slideUp();
});

// mostrat ocultar (2 click) parrafo
$("#btn-hide").dblclick(function(){
    //alert("Hola");
    $("#tercero").hide();
});
$("#btn-show").click(function(){
    //alert("Hola");
    $("#tercero").show();
});

// mostrar texto de HTML en alert
// $("#btn-alert").click(function(){
//     alert($("#segundo").text());
// });

//lo mismo pero si hay etiquetas HTmL las muestra tambien
// $("#btn-alert").click(function(){
//     alert($("#segundo").html());
// });

//muestra un atributo - en este caso el title
$("#btn-alert").click(function(){
    alert($("#segundo").attr("title"));
});

//modifica texto - borra y sustituye
// $("#btn-prueba").click(function(){
//     $("#segundo").text("Hola")
// });

//modifica texto - borra y sustituye pero deja sacar html
// $("#btn-prueba").click(function(){
//     $("#segundo").html("Hola <strong>programadores</strong>")
// });

//modifica texto - deja sacar html - annade cada vez q se le de al botón
// $("#btn-prueba").click(function(){
//     $("#segundo").append("Hola <strong>programadores</strong>")
// });

//modifica texto - deja sacar html - annade AL PRINCIPIO cada vez q se le de al botón
// $("#btn-prueba").click(function(){
//     $("#segundo").prepend("Hola <strong>programadores</strong>")
// });

//modifica texto - deja sacar html - annade un parrafo nuevo cada vez q se le de al botón
// $("#btn-prueba").click(function(){
//     $("#segundo").after("<p>Hola <strong>programadores</strong></p>")
// });

//modifica texto - deja sacar html - annade un parrafo nuevo  ANTES cada vez q se le de al botón
$("#btn-prueba").click(function(){
    $("#segundo").before("<p>Hola <strong>programadores</strong></p>")
});

//modifica texto - Elimina
$("#btn-elim").click(function(){
    $("#segundo").remove();
});

//deja el botón sin contenido
$("#btn-vaciar").click(function(){
    $("#btn-vaciar").empty();
});

//annade la clase red a todos los h1
$("#class-red").click(function(){
    $("h1").addClass("red");
});

//annade la clase blue a todos los h1
// $("#class-blue").click(function(){
//     $("h1").addClass("blue");
// });

//elimina la clase blue y red a todos los h1
$("#class-black").click(function(){
    $("h1").removeClass("blue");
    $("h1").removeClass("red");
});

//annade y quita la clase blue a todos los h1
$("#class-blue").click(function(){
    $("h1").toggleClass("blue");
});

});
