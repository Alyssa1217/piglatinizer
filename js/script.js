$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
$("button").click(function(){
    // $("output").text("");
    var pigLatin = $("input").val();
    var pigLatin_array = pigLatin.split();


    console.log(pigLatin_array);
    $('.output').append();
});
});
