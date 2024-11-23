
document.querySelector("button").addEventListener("click",myFunction);
//click korle function call hbe 



function myFunction(){
    alert("Hello");

}
//nicher vabeo anymous function create kore kora jay. j function er nam nai take anymous function bole.
/*document.querySelector("button").addEventListener("click",function() {

    alert("Hello");
});*/


var myVar=document.querySelector("h1");
myVar.addEventListener("click",function(){//type of event is click, function

    alert("This is a paragraph..");

});
var myVar=document.querySelector("h1");
myVar.addEventListener("mouseover",function(){

    myVar.classList.add("my-style");//css add kora

});
var myVar=document.querySelector("h1");
myVar.addEventListener("mousout",function(){

    myVar.classList.remove("my-style");

});

